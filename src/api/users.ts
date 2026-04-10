// src/api/users.ts — users API

import { get, post } from "./client";
import type { User } from "../store/userStore";

export async function fetchUsers(token: string): Promise<User[]> {
  return get<User[]>("/users", token);
}

export async function fetchUser(id: string, token: string): Promise<User> {
  return get<User>(`/users/${id}`, token);
}

export async function updateUserRole(
  id: string,
  role: User["role"],
  token: string
): Promise<User> {
  return post<User>(`/users/${id}/role`, { role }, token);
}
