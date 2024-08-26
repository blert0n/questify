import { useRouter } from "next/router";
import Error from "next/error";
import FormResponse from "@/components/Form/Responses/FormResponse";

export default function Index() {
  const router = useRouter();

  const formId = router.query.id;
  const responseId = router.query.response;

  if (!formId || !responseId)
    return <Error statusCode={404} withDarkMode={false} />;
  return (
    <FormResponse formId={String(formId)} responseId={String(responseId)} />
  );
}
