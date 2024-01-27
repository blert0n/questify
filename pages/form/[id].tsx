import { Loader } from "@/assets/svg";
import LiveForm from "@/components/Form/LiveForm";
import { useFormDataQuery } from "@/lib/graphql";
import { initialTheme } from "@/types";
import { useRouter } from "next/router";
import Error from "next/error";
import Meta from "@/components/Layout/Title";

export default function Index() {
  const router = useRouter();

  const { data: { findFirstForm } = {}, loading } = useFormDataQuery({
    variables: {
      formId: String(router.query.id),
    },
    skip: typeof router.query.id !== "string",
  });

  if (!findFirstForm && !loading) return <Error statusCode={404} />;

  return (
    <>
      <Meta title={findFirstForm?.name ?? "Form"} />
      <div
        className="flex flex-col self-start gap-8 items-center h-full w-full p-4 pt-8 overflow-y-auto sticky top-0"
        style={{ backgroundColor: findFirstForm?.style?.secondaryColor }}
      >
        {loading && <Loader />}
        {!loading && findFirstForm && (
          <div className="flex flex-col gap-4 w-full md:max-w-3xl">
            <LiveForm
              theme={findFirstForm.style || initialTheme}
              items={(findFirstForm?.items ?? []).map((item) => {
                const { items, ...rest } = item;
                return {
                  ...rest,
                  origin: "server",
                  options: items,
                };
              })}
            />
          </div>
        )}
      </div>
    </>
  );
}
