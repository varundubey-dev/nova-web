from pydantic import BaseModel


class TokenizeRequest(BaseModel):
    code: str