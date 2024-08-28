import { api } from "../lib/axios";

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  token: string;
}

interface LoginResponse {
  user: AuthUser;
}

export async function login(username: string, password: string): Promise<AuthUser> {
  const response = await api.post<LoginResponse>('/auth/login', {
    username,
    password,
    expiresInMins: 30, // opcional, pode ajustar conforme necessário
  });

  return response.data.user;
}