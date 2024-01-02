import { createSelectors } from "./createSelectors";
import { useModalStore } from "./slices/modalStore";
import { useCreateFormStore } from "./slices/createForm";
const useModalStoreSelectors = createSelectors(useModalStore);
const useCreateFormSelectors = createSelectors(useCreateFormStore);

export { useModalStoreSelectors, useCreateFormSelectors };
