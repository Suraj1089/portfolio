from fastapi import FastAPI, Request,Form, Depends,status,HTTPException
from fastapi.responses import HTMLResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from api.db import get_db,engine
from api import models,schemas
import os
from datetime import datetime
import pytz
import mailtrap as mt
from bs4 import BeautifulSoup
import requests




models.Base.metadata.create_all(bind=engine)


app = FastAPI()
app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )



app.mount("/static", StaticFiles(directory="static"), name="static")


templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("index.html", {"request": request,'base_url':'https://surajpisal.onrender.com/'})



@app.post('/message',status_code=status.HTTP_201_CREATED)
async def send_message(request: Request,db: Session = Depends(get_db)):
    data = await request.form()
    print(data)
    try:
        contact = models.Contact(name=data['name'],email=data['email'],role=data['role'],subject=data['subject'],message=data['message_body'])
        db.add(contact)
        db.commit()
        db.refresh(contact)
        print(contact)
        try:
            # create mail object
            print('trying to send email')
            print(os.getenv('MAIL_TOKEN'))
            print(data['email'])
            mail = mt.Mail(
                sender=mt.Address(email=f"{data['email']}", name="Mailtrap Test"),
                to=[mt.Address(email="surajpisal113@gmail.com")],
                subject="You are awesome!",
                text="Congrats for sending test email with Mailtrap!",
            )
            # create client and send
            client = mt.MailtrapClient(token=os.getenv('MAIL_TOKEN'))
            client.send(mail)
        except:
            return JSONResponse(
                content='Error in sending mail!',
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        return JSONResponse(
            content='Message Sent Successfully!',
            status_code=status.HTTP_201_CREATED
        )
    except Exception:
        raise HTTPException(
            status_code=status.WS_1013_TRY_AGAIN_LATER,
            detail='Unable to send message try again!'
        )

@app.post('/messages',status_code=status.HTTP_200_OK)
def get_users_messages(request: schemas.UserLogin, db: Session = Depends(get_db),skip: int = 0, limit: int = 20):
    username = os.getenv('ADMIN_USER_EMAIL')
    password = os.getenv('ADMIN_USER_PASSWORD')
    if request.username == username and request.password == password:
        messages = db.query(models.Contact).offset(skip).limit(limit).all()
        messages_response = []
        for i in messages:
            messages_response.append({
                'id':i.id,
                'name':i.name,
                'email':i.email,
                'role':i.role,
                'subject':i.subject,
                'message':i.message,
                'created_at':i.created_at.replace(tzinfo=pytz.utc).astimezone(pytz.timezone('Asia/Kolkata')).strftime('%Y-%m-%d %H:%M:%S')
            })

        return messages_response

    raise HTTPException(
        status_code=status.HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS,
        detail='Invalid Credentials! You are not an admin.'
    )

@app.delete('/messages', status_code=status.HTTP_200_OK)
def delete_all_messages(request: schemas.UserLogin, db: Session = Depends(get_db)):
    username = os.getenv('ADMIN_USER_EMAIL')
    password = os.getenv('ADMIN_USER_PASSWORD')
    if request.username == username and request.password == password:
        db.query(models.Contact).delete()
        db.commit()
        return {'message': 'All messages deleted'}
    raise HTTPException(
        status_code=status.HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS,
        detail='Invalid Credentials! You are not an admin.'
    )


@app.get("/status")
def get_status():
    # The URL of the GitHub profile
    url = 'https://github.com/Suraj1089'

    # Send an HTTP GET request to the URL
    response = requests.get(url)

    if response.status_code == 200:
        # Parse the HTML content using Beautiful Soup
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find the element that contains the status
        status_element = soup.find('div', class_='user-status-message-wrapper')

        if status_element:
            status = status_element.find('div').text.strip()
            return {"status": status}
        else:
            return {"status": "Status element not found"}
    else:
        return {"error": f"Failed to retrieve the page. Status code: {response.status_code}"}


if __name__ == '__main__':
    import uvicorn
    uvicorn.run('main:app',host='0.0.0.0',port=8001,reload=True)

 