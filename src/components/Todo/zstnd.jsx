import React from "react";
import { create } from "zustand";

const useShowStore = create((set) => ({
  showMenu: false,
  handleShowMenu: () => {
    set((state) => ({
      showMenu: !state.showMenu,
    }));
  },
}));

export default function zstnd() {
  return <></>;
}
