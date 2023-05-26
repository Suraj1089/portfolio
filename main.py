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
                'created_at':datetime.strftime(i.created_at, '%Y-%m-%d %H:%M:%S')
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



if __name__ == '__main__':
    import uvicorn
    uvicorn.run('main:app',host='0.0.0.0',port=8001,reload=True)