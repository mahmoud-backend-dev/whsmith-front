import { create } from "zustand";
interface SearchHook {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearch = create<SearchHook>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
