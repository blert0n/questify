import {
  ItemSlice,
  ThemeSlice,
  FormDetailsSlice,
  newInputItem,
  FormItem,
} from "@/types";
import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const createItemSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  ItemSlice
> = (set, get) => ({
  items: [],
  deletedItems: [],
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
      const deletedItem = state.items.find((item) => item.id === id);
      if (!deletedItem) return state;
      const predecessor = state.items.findIndex((item) => item.id === id);
      const newSelectedId =
        predecessor > 0 ? state.items.at(predecessor - 1)?.id : "formHeader";
      const filteredItems = state.items.filter((item) => item.id !== id);
      const updatedItems = filteredItems.map((item) => {
        if (item.order < deletedItem.order) return item;
        return { ...item, order: item.order - 1 };
      });
      return {
        ...state,
        deletedItems: state.editMode ? [...state.deletedItems, id] : [],
        selectedComponent: newSelectedId,
        items: updatedItems,
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
        options: (selectedItem.options ?? []).map((option) => ({
          ...option,
          id: uuidv4(),
        })),
      };

      return {
        ...state,
        selectedComponent: duplicatedItem.id,
        items: [...state.items, duplicatedItem],
      };
    });
  },
  addItem: (type, index) => {
    console.log(type, index, "addItem");
    const lastOrder = get().items.at(-1)?.order ?? 0;
    const newItem = newInputItem(type, index ?? lastOrder);

    console.log(lastOrder, "lastOrder");
    console.log(newItem, "newItem");

    set((state) => {
      if (index === undefined || lastOrder === 0) {
        return {
          ...state,
          selectedComponent: newItem.id,
          items: [...state.items, newItem],
        };
      }

      // console.log(state.items.slice(0, index), "upperItems");
      // console.log(state.items.slice(index), "lowerItems");

      const items = [
        ...state.items.slice(0, index),
        newItem,
        ...state.items.slice(index).map((item) => ({
          ...item,
          order: item.order + 1,
        })),
      ];

      console.log("updatedItems", items);

      return {
        ...state,
        selectedComponent: newItem.id,
        items,
      };
    });
  },
  reorder: (startIndex, endIndex) => {
    set((state) => {
      const items = [...state.items];
      const [draggedItem] = items.splice(startIndex, 1);
      items.splice(endIndex, 0, draggedItem);

      items.forEach((question, index) => {
        question.order = index + 1;
      });

      return {
        ...state,
        items,
      };
    });
  },
});
