import { createSelectors } from "./createSelectors";
import { useModalStore } from "./slices/modalStore";
import { useFormStore } from "./slices/form";
const useModalStoreSelectors = createSelectors(useModalStore);
const useFormSelectors = createSelectors(useFormStore);

export { useModalStoreSelectors, useFormSelectors };
