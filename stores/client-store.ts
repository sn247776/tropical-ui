"use client";

import { create } from "zustand";
import Cookies from "js-cookie";

interface Client {
  id: string;
  number: string;
  fullName: string;
  profession: string;
  requirements: Record<string, unknown>;
}

interface ClientAuthData {
  token: string;
  client: Client;
}

interface ClientStore {
  token: string | null;
  client: Client | null;

  setClient: (data: ClientAuthData) => void;
  clearClient: () => void;
}

const COOKIE_NAME = "clientToken";
const STORAGE_NAME = "clientAuth";

const getInitialClient = (): ClientAuthData | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = localStorage.getItem(STORAGE_NAME);

    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Failed to load client auth:", error);
    return null;
  }
};

const saveClientData = (data: ClientAuthData) => {
  // Cookie
  Cookies.set(COOKIE_NAME, data.token, {
    expires: 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  // Local Storage
  if (typeof window !== "undefined") {
    localStorage.setItem(
      STORAGE_NAME,
      JSON.stringify(data)
    );
  }
};

const removeClientData = () => {
  Cookies.remove(COOKIE_NAME);

  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_NAME);
  }
};

const initialClient = getInitialClient();

export const useClientStore = create<ClientStore>((set) => ({
  token: initialClient?.token ?? null,
  client: initialClient?.client ?? null,

  setClient: (data) => {
    saveClientData(data);

    set({
      token: data.token,
      client: data.client,
    });
  },

  clearClient: () => {
    removeClientData();

    set({
      token: null,
      client: null,
    });
  },
}));