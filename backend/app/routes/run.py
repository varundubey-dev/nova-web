from fastapi import APIRouter

from app.schemas.run import RunRequest
from app.services.runner import run

router = APIRouter(
    prefix="/run",
    tags=["Runner"],
)


@router.post("")
def run_code(request: RunRequest):
    return run(request.code)