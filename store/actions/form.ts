import { FormItem } from "@/types";
import {
  FormItemCreateNestedManyWithoutFormInput,
  UploadHeaderImageDocument,
  UploadHeaderImageMutation,
  UploadItemImageDocument,
  UploadItemImageMutation,
  CreateFormDocument,
  CreateFormMutation,
  MyFormsDocument,
} from "@/lib/graphql";
import { apolloClient } from "@/lib/apollo";
import { toast } from "react-toastify";
import {
  closeFormModal,
  resetForm,
  setLoading,
  getTheme,
  getItems,
  getFormDetails,
} from "./";
import _ from "lodash";
interface UploadImagesToCdnParams {
  formId?: string;
  headerImage?: string;
  items: FormItem[];
}
const uploadHeaderImage = async (formId: string, image: string) => {
  console.log(formId, "headerImage");
  try {
    await apolloClient.mutate<UploadHeaderImageMutation>({
      mutation: UploadHeaderImageDocument,
      variables: {
        formId,
        base64: image,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
const uploadItemImage = async (formId: string, item: FormItem) => {
  if (item.image?.origin === "server" || !item.image?.dataUrl) return;
  try {
    await apolloClient.mutate<UploadItemImageMutation>({
      mutation: UploadItemImageDocument,
      variables: {
        formId,
        itemId: item.id,
        base64: item.image?.dataUrl,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const prepareCreateItems = (
  items: FormItem[]
): FormItemCreateNestedManyWithoutFormInput["create"] =>
  items.map((item) => ({
    id: item.id,
    name: item.name,
    order: item.order,
    required: item.required,
    items: item.options,
    type: item.type,
  }));

export const uploadImagesToCdn = async (params: UploadImagesToCdnParams) => {
  if (!params.formId && !params.headerImage && !params.items.length) return;
  if (params.formId && params.headerImage)
    await uploadHeaderImage(params.formId, params.headerImage);
  if (params.formId && params.items.length > 0) {
    for (const item of params.items) {
      await uploadItemImage(params.formId, item);
    }
  }
};

export const saveForm = async () => {
  setLoading(true);
  try {
    const theme = getTheme();
    const formDetails = getFormDetails();
    const formItems = getItems();
    const themeWithoutImage = _.omit(theme, "Header.image");
    const response = await apolloClient.mutate<CreateFormMutation>({
      mutation: CreateFormDocument,
      variables: {
        data: {
          name: formDetails.name,
          items: {
            create: prepareCreateItems(formItems),
          },
          style: themeWithoutImage,
          ownerId: "",
          favorite: formDetails.favorite,
        },
      },
      refetchQueries: [
        {
          query: MyFormsDocument,
        },
      ],
    });
    toast.success("Form created successfully!");
    closeFormModal();
    uploadImagesToCdn({
      formId: response.data?.createOneForm.id,
      headerImage: theme.Header.image?.dataUrl,
      items: formItems,
    });
    resetForm();
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.error("Error saving form:", error);
    toast.error("Something went wrong! Please try again later.");
  }
};
