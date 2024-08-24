import { useMyFormsQuery } from "@/lib/graphql";
import Form from "./Form";
import { Loader } from "@/assets/svg";
import { Button } from "../ui";
import { useModalStoreSelectors } from "@/store";
import { cn } from "@/lib";
import Templates from "./Templates";
import { useBoolean } from "usehooks-ts";
import Filters from "./Filter";
import { useState } from "react";

const orderByMapper: Record<number, any> = {
  1: { createdAt: "desc" },
  2: { updatedAt: "desc" },
  3: { favorite: "desc" },
};

export default function Home() {
  const { value: filterVisible, setValue: toggleFilter } = useBoolean(false);
  const [orderBy, setOrderBy] = useState<any>({
    createdAt: "desc",
  });
  const { data: { Form: findManyForm } = {}, loading } = useMyFormsQuery({
    variables: {
      orderBy,
    },
  });
  const openModal = useModalStoreSelectors.use.openModal();
  return (
    <div className="flex flex-col gap-4 items-start h-auto lg:max-w-full ml-auto mr-auto">
      <div className="flex items-center justify-center gap-4 pb-4 w-full bg-white shadow-lg">
        <Templates />
      </div>
      {loading && (
        <div className="flex flex-col items-center gap-2 w-full">
          <Loader />
          <p className="text-gray-500">Loading forms</p>
        </div>
      )}
      {!loading && findManyForm && findManyForm.length > 0 && (
        <div className="flex flex-col items-start justify-center gap-4 p-4 pt-0 w-full lg:max-w-4xl ml-auto mr-auto">
          <div className="flex justify-between w-full">
            <p>My forms</p>
            <Filters
              visible={filterVisible}
              toggle={(state) => toggleFilter(state)}
              onSelect={(filter) => setOrderBy(orderByMapper[filter])}
              selected={orderBy}
            />
          </div>
          <div className={cn("flex flex-wrap gap-4")}>
            {findManyForm?.map((item) => <Form key={item.id} form={item} />)}
          </div>
        </div>
      )}
      {!loading && !findManyForm?.length && (
        <div className="flex flex-col items-center gap-6 w-full rounded-md p-6">
          <p className="text-gray-500">You have not created any form yet!</p>
          <Button onClick={openModal}>Create</Button>
        </div>
      )}
    </div>
  );
}
