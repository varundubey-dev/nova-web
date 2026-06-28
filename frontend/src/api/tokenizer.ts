import { api } from "@api/client";
import type { Token, SemanticToken } from "@syntax/token";

interface TokenizeRequest {
  code: string;
}

interface TokenizeResponse {
  tokens: Token[];
  semantic: SemanticToken[];
}

export async function tokenize(code: string): Promise<TokenizeResponse> {
  const request: TokenizeRequest = {
    code,
  };

  const response = await api.post<TokenizeResponse>("/tokenize", request);

  return response.data;
}
