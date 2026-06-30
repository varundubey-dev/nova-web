import { api } from "@api/client";

export interface RunError {
  category: string;
  message: string;
  line: number;
  column: number;
  sourceLine: string;
}

export interface RunResponse {
  output: string[];
  error: RunError | null;
}

interface RunRequest {
  code: string;
}

export async function run(code: string): Promise<RunResponse> {
  const request: RunRequest = {
    code,
  };

  const response = await api.post<RunResponse>("/run", request);

  return response.data;
}
