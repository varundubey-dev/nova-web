from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["Health"])


@router.get("")
def root():
    return {
        "name": "NOVA API",
        "status": "online",
        "version": "1.0.0",
    }