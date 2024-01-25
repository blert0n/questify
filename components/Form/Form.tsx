import { useFormSelectors } from "@/store";
import LiveForm from "./LiveForm";
import EditableForm from "./EditableForm";

interface P {
  id?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Form = ({ id }: P) => {
  const editMode = useFormSelectors.use.editMode();
  const items = useFormSelectors.use.items();

  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl ">
      {editMode ? <EditableForm items={items} /> : <LiveForm items={items} />}
    </div>
  );
};
