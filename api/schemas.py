from typing import List, Union

from pydantic import BaseModel


class BlogBase(BaseModel):
    title: str
    description: Union[str, None] = None


class ItemCreate(BlogBase):
    pass


class Blog(BlogBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


