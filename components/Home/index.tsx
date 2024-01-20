import { useMyFormsQuery } from "@/lib/graphql";
import Form from "./Form";
import { Loader } from "@/assets/svg";
import { Button } from "../ui";
import { useModalStoreSelectors } from "@/store";
import { cn } from "@/lib";

export default function Home() {
  const { data: { findManyForm } = {}, loading } = useMyFormsQuery();
  const openModal = useModalStoreSelectors.use.openModal();

  const itemsCount = (findManyForm ?? []).length;
  const gridClass = `md:grid-cols-${itemsCount > 4 ? "4" : itemsCount}`;

  return (
    <div className="flex flex-col items-center h-full">
      {loading && (
        <div className="flex flex-col items-center gap-2">
          <Loader />
          <p className="text-gray-500">Loading forms</p>
        </div>
      )}
      {!loading && findManyForm && findManyForm.length > 0 && (
        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-3 gap-6 md:max-w-3xl",
            gridClass
          )}
        >
          {findManyForm?.map((item) => <Form key={item.id} form={item} />)}
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
