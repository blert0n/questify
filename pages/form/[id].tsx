import { Loader } from "@/assets/svg";
import LiveForm from "@/components/Form/LiveForm";
import { useFormDataQuery, useSubmitFormMutation } from "@/lib/graphql";
import { FormItem, initialTheme } from "@/types";
import { useRouter } from "next/router";
import Error from "next/error";
import Meta from "@/components/Layout/Title";
import { Formik, Form } from "formik";
import { getPrimaryColor, prepareFormik } from "@/lib";
import { Button } from "@/components/ui";
import { toast } from "react-toastify";

interface Value {
  [key: string]: string;
}

export default function Index() {
  const router = useRouter();
  const [submitForm] = useSubmitFormMutation();

  const { data: { findFirstForm } = {}, loading } = useFormDataQuery({
    variables: {
      formId: String(router.query.id),
    },
    skip: typeof router.query.id !== "string",
  });

  if (!findFirstForm && !loading) return <Error statusCode={404} />;

  const formItems: FormItem[] = findFirstForm
    ? (findFirstForm?.items ?? []).map((item) => {
        const { items, ...rest } = item;
        return {
          ...rest,
          origin: "server",
          options: items,
        };
      })
    : [];

  const { initialValues, validationSchema } = prepareFormik(formItems);

  const primaryColor = getPrimaryColor(findFirstForm?.style.primaryColor);

  const handleSubmit = async (values: Value) => {
    await submitForm({
      variables: {
        answers: Object.entries(values).map(([key, value]) => ({
          formItemId: key,
          value,
        })),
      },
      onCompleted() {
        router.push(
          {
            pathname: `${router.asPath}/success`,
            query: { backgroundColor: findFirstForm?.style?.secondaryColor },
          },
          `${router.asPath}/success`
        );
      },
      onError() {
        toast.error("Something went wrong! Please try again later!");
      },
    });
  };

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
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form className="flex flex-col gap-2">
                  <div className="flex flex-col gap-4">
                    <LiveForm
                      theme={findFirstForm.style || initialTheme}
                      items={formItems}
                    />
                  </div>
                  <div className="flex justify-end items-center gap-2">
                    <Button
                      type="submit"
                      size={"sm"}
                      style={{
                        backgroundColor: primaryColor,
                      }}
                      loading={isSubmitting}
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </>
  );
}
