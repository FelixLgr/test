// src/store/userStore.ts — user session state (Zustand-style)

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
}

interface UserState {
  user: User | null;
  token: string | null;
  setUser: (user: User, token: string) => void;
  clearUser: () => void;
}

let state: UserState = {
  user: null,
  token: null,
  setUser(user, token) {
    state = { ...state, user, token };
  },
  clearUser() {
    state = { ...state, user: null, token: null };
  },
};

export function getUserStore(): UserState {
  return state;
}
