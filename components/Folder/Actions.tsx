import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
} from "../ui";
// import {
//   MyFoldersDocument,
//   useDeleteFolderMutation,
//   useUpsertFolderMutation,
// } from "@/lib/graphql";
import { toast } from "react-toastify";
import { useBoolean } from "usehooks-ts";
import { cn } from "@/lib";

interface P {
  children?: React.ReactNode;
  id?: string;
  mode?: "create" | "edit";
  value?: string;
}

export default function Actions({
  children = <Button variant="outline">Open</Button>,
  id = "",
  mode = "create",
  value = "",
}: P) {
  const { value: open, toggle } = useBoolean(false);
  const [folderName, setFolderName] = useState(value);

  // const [upsertFolder, { loading }] = useUpsertFolderMutation({
  //   variables: {
  //     id,
  //     name: folderName,
  //   },
  //   onCompleted() {
  //     toast.success(
  //       `${mode === "create" ? "Created" : "Updated"} folder successfully!`
  //     );
  //     setFolderName("");
  //     toggle();
  //   },
  //   onError() {
  //     toast.error("Something went wrong! Please try again later!");
  //   },
  //   refetchQueries: [
  //     {
  //       query: MyFoldersDocument,
  //     },
  //   ],
  // });
  // const [deleteFolder, { loading: deleteLoading }] = useDeleteFolderMutation({
  //   variables: {
  //     id,
  //   },
  //   onCompleted() {
  //     toast.success(`Deleted folder successfully!`);
  //     setFolderName("");
  //     toggle();
  //   },
  //   onError() {
  //     toast.error("Something went wrong! Please try again later!");
  //   },
  //   refetchQueries: [
  //     {
  //       query: MyFoldersDocument,
  //     },
  //   ],
  // });

  return (
    <>
      <div onClick={toggle}>{children}</div>
      <Dialog open={open} modal>
        <DialogContent className="w-full xxs:w-[576px] flex flex-col">
          <DialogHeader>
            <DialogTitle>
              {mode === "create" ? "Create" : "Update"} folder
            </DialogTitle>
            <DialogDescription>
              {mode === "create"
                ? "Type a folder name"
                : "Update the folder name"}{" "}
              and click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-2">
            <div className="grid grid-cols-5 items-center gap-4">
              Name
              <Input
                id="name"
                value={folderName}
                className="col-span-4"
                onChange={(e) => setFolderName(e.target.value)}
              />
            </div>
          </div>
          <div
            className={cn(
              "flex items-center",
              mode === "edit" && "justify-between",
              mode === "create" && "justify-end"
            )}
          >
            {mode === "edit" && (
              <Button
                type="button"
                variant="destructive"
                // loading={deleteLoading}
                // onClick={() => void deleteFolder()}
              >
                Delete
              </Button>
            )}
            <div className="flex gap-1">
              <Button type="button" variant="secondary" onClick={toggle}>
                Close
              </Button>
              <Button
                type="button"
                // onClick={() => void upsertFolder()}
                // loading={loading}
              >
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
