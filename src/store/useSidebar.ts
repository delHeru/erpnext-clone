'use client';

import { create } from "zustand";

interface SidebarState {
  collapsed: boolean;
  toggle: () => void;
}

export const UseSidebar = create<SidebarState>((set) => ({
  collapsed: false,

  toggle: () =>
    set((s) => {
      return { collapsed: !s.collapsed };
    }),
}));
