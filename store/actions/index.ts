import { useModalStore } from "../slices/modalStore";

export const closeFormModal = () =>
  useModalStore.setState((state) => ({ ...state, isModalVisible: false }));
