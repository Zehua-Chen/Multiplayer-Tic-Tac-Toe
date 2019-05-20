import axios from "axios";

export interface ICreateGameResponse {
  message?: string;
  username?: string;
  token?: string;
  success: boolean;
}

export interface ICreateGameRequest {
  username: string;
  invitationCode: string;
  size: number;
}

export async function createGame(
  request: ICreateGameRequest
): Promise<ICreateGameResponse> {
  const { data } = await axios.post<ICreateGameResponse>(
    "/api/game/create",
    request
  );
  localStorage.setItem(
    "token",
    JSON.stringify({ token: data.token, username: data.username })
  );
  return data;
}
