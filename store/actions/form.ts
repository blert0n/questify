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
  FormDataDocument,
  FormDataQuery,
  UpdateFormMutation,
  UpdateFormDocument,
  FormItemUpsertWithWhereUniqueWithoutFormInput,
} from "@/lib/graphql";
import { apolloClient } from "@/lib/";
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
  header?: {
    url?: string;
    origin?: string;
  };
  items: FormItem[];
}
const uploadHeaderImage = async (formId: string, image: string) => {
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
export const prepareUpsertItems = (
  items: FormItem[]
): FormItemUpsertWithWhereUniqueWithoutFormInput[] =>
  items.map((item) => ({
    where: {
      id: item.id,
    },
    create: {
      id: item.id,
      name: item.name,
      order: item.order,
      required: item.required,
      items: item.options,
      type: item.type,
    },
    update: {
      name: {
        set: item.name,
      },
      order: {
        set: item.order,
      },
      required: {
        set: item.required,
      },
      ...(item.image?.origin !== "server" && { image: null }),
      items: item.options,
    },
  }));

export const uploadImagesToCdn = async (params: UploadImagesToCdnParams) => {
  if (!params.formId && !params.header?.url && !params.items.length) return;
  if (params.formId && params.header?.url && params.header?.origin === "client")
    await uploadHeaderImage(params.formId, params.header.url);
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
          variables: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      ],
    });
    toast.success("Form created successfully!");
    closeFormModal();
    uploadImagesToCdn({
      formId: response.data?.createOneForm.id,
      header: {
        url: theme.Header.image?.dataUrl,
        origin: theme.Header.image?.origin,
      },
      items: formItems,
    });
    resetForm();
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.error("Error saving form:", error);
    toast.error(
      "Something went wrong! Make sure you're using an unique name and try again."
    );
  }
};
export const editForm = async (formId?: string) => {
  if (!formId) return;
  setLoading(true);
  try {
    const theme = getTheme();
    const formDetails = getFormDetails();
    const formItems = getItems();
    await apolloClient.mutate<UpdateFormMutation>({
      mutation: UpdateFormDocument,
      variables: {
        where: {
          id: formId,
        },
        data: {
          name: {
            set: formDetails.name,
          },
          favorite: {
            set: formDetails.favorite,
          },
          style:
            theme.Header.image?.origin === "client"
              ? _.omit(theme, "Header.image")
              : theme,
          items: {
            upsert: prepareUpsertItems(formItems),
          },
        },
      },
    });
    toast.success("Form updated successfully!");
    closeFormModal();
    uploadImagesToCdn({
      formId,
      header: {
        url: theme.Header.image?.dataUrl,
        origin: theme.Header.image?.origin,
      },
      items: formItems,
    });
    resetForm();
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.error("Error saving form:", error);
    toast.error(
      "Something went wrong! Make sure you're using an unique name and try again."
    );
  }
};
export const loadFormData = async (id: string) => {
  try {
    const { data: { findFirstForm } = {} } =
      await apolloClient.query<FormDataQuery>({
        query: FormDataDocument,
        variables: {
          formId: id,
        },
        fetchPolicy: "network-only",
      });
    return findFirstForm;
  } catch (e) {
    toast.error("Something went wrong! Please try again later!");
    console.log(e);
  }
};
