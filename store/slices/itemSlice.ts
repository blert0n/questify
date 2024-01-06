import {
  ItemSlice,
  ThemeSlice,
  FormDetailsSlice,
  shortComponentInitialData,
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
  updateItem: <K extends keyof FormItem>(
    id: string,
    prop: K,
    value: FormItem[K]
  ) =>
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
  addItem: (type) => {
    switch (type) {
      case FormType.Short:
        get().addShortComponent();
        break;
      default:
        get().addShortComponent();
        break;
    }
  },
  deleteItem: (id: string) =>
    set((state) => ({
      ...state,
      items: state.items.filter((item) => item.id !== id),
    })),
  duplicateItem: (id: string) => {
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
        items: [...state.items, duplicatedItem],
      };
    });
  },

  addShortComponent: () => {
    const lastOrder = get().items.at(-1)?.order;
    const newItem = shortComponentInitialData(lastOrder);
    set((state) => ({
      ...state,
      selectedComponent: newItem.id,
      items: [...state.items, newItem],
    }));
  },
});
