import {
  ItemSlice,
  ThemeSlice,
  FormDetailsSlice,
  newInputItem,
  FormItem,
} from "@/types";
import { StateCreator } from "zustand";
import { FormType } from "@/lib/graphql";
import { v4 as uuidv4 } from "uuid";

export const createItemSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  ItemSlice
> = (set, get) => ({
  items: [],
  updateItem: (id, prop, value) =>
    set((state) => ({
      ...state,
      items: state.items.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          [prop]: value,
        };
      }),
    })),
  deleteItem: (id) => {
    set((state) => {
      const predecessor = state.items.findIndex((item) => item.id === id);
      const newSelectedId =
        predecessor > 0 ? state.items.at(predecessor - 1)?.id : "formHeader";
      return {
        ...state,
        selectedComponent: newSelectedId,
        items: state.items.filter((item) => item.id !== id),
      };
    });
  },
  duplicateItem: (id) => {
    const duplicatedItemId = uuidv4();
    set((state) => {
      const selectedItem = state.items.find((item) => item.id === id);

      if (!selectedItem) {
        return state;
      }

      const duplicatedItem: FormItem = {
        ...selectedItem,
        id: duplicatedItemId,
        origin: "client",
        order: selectedItem.order + 1,
      };

      return {
        ...state,
        selectedComponent: duplicatedItem.id,
        items: [...state.items, duplicatedItem],
      };
    });
  },
  addItem: (type) => {
    const lastOrder = get().items.at(-1)?.order;
    const newItem = newInputItem(type, lastOrder);
    set((state) => ({
      ...state,
      selectedComponent: newItem.id,
      items: [...state.items, newItem],
    }));
  },
});
