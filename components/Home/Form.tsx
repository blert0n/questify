import { MyFormsQuery, useDeleteFormMutation } from "@/lib/graphql";
import { File } from "lucide-react";
import dayjs from "dayjs";
import { Separator } from "../ui";
import Actions from "./Actions";
import { useBoolean } from "usehooks-ts";
import { toast } from "react-toastify";

type FormType = MyFormsQuery["findManyForm"][number];

interface P {
  form: FormType;
}
export default function Form({ form }: P) {
  const { value: isPopoverOpen, toggle: togglePopover } = useBoolean(false);
  const [deleteForm, { loading: deleteLoading }] = useDeleteFormMutation({
    variables: {
      formId: form.id,
    },
    onCompleted() {
      toast.success("Form was deleted successfully!");
    },
    onError() {
      toast.error("Something went wrong! Please try again later.");
    },
    update(cache) {
      const normalizedId = cache.identify({ id: form.id, __typename: "Form" });
      cache.evict({ id: normalizedId });
      cache.gc();
    },
  });
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
              <Actions
                visible={isPopoverOpen}
                toggle={togglePopover}
                deleteLoading={deleteLoading}
                onDelete={() => void deleteForm()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
