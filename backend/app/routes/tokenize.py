from fastapi import APIRouter

from app.schemas.tokenize import TokenizeRequest
from app.services.tokenizer import tokenize

router = APIRouter(
    prefix="/tokenize",
    tags=["Tokenizer"],
)


@router.post("")
def tokenize_code(request: TokenizeRequest):
    return tokenize(request.code)
