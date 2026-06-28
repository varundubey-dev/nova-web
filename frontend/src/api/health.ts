import { api } from "@api/client";

export async function getApiStatus() {
  const response = await api.get("/health");

  return response.data;
}