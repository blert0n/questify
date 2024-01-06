import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: { input: any; output: any; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date; output: Date; }
  /** An arbitrary-precision Decimal type */
  Decimal: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: { input: any; output: any; }
}

export interface AggregateForm {
  _avg?: Maybe<FormAvgAggregateOutputType>;
  _count?: Maybe<FormCountAggregateOutputType>;
  _max?: Maybe<FormMaxAggregateOutputType>;
  _min?: Maybe<FormMinAggregateOutputType>;
  _sum?: Maybe<FormSumAggregateOutputType>;
}

export interface AggregateFormItem {
  _avg?: Maybe<FormItemAvgAggregateOutputType>;
  _count?: Maybe<FormItemCountAggregateOutputType>;
  _max?: Maybe<FormItemMaxAggregateOutputType>;
  _min?: Maybe<FormItemMinAggregateOutputType>;
  _sum?: Maybe<FormItemSumAggregateOutputType>;
}

export interface BatchPayload {
  count: Scalars['Int']['output'];
}

export interface EnumFormTypeFieldUpdateOperationsInput {
  set?: InputMaybe<FormType>;
}

export interface EnumFormTypeFilter {
  equals?: InputMaybe<FormType>;
  in?: InputMaybe<Array<InputMaybe<FormType>>>;
  not?: InputMaybe<NestedEnumFormTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<FormType>>>;
}

export interface EnumFormTypeWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFormTypeFilter>;
  _min?: InputMaybe<NestedEnumFormTypeFilter>;
  equals?: InputMaybe<FormType>;
  in?: InputMaybe<Array<InputMaybe<FormType>>>;
  not?: InputMaybe<NestedEnumFormTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<FormType>>>;
}

export interface Form {
  _count: FormCountOutputType;
  id: Scalars['String']['output'];
  items: Array<FormItem>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  ownerId: Scalars['String']['output'];
  style?: Maybe<Scalars['Json']['output']>;
}


export interface FormItemsArgs {
  cursor?: InputMaybe<FormItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<FormItemScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<FormItemOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemWhereInput>;
}

export interface FormAvgAggregateOutputType {
  order?: Maybe<Scalars['Float']['output']>;
}

export interface FormAvgOrderByAggregateInput {
  order?: InputMaybe<SortOrder>;
}

export interface FormCountAggregateOutputType {
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  ownerId: Scalars['Int']['output'];
  style: Scalars['Int']['output'];
}

export interface FormCountOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
}

export interface FormCountOutputType {
  items: Scalars['Int']['output'];
}

