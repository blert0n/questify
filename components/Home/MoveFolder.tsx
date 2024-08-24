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
import { useMyFoldersQuery } from "@/lib/graphql";
import { useState } from "react";
import { toast } from "react-toastify";

interface P {
  visible: boolean;
  formId: string;
  selected: string;
  toggle: () => void;
}

export default function MoveFolder({ visible, formId, selected, toggle }: P) {
  const { value: changeFolderPopover, toggle: toggleFolderPopover } =
    useBoolean(false);
  const [selectedFolderId, setSelectedFolderId] = useState(selected);
  const { data: { Folder: findManyFolder } = {} } = useMyFoldersQuery();
  // const [updateFormFolder, { loading }] = useUpdateFormFolderMutation({
  //   variables: {
  //     folder: {
  //       ...(selectedFolderId === "Default"
  //         ? { disconnect: { id: { equals: selected } } }
  //         : { connect: { id: selectedFolderId } }),
  //     },
  //     formId,
  //   },
  //   onCompleted() {
  //     const newFolder =
  //       findManyFolder?.find((folder) => folder.id === selectedFolderId)
  //         ?.name ?? "";
  //     toast.success(`Form moved to ${newFolder} folder`);
  //     toggleFolderPopover();
  //   },
  //   onError() {
  //     toast.error("Something went wrong! Please try again later!");
  //     toggleFolderPopover();
  //   },
  //   refetchQueries: [
  //     {
  //       query: DefaultFolderFormsDocument,
  //     },
  //     {
  //       query: FolderFormsDocument,
  //       variables: {
  //         folderId: selected,
  //       },
  //     },
  //   ],
  // });
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
            defaultValue={selected}
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
              loading={false}
              onClick={() => {
                if (selectedFolderId === selected) return toggleFolderPopover();
                // void updateFormFolder();
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
