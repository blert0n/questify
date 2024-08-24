import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FolderOpen, MoreVertical } from "lucide-react";
import { useBoolean } from "usehooks-ts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../ui";
import { AppSelect } from "../controlled-inputs";
import {
  DefaultFolderFormsDocument,
  FolderFormsDocument,
  useMyFoldersQuery,
  useUpdateFormFolderMutation,
} from "@/lib/graphql";
import { useState } from "react";
import { toast } from "react-toastify";

interface P {
  visible: boolean;
  formId: string;
  currentFolder: string;
  toggle: () => void;
}

export default function MoveFolder({
  visible,
  formId,
  currentFolder,
  toggle,
}: P) {
  const { value: changeFolderPopover, toggle: toggleFolderPopover } =
    useBoolean(false);
  const [newFolder, setSelectedFolderId] = useState(currentFolder);
  const { data: { Folder: findManyFolder } = {} } = useMyFoldersQuery();
  const [updateFormFolder, { loading }] = useUpdateFormFolderMutation({
    variables: {
      formId,
      folderId: newFolder === "Default" ? null : newFolder,
    },
    onCompleted() {
      const newFolderName =
        findManyFolder?.find((folder) => folder.id === newFolder)?.name ?? "";
      toast.success(`Form moved to ${newFolderName} folder`);
      toggleFolderPopover();
    },
    onError() {
      toast.error("Something went wrong! Please try again later!");
      toggleFolderPopover();
    },
    refetchQueries: [
      ...(currentFolder !== "Default" &&
      newFolder !== "Default" &&
      newFolder !== currentFolder
        ? [
            {
              query: FolderFormsDocument,
              variables: {
                folderId: newFolder,
              },
            },
            {
              query: FolderFormsDocument,
              variables: {
                folderId: currentFolder,
              },
            },
          ]
        : []),

      ...(newFolder === "Default" || currentFolder === "Default"
        ? [
            {
              query: DefaultFolderFormsDocument,
            },
            {
              query: FolderFormsDocument,
              variables: {
                folderId: [newFolder, currentFolder].find(
                  (folder) => folder !== "Default"
                ),
              },
            },
          ]
        : []),
    ],
  });
  return (
    <>
      <Popover open={visible} onOpenChange={toggle}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className=" bg-white hover:scale-110"
            size={"icon"}
          >
            <MoreVertical
              className="text-slate-500 cursor-pointer"
              strokeWidth={1.5}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="m-2 mt-0 w-auto xs:w-[200px] flex flex-col p-0">
          <div
            className="flex justify-between items-center text-sm cursor-pointer hover:bg-slate-100 p-2"
            onClick={() => toggleFolderPopover()}
          >
            Move to folder
            <FolderOpen
              className="text-slate-700"
              strokeWidth={1.5}
              size={16}
            />
          </div>
        </PopoverContent>
      </Popover>
      <Dialog
        open={changeFolderPopover}
        onOpenChange={toggleFolderPopover}
        modal
      >
        <DialogContent className="w-full xxs:w-[576px] flex flex-col">
          <DialogTitle>Update form folder</DialogTitle>
          <DialogDescription>
            Select one of the folder options and click save when you are done!
          </DialogDescription>
          <AppSelect
            defaultValue={currentFolder}
            options={[
              { placeholder: "Default folder", value: "Default" },
              ...(findManyFolder ?? []).map((folder) => ({
                placeholder: folder.name,
                value: folder.id,
              })),
            ]}
            onChange={(value) => setSelectedFolderId(value)}
          />
          <DialogFooter className="flex justify-end items-center">
            <Button variant={"secondary"} onClick={toggleFolderPopover}>
              Close
            </Button>
            <Button
              loading={loading}
              disabled={currentFolder === newFolder || loading}
              onClick={() => {
                if (newFolder === currentFolder) return toggleFolderPopover();
                void updateFormFolder();
              }}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
