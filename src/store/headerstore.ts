'use client';

import { ReactNode } from "react";
import { create } from "zustand";

interface HeaderState {
  headerTitle: string;
  setHeaderTitle: (title: string) => void;

  headerExtra: React.ReactNode | null;
  setHeaderExtra: (component: ReactNode) => void;
  clearHeaderExtra: () => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  headerTitle: "Sabitz",
  setHeaderTitle: (title) => set({ headerTitle: title }),

  headerExtra: null,
  setHeaderExtra: (component) => set({ headerExtra: component }),
  clearHeaderExtra: () => set({ headerExtra: null }),
}));