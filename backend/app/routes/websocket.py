from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from app.services.tokenizer import tokenize

router = APIRouter(
    prefix="/ws",
    tags=["WebSocket"],
)


@router.websocket("/playground")
async def playground_socket(websocket: WebSocket):
    await websocket.accept()

    try:
        while True:
            data = await websocket.receive_json()

            code = data.get("code")

            if not isinstance(code, str):
                continue

            result = tokenize(code)

            await websocket.send_json(result)

    except WebSocketDisconnect:
        pass