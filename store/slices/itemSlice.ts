import {
  ItemSlice,
  ThemeSlice,
  FormDetailsSlice,
  newInputItem,
  FormItem,
} from "@/types";
import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { FormItemType_Enum } from "@/lib/graphql";

export const createItemSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  ItemSlice
> = (set, get) => ({
  items: [],
  deletedItems: [],
  setItems: (items) => {
    set((state) => ({ ...state, items }));
  },
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
      const nonSectionItems = state.items.filter(
        (item) => item.type !== FormItemType_Enum.Section
      );
      const deletedItemIndex = nonSectionItems.findIndex(
        (item) => item.id === id
      );
      const newSelectedId =
        deletedItemIndex > 0
          ? nonSectionItems.at(deletedItemIndex - 1)?.id
          : "formHeader";
      const filteredItems = state.items.filter((item) => item.id !== id);
      const updatedItems = filteredItems.map((item) => {
        if (item.order < deletedItem.order) return item;
        return { ...item, order: item.order - 1 };
      });
      return {
        ...state,
        deletedItems: state.editMode ? [...state.deletedItems, id] : [],
        ...(deletedItem.type !== FormItemType_Enum.Section
          ? { selectedComponent: newSelectedId }
          : {}),
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
    const lastOrder = get().items.at(-1)?.order ?? 0;
    const newItem = newInputItem(type, index ?? lastOrder);

    set((state) => {
      if (index === undefined || lastOrder === 0) {
        return {
          ...state,
          ...(type !== FormItemType_Enum.Section
            ? { selectedComponent: newItem.id }
            : {}),
          items: [...state.items, newItem],
        };
      }

      const items = [
        ...state.items.slice(0, index),
        newItem,
        ...state.items.slice(index).map((item) => ({
          ...item,
          order: item.order + 1,
        })),
      ];

      return {
        ...state,
        ...(type !== FormItemType_Enum.Section
          ? { selectedComponent: newItem.id }
          : {}),
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
  getPagesMap: (items) => {
    const sortedItems = [...items].sort((a, b) => a.order - b.order);
    const pages: Record<number, number[]> = {};
    let currentPage = 1;

    for (const item of sortedItems) {
      if (!pages[currentPage]) {
        pages[currentPage] = [];
      }

      pages[currentPage].push(item.order);

      if (item.type === "SECTION") {
        currentPage++;
      }
    }

    return pages;
  },
});
