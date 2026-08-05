import { create } from "zustand";
import Cookies from "js-cookie";

interface VisitStore {
  visitIds: string[];
  initialize: (ids: string[]) => void;
  addVisit: (id: string) => void;
  removeVisit: (id: string) => void;
  clearAllVisits: () => void;
}

const COOKIE_NAME = "visitIds";
const STORAGE_NAME = "visitIds";

const getInitialVisitIds = (): string[] => {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_NAME);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load visitIds:", error);
    return [];
  }
};

const saveData = (ids: string[]) => {
  Cookies.set(COOKIE_NAME, ids.join(","), {
    expires: 365,
    sameSite: "lax",
  });

  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(ids));
  }
};

const removeData = () => {
  Cookies.remove(COOKIE_NAME);

  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_NAME);
  }
};

export const useVisitStore = create<VisitStore>((set) => ({
  visitIds: getInitialVisitIds(),

  initialize: (ids) => {
    saveData(ids);
    set({
      visitIds: ids,
    });
  },

  addVisit: (id) =>
    set((state) => {
      if (state.visitIds.includes(id)) {
        return state;
      }

      const ids = [...state.visitIds, id];

      saveData(ids);

      return {
        visitIds: ids,
      };
    }),

  removeVisit: (id) =>
    set((state) => {
      const ids = state.visitIds.filter((item) => item !== id);

      saveData(ids);

      return {
        visitIds: ids,
      };
    }),

  clearAllVisits: () => {
    removeData();

    set({
      visitIds: [],
    });
  },
}));