import { MyFormsQuery } from "@/lib/graphql";
import { File } from "lucide-react";
import dayjs from "dayjs";
import { Separator } from "../ui";
import Actions from "./Actions";
import { useBoolean } from "usehooks-ts";

interface P {
  form: MyFormsQuery["findManyForm"][number];
}
export default function Form({ form }: P) {
  const { value: isPopoverOpen, toggle: togglePopover } = useBoolean(false);
  return (
    <div className="h-64 shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-white">
      <div className="h-full flex flex-col gap-1">
        <div className="h-2/3 flex justify-center items-center">
          <File size={72} className="text-gray-500" strokeWidth={0.5} />
        </div>
        <div className="h-1/3 flex flex-col gap-3 justify-end">
          <Separator />
          <div className="p-2">
            <div className="text-slate-700 whitespace-nowrap overflow-hidden text-ellipsis">
              {form.name}
            </div>
            <div className="text-slate-500 text-xs flex items-center justify-between gap-[1px]">
              <div>Created {dayjs(form.createdAt).format("MMM DD, YYYY")}</div>
              <Actions visible={isPopoverOpen} toggle={togglePopover} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
