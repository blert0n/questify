import { Loader } from "@/assets/svg";
import { cn } from "@/lib";
import { useMyFoldersQuery } from "@/lib/graphql";
import Folder from "./Folder";
import Create from "./Create";
import { useState } from "react";
import Selected from "./Selected";

export const List = () => {
  const { data: { Folder: findManyFolder } = {}, loading } =
    useMyFoldersQuery();
  const [selectedFolder, setSelectedFolder] = useState("");
  if (selectedFolder)
    return (
      <Selected id={selectedFolder} onBack={() => setSelectedFolder("")} />
    );
  return (
    <div className="flex flex-col gap-4 items-start h-auto lg:max-w-full ml-auto mr-auto pt-4">
      {loading && (
        <div className="flex flex-col items-center gap-2 w-full pt-4">
          <Loader />
          <p className="text-gray-500">Loading folders</p>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col items-start justify-center gap-4 p-4 pt-0 w-full lg:max-w-4xl ml-auto mr-auto">
          <div className={cn("flex flex-wrap gap-4")}>
            <Create />
            <Folder onSelect={() => setSelectedFolder("Default")} />
            {findManyFolder?.map((item) => (
              <Folder
                key={item.id}
                id={item.id}
                name={item.name}
                onSelect={() => setSelectedFolder(item.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
