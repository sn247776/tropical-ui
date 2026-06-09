import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface VisitStore {
  visitIds: string[];
  addVisit: (id: string) => void;
  removeVisit: (id: string) => void;
  clearAllVisits: () => void;
}

export const useVisitStore = create<VisitStore>()(
  persist(
    (set) => ({
      visitIds: [],
      addVisit: (id) =>
        set((state) => ({
          visitIds: [...state.visitIds, id],
        })),
      removeVisit: (id) =>
        set((state) => ({
          visitIds: state.visitIds.filter((visitId) => visitId !== id),
        })),
      clearAllVisits: () => set({ visitIds: [] }),
    }),
    {
      name: 'visit-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
