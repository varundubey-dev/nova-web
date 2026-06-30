import type { SemanticToken, Token } from "@syntax/token";

export interface PlaygroundResponse {
  tokens: Token[];
  semantic: SemanticToken[];
  error: unknown;
}

type MessageHandler = (response: PlaygroundResponse) => void;

export class PlaygroundSocket {
  private socket: WebSocket;

  private pendingCode: string | null = null;

  constructor(onMessage: MessageHandler) {
    this.socket = new WebSocket(
      `ws://${import.meta.env.VITE_API_URL_WEBSOCKET}/ws/playground`,
    );

    this.socket.onopen = () => {
      if (this.pendingCode === null) return;

      this.socket.send(
        JSON.stringify({
          code: this.pendingCode,
        }),
      );

      this.pendingCode = null;
    };

    this.socket.onmessage = (event) => {
      onMessage(JSON.parse(event.data));
    };

    this.socket.onerror = (error) => {
      console.error(error);
    };
  }

  send(code: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(
        JSON.stringify({
          code,
        }),
      );

      return;
    }

    this.pendingCode = code;
  }

  close() {
    this.socket.close();
  }
}