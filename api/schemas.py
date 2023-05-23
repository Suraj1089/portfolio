from typing import List, Union

from pydantic import BaseModel


class UserLogin(BaseModel):
    username: str 
    password: str 


