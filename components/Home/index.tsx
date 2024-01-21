import { useMyFormsQuery } from "@/lib/graphql";
import Form from "./Form";
import { Loader } from "@/assets/svg";
import { Button } from "../ui";
import { useModalStoreSelectors } from "@/store";
import { cn } from "@/lib";
import Templates from "./Templates";

export default function Home() {
  const { data: { findManyForm } = {}, loading } = useMyFormsQuery();
  const openModal = useModalStoreSelectors.use.openModal();
  return (
    <div className="flex flex-col gap-4 items-start h-auto md:max-w-3xl ml-auto mr-auto">
      <div className="flex items-center justify-center gap-4 py-4 border-b-[2px] border-zinc-300">
        <Templates />
      </div>
      {loading && (
        <div className="flex flex-col items-center gap-2 w-full">
          <Loader />
          <p className="text-gray-500">Loading forms</p>
        </div>
      )}
      {!loading && findManyForm && findManyForm.length > 0 && (
        <div className="flex flex-col gap-2 text-gray-500 text-sm">
          My forms
          <div className={cn("flex flex-wrap gap-4")}>
            {findManyForm?.map((item) => <Form key={item.id} form={item} />)}
          </div>
        </div>
      )}
      {!loading && !findManyForm?.length && (
        <div className="flex flex-col items-center gap-6 bg-white rounded-md p-6">
          <p className="text-gray-500">You have not created any form yet!</p>
          <Button onClick={openModal}>Create</Button>
        </div>
      )}
    </div>
  );
}
