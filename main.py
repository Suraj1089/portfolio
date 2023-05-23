from fastapi import FastAPI, Request,Form, Depends,status,HTTPException
from fastapi.responses import HTMLResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from api.db import get_db,engine
from api import models


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
    return templates.TemplateResponse("index.html", {"request": request})



@app.post('/message')
async def send_message(request: Request,db: Session = Depends(get_db)):
    data = await request.form()
    try:
        contact = models.Contact(name=data['name'],email=data['email'],subject=data['subject'],message=data['message_body'])
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
    

if __name__ == '__main__':
    import uvicorn
    uvicorn.run('main:app',host='0.0.0.0',port=8000,reload=True)