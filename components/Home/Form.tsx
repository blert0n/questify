import {
  MyFormsQuery,
  useDeleteFormMutation,
  useStarFormMutation,
} from "@/lib/graphql";
import { File, Star } from "lucide-react";
import dayjs from "dayjs";
import Actions from "./Actions";
import { useBoolean } from "usehooks-ts";
import { toast } from "react-toastify";
import { cn } from "@/lib";
import { Loader } from "@/assets/svg";
import { useFormSelectors } from "@/store";
import MoveFolder from "./MoveFolder";
import { thumbnail } from "@/store/actions";

type FormType = MyFormsQuery["Form"][number] & { folderId?: string | null };

interface P {
  form: FormType;
  folder?: boolean;
}

const getFormBackgroundStyle = (
  url?: string | null,
  secondaryColor?: string,
  isLoading?: boolean
) => {
  const backgroundStyle = url
    ? `url(${url}) no-repeat center center / contain, ${secondaryColor}`
    : secondaryColor;

  return {
    background: !isLoading ? backgroundStyle : secondaryColor,
    backgroundColor: secondaryColor,
  };
};

export default function Form({ form, folder = false }: P) {
  const { value: isPopoverOpen, toggle: togglePopover } = useBoolean(false);
  const { value: isFolderPopoverOpen, toggle: toggleFolderPopover } =
    useBoolean(false);
  const editForm = useFormSelectors.use.loadForm();
  const formLoading = useFormSelectors.use.loading();
  const formOperation = useFormSelectors.use.operation();
  const loadingFormThumbnail = thumbnail().loading;
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
  const [starForm, { loading: loadingFavorite }] = useStarFormMutation({
    variables: {
      formId: form.id,
      favorite: !form.favorite,
    },
    onCompleted() {
      toast.success(
        `Form was ${form.favorite ? "added to" : "removed from"} favorites`
      );
    },
    onError() {
      toast.error("Something went wrong! Please try again later!");
    },
  });
  return (
    <div className="h-64 w-full max-w-48 shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-white">
      <div className="h-full flex flex-col gap-1">
        <div className="relative h-3/4 flex justify-center items-center">
          <div
            className="absolute top-0 right-0 p-2 w-8"
            style={{
              zIndex: 10, // Ensure it is above other content
            }}
          >
            {loadingFavorite ? (
              <Loader width={16} height={16} />
            ) : (
              <Star
                className={cn(
                  "text-slate-700 hover:scale-110 cursor-pointer text-[12px] flex justify-end",
                  form.favorite && "fill-amber-500 text-amber-500"
                )}
                strokeWidth={1.5}
                size={16}
                onClick={() => starForm()}
              />
            )}
          </div>
          <div
            className="h-full w-full flex flex-col gap-2 justify-center items-center"
            style={{
              ...getFormBackgroundStyle(
                form.thumbnail,
                form.style?.secondaryColor ?? "#ffffff",
                loadingFormThumbnail === form.id
              ),
            }}
          >
            <File
              size={72}
              className={cn(
                "text-gray-500",
                loadingFormThumbnail !== form.id && form.thumbnail && "hidden"
              )}
              strokeWidth={0.5}
            />
            {loadingFormThumbnail === form.id && (
              <span className="text-slate-500 text-xs font-bold uppercase animate-bounce">
                Generating...
              </span>
            )}
          </div>
        </div>

        <div className="h-1/4 flex flex-col gap-3 justify-end">
          <div className="p-2">
            <div className="text-slate-700 whitespace-nowrap overflow-hidden text-ellipsis">
              {form.name}
            </div>
            <div className="text-slate-500 text-xs flex items-center justify-between gap-[1px]">
              <div>Created {dayjs(form.createdAt).format("MMM DD, YYYY")}</div>
              {!folder ? (
                <Actions
                  id={form.id}
                  operation={formOperation}
                  visible={isPopoverOpen}
                  toggle={togglePopover}
                  editLoading={formLoading}
                  deleteLoading={deleteLoading}
                  onEdit={(tab) => editForm(form.id, tab)}
                  onDelete={() => void deleteForm()}
                />
              ) : (
                <MoveFolder
                  visible={isFolderPopoverOpen}
                  toggle={toggleFolderPopover}
                  formId={form.id}
                  currentFolder={form.folderId || "Default"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
