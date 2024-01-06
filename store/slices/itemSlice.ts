import {
  ItemSlice,
  ThemeSlice,
  FormDetailsSlice,
  shortComponentInitialData,
} from "@/types";
import { StateCreator } from "zustand";
import { FormType } from "@/lib/graphql";

export const createItemSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  ItemSlice
> = (set, get) => ({
  items: [],
  addItem: (type) => {
    switch (type) {
      case FormType.Attachment:
        get().addShortComponent();
        break;
      default:
        get().addShortComponent();
        break;
    }
  },
  addShortComponent: () => {
    const lastOrder = get().items.at(-1)?.order;
    const newItem = shortComponentInitialData(lastOrder);
    set((state) => ({ ...state, items: [...state.items, newItem] }));
  },
});
