import { useFormSelectors } from "@/store";
import LiveForm from "./LiveForm";
import EditableForm from "./EditableForm";

export const FormBuilder = () => {
  const editMode = useFormSelectors.use.editMode();
  const items = useFormSelectors.use.items();
  const theme = useFormSelectors.use.theme();

  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl mx-auto">
      {editMode ? (
        <EditableForm items={items} />
      ) : (
        <LiveForm theme={theme} items={items} showSubmit={false} />
      )}
    </div>
  );
};
