import { Form_Order_By, Order_By, useMyFormsQuery } from "@/lib/graphql";
import FormComponent from "./ListFormItem";
import { Loader } from "@/assets/svg";
import { Button } from "../ui";
import { useModalStoreSelectors } from "@/store";
import { cn } from "@/lib";
import Templates from "./Templates";
import { useBoolean } from "usehooks-ts";
import Filters from "./Filter";
import { useState } from "react";
import AppLoader from "../Layout/AppLoader";

const orderByMapper: Record<number, Form_Order_By> = {
  1: { createdAt: Order_By.Desc },
  2: { updatedAt: Order_By.Desc },
  3: { favorite: Order_By.Desc },
};

export default function Home() {
  const { value: filterVisible, setValue: toggleFilter } = useBoolean(false);
  const [orderBy, setOrderBy] = useState<Form_Order_By>({
    createdAt: Order_By.Desc,
  });
  const { data: { Form } = {}, loading } = useMyFormsQuery({
    variables: {
      orderBy,
    },
    notifyOnNetworkStatusChange: true,
  });
  const openModal = useModalStoreSelectors.use.openModal();
  if (loading) return <AppLoader />;
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
      {!loading && Form && Form.length > 0 && (
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
          <div
            className={cn(
              "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 self-center"
            )}
          >
            {Form?.map((item) => <FormComponent key={item.id} form={item} />)}
          </div>
        </div>
      )}
      {!loading && !Form?.length && (
        <div className="flex flex-col items-center gap-6 w-full rounded-md p-6">
          <p className="text-gray-500">You have not created any form yet!</p>
          <Button onClick={openModal}>Create</Button>
        </div>
      )}
    </div>
  );
}
