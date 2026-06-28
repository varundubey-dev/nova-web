from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.tokenize import router as tokenize_router
from app.routes.health import router as health_router
from app.config import settings

app = FastAPI(
    title="NOVA API",
    description="Backend API for the NOVA programming language.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(tokenize_router)