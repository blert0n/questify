import { Loader } from "@/assets/svg";
import LiveForm from "@/components/Form/LiveForm";
import { useGetFormQuery, useGetResponsesByIdQuery } from "@/lib/graphql";
import { FormItem, initialTheme } from "@/types";
import { useRouter } from "next/router";
import Meta from "@/components/Layout/Title";
import { Formik, Form } from "formik";
import { prepareFormik } from "@/lib";
import AppLoader from "@/components/Layout/AppLoader";

interface P {
  formId?: string;
  responseId?: string;
}

const FormResponse = ({ formId, responseId }: P) => {
  const router = useRouter();

  const { data: { Form_by_pk: findFirstForm } = {}, loading } = useGetFormQuery(
    {
      variables: {
        formId: formId ?? "",
      },
      skip: !formId,
    }
  );
  const { data: { Answer } = {}, loading: loadingAnswers } =
    useGetResponsesByIdQuery({
      variables: {
        responseId: responseId ?? "",
      },
      skip: !responseId,
    });

  if ((!findFirstForm && loading) || typeof router.query.id === "undefined")
    return <AppLoader message="Loading form..." />;

  if (!findFirstForm && !loading) return null;

  if (loadingAnswers) return <AppLoader />;

  const formItems: FormItem[] = findFirstForm
    ? (findFirstForm?.FormItems ?? []).map((item) => {
        const { items, ...rest } = item;
        return {
          ...rest,
          origin: "server",
          options: items,
        };
      })
    : [];

  const { initialValues, validationSchema } = prepareFormik(
    formItems,
    Answer ?? []
  );

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnChange
              onSubmit={(values) => console.log(values)}
            >
              <Form className="flex flex-col gap-2">
                <div className="flex flex-col gap-4">
                  <LiveForm
                    theme={findFirstForm.style || initialTheme}
                    items={formItems}
                    readonly
                  />
                </div>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </>
  );
};

export default FormResponse;
