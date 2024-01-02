import { create } from "zustand";

type State = {
  isModalVisible: boolean;
};

type Actions = {
  openModal: () => void;
  closeModal: () => void;
};

export const useModalStore = create<State & Actions>((set) => ({
  isModalVisible: false,
  openModal: () => set((state) => ({ ...state, isModalVisible: true })),
  closeModal: () => set((state) => ({ ...state, isModalVisible: false })),
}));
