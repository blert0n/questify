import { Loader } from "@/assets/svg";
import { cn } from "@/lib";
import { useDefaultFolderFormsQuery, useFolderFormsQuery } from "@/lib/graphql";
import { ArrowLeft } from "lucide-react";
import Form from "../Home/Form";
interface P {
  id: string;
  onBack: () => void;
}
export default function Selected({ id, onBack }: P) {
  const { data: { findManyForm: folderForms } = {}, loading: folderLoading } =
    useFolderFormsQuery({
      variables: {
        folderId: id,
      },
      skip: id === "Default",
      fetchPolicy: "cache-and-network",
    });
  const {
    data: { findManyForm: defaultFolderForm } = {},
    loading: defaultFolderLoading,
  } = useDefaultFolderFormsQuery({
    skip: id !== "Default",
    fetchPolicy: "cache-and-network",
  });

  const forms = id !== "Default" ? folderForms : defaultFolderForm;
  const loading = id !== "Default" ? folderLoading : defaultFolderLoading;

  return (
    <>
      <ArrowLeft
        size={36}
        className="text-slate-700 hover:scale-110 m-4"
        strokeWidth={1.5}
        onClick={onBack}
      />
      <div className="flex flex-col gap-4 items-start h-auto lg:max-w-full ml-auto mr-auto pt-4">
        {loading && (
          <div className="flex flex-col items-center gap-2 w-full pt-4">
            <Loader />
            <p className="text-gray-500">Loading forms</p>
          </div>
        )}
        {!loading && forms && forms.length > 0 && (
          <div className="flex flex-col items-start justify-center gap-4 p-4 pt-0 w-full lg:max-w-4xl ml-auto mr-auto">
            <div className={cn("flex flex-wrap gap-4")}>
              {forms?.map((item) => <Form key={item.id} form={item} folder />)}
            </div>
          </div>
        )}
        {!loading && !forms?.length && (
          <div className="flex flex-col items-center gap-6 w-full rounded-md p-6">
            <p className="text-gray-500">
              This folder does not contain any form
            </p>
          </div>
        )}
      </div>
    </>
  );
}
