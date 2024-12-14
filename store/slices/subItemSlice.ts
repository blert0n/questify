import {
  ItemSlice,
  ThemeSlice,
  FormDetailsSlice,
  SubItemSlice,
  newSubItem,
  newGridItem,
} from "@/types";
import { StateCreator } from "zustand";

export const createSubItemSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  SubItemSlice
> = (set) => ({
  addOption: (itemId, grid) => {
    set((state) => {
      const item = state.items.find((item) => item.id === itemId);
      if (!item) return state;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== itemId) return item;
          const lastIndex = grid
            ? item.options?.filter((option) => option.grid === grid).length
            : item.options?.length;
          const subItem = grid
            ? newGridItem(grid, lastIndex)
            : newSubItem(lastIndex);

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
  updateOptionLabel: (itemId, subItemId, label) => {
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
                label,
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
  reorderOptions: (itemId, startIndex, endIndex) => {
    set((state) => {
      const item = state.items.find((item) => item.id === itemId);
      if (!item) return state;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== itemId) return item;
          const subItems = [...(item.options ?? [])];
          const [draggedItem] = subItems.splice(startIndex, 1);
          subItems.splice(endIndex, 0, draggedItem);
          subItems.map((option, index) => ({
            ...option,
            order: index + 1,
          }));
          return {
            ...item,
            options: subItems,
          };
        }),
      };
    });
  },
  reorderGrid: (itemId, startIndex, endIndex, direction) => {
    set((state) => {
      const item = state.items.find((item) => item.id === itemId);
      if (!item) return state;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== itemId) return item;
          const affectedGridItems = [...(item.options ?? [])].filter(
            (item) => item.grid === direction
          );
          const unaffectedGridItems = [...(item.options ?? [])].filter(
            (item) => item.grid !== direction
          );
          const [draggedItem] = affectedGridItems.splice(startIndex, 1);
          affectedGridItems.splice(endIndex, 0, draggedItem);

          const updatedAffected = affectedGridItems.map((option, index) => ({
            ...option,
            order: index + 1,
          }));

          return {
            ...item,
            options: [...updatedAffected, ...unaffectedGridItems],
          };
        }),
      };
    });
  },
});
