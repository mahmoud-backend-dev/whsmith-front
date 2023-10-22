import { create } from "zustand";

type NavbarState = {
  isOpen: boolean;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  toggleNavbar: () => void;
  setOpen: (isOpen: boolean) => void;
};
export const useNavbar = create<NavbarState>((set) => ({
  isOpen: false,
  isMobile: false,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (isOpen: boolean) => set({ isOpen }),
}));
