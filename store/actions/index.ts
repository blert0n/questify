import { useFormSelectors } from "..";
import { useModalStore } from "../slices/modalStore";

export const closeFormModal = () =>
  useModalStore.setState((state) => ({ ...state, isModalVisible: false }));
export const openFormModal = () =>
  useModalStore.setState((state) => ({ ...state, isModalVisible: true }));
export const setLoading = (loading: boolean) =>
  useFormSelectors.setState((state) => ({ ...state, loading }));
export const resetForm = () => useFormSelectors.getState().resetForm();
export const getTheme = () => useFormSelectors.getState().theme;
export const getItems = () => useFormSelectors.getState().items;
export const getDeletedItems = () => useFormSelectors.getState().deletedItems;
export const getFormDetails = () => ({
  name: useFormSelectors.getState().name,
  favorite: useFormSelectors.getState().isFavorite,
});
export const thumbnail = () => ({
  loading: useFormSelectors.getState().loadingThumbnail,
  set: (formId?: string) =>
    useFormSelectors.setState((state) => ({
      ...state,
      loadingThumbnail: formId || "",
    })),
});

export * from "./form";
