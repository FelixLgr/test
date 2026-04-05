// src/api/auth.ts — authentication API calls

import { post } from "./client";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  return post<AuthResponse>("/auth/login", payload);
}

export async function logout(token: string): Promise<void> {
  await post("/auth/logout", {}, token);
}

export async function refreshToken(refreshToken: string): Promise<AuthResponse> {
  return post<AuthResponse>("/auth/refresh", { refreshToken });
}
