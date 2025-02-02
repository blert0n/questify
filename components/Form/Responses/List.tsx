import { pluralize } from "@/lib/utils";
import { SubItem } from "@/types/form";
import parse from "html-react-parser";
import type { Answer } from "./types";

interface P {
  name: string;
  count: number;
  answers: Answer[];
  options?: SubItem[];
}
export const List = ({ name, count, answers }: P) => {
  return (
    <div className="flex flex-col gap-1 h-auto">
      {parse(name)}
      <div className="text-sm text-gray-500">
        {pluralize(count, "response")}
      </div>
      {answers.map((answer) => (
        <div key={answer.id} className="bg-gray-100 p-1 rounded-sm text-sm">
          {answer.value}
        </div>
      ))}
    </div>
  );
};
