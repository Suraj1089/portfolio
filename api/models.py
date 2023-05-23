from sqlalchemy import Boolean, Column, ForeignKey, Integer, String,DateTime,Text
from sqlalchemy.orm import relationship
from datetime import datetime

from .db import Base


class User(Base):
    
    __tablename__ = "users"
    id = Column(Integer,primary_key=True,index=True)
    email = Column(String,index=True)
    hashed_password = Column(String,index=True)
    created_at = Column(DateTime,default=datetime.now())


class Contact(Base):
    __tablename__ = 'contacts'
    
    id = Column(Integer,primary_key=True,index=True)
    name = Column(String)
    email = Column(String,index=True)
    subject = Column(String)
    message = Column(Text)
    created_at = Column(DateTime,default=datetime.now())

