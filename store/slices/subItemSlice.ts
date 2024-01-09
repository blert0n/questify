import {
  ItemSlice,
  ThemeSlice,
  FormDetailsSlice,
  SubItemSlice,
  newSubItem,
} from "@/types";
import { StateCreator } from "zustand";

export const createSubItemSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  SubItemSlice
> = (set, get) => ({
  addOption: (itemId) => {
    set((state) => {
      const item = state.items.find((item) => item.id === itemId);
      if (!item) return state;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== itemId) return item;
          const subItem = newSubItem(item.options?.length);
          const existingOptions = item.options ?? [];
          return {
            ...item,
            options: [...existingOptions, subItem],
          };
        }),
      };
    });
  },
  updateOption: (itemId, subItemId, value) => {
    set((state) => {
      const item = state.items.find((item) => item.id === itemId);
      if (!item) return state;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== itemId) return item;
          return {
            ...item,
            options: (item.options ?? []).map((option) => {
              if (option.id !== subItemId) return option;
              return {
                ...option,
                value,
              };
            }),
          };
        }),
      };
    });
  },
  deleteOption: (itemId, subItemId) => {
    set((state) => {
      const item = state.items.find((item) => item.id === itemId);
      if (!item) return state;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== itemId) return item;
          return {
            ...item,
            options: (item.options ?? []).filter(
              (option) => option.id !== subItemId
            ),
          };
        }),
      };
    });
  },
});
