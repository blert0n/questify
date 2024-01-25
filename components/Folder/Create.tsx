import { Plus } from "lucide-react";
import Actions from "./Actions";

export default function Create() {
  return (
    <Actions>
      <div className="flex justify-center items-center h-48 w-36 shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-white">
        <Plus size={72} className="text-gray-500" strokeWidth={0.5} />
      </div>
    </Actions>
  );
}