export interface FormCreateInput {
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<FormItemCreateNestedManyWithoutFormInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormCreateManyInput {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormCreateNestedOneWithoutItemsInput {
  connect?: InputMaybe<FormWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<FormCreateWithoutItemsInput>;
}

export interface FormCreateOrConnectWithoutItemsInput {
  create: FormCreateWithoutItemsInput;
  where: FormWhereUniqueInput;
}

export interface FormCreateWithoutItemsInput {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormItem {
  Form: Form;
  formId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  items?: Maybe<Scalars['Json']['output']>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  section: Scalars['Int']['output'];
  type: FormType;
}

export interface FormItemAvgAggregateOutputType {
  order?: Maybe<Scalars['Float']['output']>;
  section?: Maybe<Scalars['Float']['output']>;
}

export interface FormItemAvgOrderByAggregateInput {
  order?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
}

export interface FormItemCountAggregateOutputType {
  _all: Scalars['Int']['output'];
  formId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  items: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  section: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
}

export interface FormItemCountOrderByAggregateInput {
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface FormItemCreateInput {
  Form: FormCreateNestedOneWithoutItemsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemCreateManyFormInput {
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemCreateManyFormInputEnvelope {
  data: FormItemCreateManyFormInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface FormItemCreateManyInput {
  formId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemCreateNestedManyWithoutFormInput {
  connect?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormItemCreateOrConnectWithoutFormInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormItemCreateWithoutFormInput>>>;
  createMany?: InputMaybe<FormItemCreateManyFormInputEnvelope>;
}

export interface FormItemCreateOrConnectWithoutFormInput {
  create: FormItemCreateWithoutFormInput;
  where: FormItemWhereUniqueInput;
}

export interface FormItemCreateWithoutFormInput {
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemListRelationFilter {
  every?: InputMaybe<FormItemWhereInput>;
  none?: InputMaybe<FormItemWhereInput>;
  some?: InputMaybe<FormItemWhereInput>;
}

export interface FormItemMaxAggregateOutputType {
  formId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<FormType>;
}

export interface FormItemMaxOrderByAggregateInput {
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface FormItemMinAggregateOutputType {
  formId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<FormType>;
}

export interface FormItemMinOrderByAggregateInput {
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface FormItemOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface FormItemOrderByWithAggregationInput {
  _avg?: InputMaybe<FormItemAvgOrderByAggregateInput>;
  _count?: InputMaybe<FormItemCountOrderByAggregateInput>;
  _max?: InputMaybe<FormItemMaxOrderByAggregateInput>;
  _min?: InputMaybe<FormItemMinOrderByAggregateInput>;
  _sum?: InputMaybe<FormItemSumOrderByAggregateInput>;
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface FormItemOrderByWithRelationInput {
  Form?: InputMaybe<FormOrderByWithRelationInput>;
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export enum FormItemScalarFieldEnum {
  FormId = 'formId',
  Id = 'id',
  Items = 'items',
  Name = 'name',
  Order = 'order',
  Section = 'section',
  Type = 'type'
}

export interface FormItemScalarWhereInput {
  AND?: InputMaybe<Array<InputMaybe<FormItemScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormItemScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemScalarWhereInput>>>;
  formId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  section?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumFormTypeFilter>;
}

export interface FormItemScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<InputMaybe<FormItemScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormItemScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemScalarWhereWithAggregatesInput>>>;
  formId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  items?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  order?: InputMaybe<IntWithAggregatesFilter>;
  section?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<EnumFormTypeWithAggregatesFilter>;
}

export interface FormItemSumAggregateOutputType {
  order?: Maybe<Scalars['Int']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
}

export interface FormItemSumOrderByAggregateInput {
  order?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
}

export interface FormItemUncheckedCreateInput {
  formId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemUncheckedCreateNestedManyWithoutFormInput {
  connect?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormItemCreateOrConnectWithoutFormInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormItemCreateWithoutFormInput>>>;
  createMany?: InputMaybe<FormItemCreateManyFormInputEnvelope>;
}

export interface FormItemUncheckedCreateWithoutFormInput {
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemUncheckedUpdateInput {
  formId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUncheckedUpdateManyInput {
  formId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUncheckedUpdateManyWithoutFormInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUncheckedUpdateManyWithoutFormNestedInput {
  connect?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormItemCreateOrConnectWithoutFormInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormItemCreateWithoutFormInput>>>;
  createMany?: InputMaybe<FormItemCreateManyFormInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<FormItemScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<FormItemUpdateWithWhereUniqueWithoutFormInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<FormItemUpdateManyWithWhereWithoutFormInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<FormItemUpsertWithWhereUniqueWithoutFormInput>>>;
}

export interface FormItemUncheckedUpdateWithoutFormInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUpdateInput {
  Form?: InputMaybe<FormUpdateOneRequiredWithoutItemsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUpdateManyMutationInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUpdateManyWithWhereWithoutFormInput {
  data: FormItemUpdateManyMutationInput;
  where: FormItemScalarWhereInput;
}

export interface FormItemUpdateManyWithoutFormNestedInput {
  connect?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormItemCreateOrConnectWithoutFormInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormItemCreateWithoutFormInput>>>;
  createMany?: InputMaybe<FormItemCreateManyFormInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<FormItemScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<FormItemUpdateWithWhereUniqueWithoutFormInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<FormItemUpdateManyWithWhereWithoutFormInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<FormItemUpsertWithWhereUniqueWithoutFormInput>>>;
}

export interface FormItemUpdateWithWhereUniqueWithoutFormInput {
  data: FormItemUpdateWithoutFormInput;
  where: FormItemWhereUniqueInput;
}

export interface FormItemUpdateWithoutFormInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUpsertWithWhereUniqueWithoutFormInput {
  create: FormItemCreateWithoutFormInput;
  update: FormItemUpdateWithoutFormInput;
  where: FormItemWhereUniqueInput;
}

export interface FormItemWhereInput {
  AND?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  Form?: InputMaybe<FormRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  formId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  section?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumFormTypeFilter>;
}

export interface FormItemWhereUniqueInput {
  AND?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  Form?: InputMaybe<FormRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  formId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<IntFilter>;
  section?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumFormTypeFilter>;
}

export interface FormMaxAggregateOutputType {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
}

export interface FormMaxOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
}

export interface FormMinAggregateOutputType {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
}

export interface FormMinOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
}

export interface FormOrderByWithAggregationInput {
  _avg?: InputMaybe<FormAvgOrderByAggregateInput>;
  _count?: InputMaybe<FormCountOrderByAggregateInput>;
  _max?: InputMaybe<FormMaxOrderByAggregateInput>;
  _min?: InputMaybe<FormMinOrderByAggregateInput>;
  _sum?: InputMaybe<FormSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrderInput>;
}

export interface FormOrderByWithRelationInput {
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<FormItemOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrderInput>;
}

export interface FormRelationFilter {
  is?: InputMaybe<FormWhereInput>;
  isNot?: InputMaybe<FormWhereInput>;
}

export enum FormScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Order = 'order',
  OwnerId = 'ownerId',
  Style = 'style'
}

export interface FormScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<InputMaybe<FormScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormScalarWhereWithAggregatesInput>>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  order?: InputMaybe<IntWithAggregatesFilter>;
  ownerId?: InputMaybe<StringWithAggregatesFilter>;
  style?: InputMaybe<JsonNullableWithAggregatesFilter>;
}

export interface FormSumAggregateOutputType {
  order?: Maybe<Scalars['Int']['output']>;
}

export interface FormSumOrderByAggregateInput {
  order?: InputMaybe<SortOrder>;
}

export enum FormType {
  Date = 'DATE',
  Dropdown = 'DROPDOWN',
  Long = 'LONG',
  MultipleChoice = 'MULTIPLE_CHOICE',
  Short = 'SHORT',
  SingleChoice = 'SINGLE_CHOICE',
  Slider = 'SLIDER'
}

export interface FormUncheckedCreateInput {
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<FormItemUncheckedCreateNestedManyWithoutFormInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormUncheckedCreateWithoutItemsInput {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormUncheckedUpdateInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<FormItemUncheckedUpdateManyWithoutFormNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormUncheckedUpdateManyInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormUncheckedUpdateWithoutItemsInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormUpdateInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<FormItemUpdateManyWithoutFormNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormUpdateManyMutationInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormUpdateOneRequiredWithoutItemsNestedInput {
  connect?: InputMaybe<FormWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<FormCreateWithoutItemsInput>;
  update?: InputMaybe<FormUpdateToOneWithWhereWithoutItemsInput>;
  upsert?: InputMaybe<FormUpsertWithoutItemsInput>;
}

export interface FormUpdateToOneWithWhereWithoutItemsInput {
  data: FormUpdateWithoutItemsInput;
  where?: InputMaybe<FormWhereInput>;
}

export interface FormUpdateWithoutItemsInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
}

export interface FormUpsertWithoutItemsInput {
  create: FormCreateWithoutItemsInput;
  update: FormUpdateWithoutItemsInput;
  where?: InputMaybe<FormWhereInput>;
}

export interface FormWhereInput {
  AND?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<FormItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  ownerId?: InputMaybe<StringFilter>;
  style?: InputMaybe<JsonNullableFilter>;
}

export interface FormWhereUniqueInput {
  AND?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<FormItemListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<IntFilter>;
  ownerId?: InputMaybe<StringFilter>;
  style?: InputMaybe<JsonNullableFilter>;
}

export interface IntFieldUpdateOperationsInput {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
}

export interface IntFilter {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
}

export interface IntWithAggregatesFilter {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
}

export enum JsonNullValueFilter {
  AnyNull = 'AnyNull',
  DbNull = 'DbNull',
  JsonNull = 'JsonNull'
}

export interface JsonNullableFilter {
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
}

export interface JsonNullableWithAggregatesFilter {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
}

export interface Mutation {
  createOneForm: Form;
  createOneFormItem: FormItem;
  deleteOneForm?: Maybe<Form>;
  deleteOneFormItem?: Maybe<FormItem>;
  updateOneForm: Form;
  updateOneFormItem: FormItem;
}


export interface MutationCreateOneFormArgs {
  data: FormCreateInput;
}


export interface MutationCreateOneFormItemArgs {
  data: FormItemCreateInput;
}


export interface MutationDeleteOneFormArgs {
  where: FormWhereUniqueInput;
}


export interface MutationDeleteOneFormItemArgs {
  where: FormItemWhereUniqueInput;
}


export interface MutationUpdateOneFormArgs {
  data: FormUpdateInput;
  where: FormWhereUniqueInput;
}


export interface MutationUpdateOneFormItemArgs {
  data: FormItemUpdateInput;
  where: FormItemWhereUniqueInput;
}

export interface NestedEnumFormTypeFilter {
  equals?: InputMaybe<FormType>;
  in?: InputMaybe<Array<InputMaybe<FormType>>>;
  not?: InputMaybe<NestedEnumFormTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<FormType>>>;
}

export interface NestedEnumFormTypeWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFormTypeFilter>;
  _min?: InputMaybe<NestedEnumFormTypeFilter>;
  equals?: InputMaybe<FormType>;
  in?: InputMaybe<Array<InputMaybe<FormType>>>;
  not?: InputMaybe<NestedEnumFormTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<FormType>>>;
}

export interface NestedFloatFilter {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
}

export interface NestedIntFilter {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
}

export interface NestedIntNullableFilter {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
}

export interface NestedIntWithAggregatesFilter {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
}

export interface NestedJsonNullableFilter {
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
}

export interface NestedStringFilter {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface NestedStringWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
}

export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull'
}

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export interface Query {
  findFirstForm?: Maybe<Form>;
  findManyForm: Array<Form>;
  findManyFormCount: Scalars['Int']['output'];
  findManyFormItem: Array<FormItem>;
  findManyFormItemCount: Scalars['Int']['output'];
}


export interface QueryFindFirstFormArgs {
  cursor?: InputMaybe<FormWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<FormScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<FormOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormWhereInput>;
}


export interface QueryFindManyFormArgs {
  cursor?: InputMaybe<FormWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<FormScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<FormOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormWhereInput>;
}


export interface QueryFindManyFormCountArgs {
  cursor?: InputMaybe<FormWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<FormScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<FormOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormWhereInput>;
}


export interface QueryFindManyFormItemArgs {
  cursor?: InputMaybe<FormItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<FormItemScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<FormItemOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemWhereInput>;
}


export interface QueryFindManyFormItemCountArgs {
  cursor?: InputMaybe<FormItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<FormItemScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<FormItemOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemWhereInput>;
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export interface SortOrderInput {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
}

export interface StringFieldUpdateOperationsInput {
  set?: InputMaybe<Scalars['String']['input']>;
}

export interface StringFilter {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface StringWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
}

export enum TransactionIsolationLevel {
  ReadCommitted = 'ReadCommitted',
  ReadUncommitted = 'ReadUncommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable'
}

export type GetFormQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFormQuery = { findFirstForm?: { id: string } | undefined };


export const GetFormDocument = /*#__PURE__*/ gql`
    query GetForm($id: String) {
  findFirstForm(where: {id: {equals: $id}}) {
    id
  }
}
    `;

/**
 * __useGetFormQuery__
 *
 * To run a query within a React component, call `useGetFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFormQuery(baseOptions?: Apollo.QueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
      }
export function useGetFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
        }
export function useGetFormSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
        }
export type GetFormQueryHookResult = ReturnType<typeof useGetFormQuery>;
export type GetFormLazyQueryHookResult = ReturnType<typeof useGetFormLazyQuery>;
export type GetFormSuspenseQueryHookResult = ReturnType<typeof useGetFormSuspenseQuery>;
export type GetFormQueryResult = Apollo.QueryResult<GetFormQuery, GetFormQueryVariables>;