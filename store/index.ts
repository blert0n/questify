import { createSelectors } from "./createSelectors";
import { useModalStore } from "./slices/modalStore";
const useModalStoreSelectors = createSelectors(useModalStore);

export { useModalStoreSelectors };
