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

export interface AggregateAnswer {
  _count?: Maybe<AnswerCountAggregateOutputType>;
  _max?: Maybe<AnswerMaxAggregateOutputType>;
  _min?: Maybe<AnswerMinAggregateOutputType>;
}

export interface AggregateFolder {
  _count?: Maybe<FolderCountAggregateOutputType>;
  _max?: Maybe<FolderMaxAggregateOutputType>;
  _min?: Maybe<FolderMinAggregateOutputType>;
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

export interface Answer {
  FormItem?: Maybe<FormItem>;
  formItemId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
}


export interface AnswerFormItemArgs {
  where?: InputMaybe<FormItemWhereInput>;
}

export interface AnswerCountAggregateOutputType {
  _all: Scalars['Int']['output'];
  formItemId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
}

export interface AnswerCountOrderByAggregateInput {
  formItemId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
}

export interface AnswerCreateInput {
  FormItem?: InputMaybe<FormItemCreateNestedOneWithoutAnswersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

export interface AnswerCreateManyFormItemInput {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

export interface AnswerCreateManyFormItemInputEnvelope {
  data: AnswerCreateManyFormItemInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AnswerCreateManyInput {
  formItemId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

export interface AnswerCreateNestedManyWithoutFormItemInput {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutFormItemInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutFormItemInput>>>;
  createMany?: InputMaybe<AnswerCreateManyFormItemInputEnvelope>;
}

export interface AnswerCreateOrConnectWithoutFormItemInput {
  create: AnswerCreateWithoutFormItemInput;
  where: AnswerWhereUniqueInput;
}

export interface AnswerCreateWithoutFormItemInput {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

export interface AnswerInput {
  formItemId: Scalars['String']['input'];
  value: Scalars['String']['input'];
}

export interface AnswerListRelationFilter {
  every?: InputMaybe<AnswerWhereInput>;
  none?: InputMaybe<AnswerWhereInput>;
  some?: InputMaybe<AnswerWhereInput>;
}

export interface AnswerMaxAggregateOutputType {
  formItemId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
}

export interface AnswerMaxOrderByAggregateInput {
  formItemId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
}

export interface AnswerMinAggregateOutputType {
  formItemId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
}

export interface AnswerMinOrderByAggregateInput {
  formItemId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
}

export interface AnswerOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface AnswerOrderByWithAggregationInput {
  _count?: InputMaybe<AnswerCountOrderByAggregateInput>;
  _max?: InputMaybe<AnswerMaxOrderByAggregateInput>;
  _min?: InputMaybe<AnswerMinOrderByAggregateInput>;
  formItemId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrderInput>;
}

export interface AnswerOrderByWithRelationInput {
  FormItem?: InputMaybe<FormItemOrderByWithRelationInput>;
  formItemId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrderInput>;
}

export enum AnswerScalarFieldEnum {
  FormItemId = 'formItemId',
  Id = 'id',
  Value = 'value'
}

export interface AnswerScalarWhereInput {
  AND?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  formItemId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringNullableFilter>;
}

export interface AnswerScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<InputMaybe<AnswerScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AnswerScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AnswerScalarWhereWithAggregatesInput>>>;
  formItemId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<StringNullableWithAggregatesFilter>;
}

export interface AnswerUncheckedCreateInput {
  formItemId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

export interface AnswerUncheckedCreateNestedManyWithoutFormItemInput {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutFormItemInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutFormItemInput>>>;
  createMany?: InputMaybe<AnswerCreateManyFormItemInputEnvelope>;
}

export interface AnswerUncheckedCreateWithoutFormItemInput {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

export interface AnswerUncheckedUpdateInput {
  formItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
}

export interface AnswerUncheckedUpdateManyInput {
  formItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
}

export interface AnswerUncheckedUpdateManyWithoutFormItemInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
}

export interface AnswerUncheckedUpdateManyWithoutFormItemNestedInput {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutFormItemInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutFormItemInput>>>;
  createMany?: InputMaybe<AnswerCreateManyFormItemInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<AnswerUpdateWithWhereUniqueWithoutFormItemInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<AnswerUpdateManyWithWhereWithoutFormItemInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<AnswerUpsertWithWhereUniqueWithoutFormItemInput>>>;
}

export interface AnswerUncheckedUpdateWithoutFormItemInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
}

export interface AnswerUpdateInput {
  FormItem?: InputMaybe<FormItemUpdateOneWithoutAnswersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
}

export interface AnswerUpdateManyMutationInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
}

export interface AnswerUpdateManyWithWhereWithoutFormItemInput {
  data: AnswerUpdateManyMutationInput;
  where: AnswerScalarWhereInput;
}

export interface AnswerUpdateManyWithoutFormItemNestedInput {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutFormItemInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutFormItemInput>>>;
  createMany?: InputMaybe<AnswerCreateManyFormItemInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<AnswerUpdateWithWhereUniqueWithoutFormItemInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<AnswerUpdateManyWithWhereWithoutFormItemInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<AnswerUpsertWithWhereUniqueWithoutFormItemInput>>>;
}

export interface AnswerUpdateWithWhereUniqueWithoutFormItemInput {
  data: AnswerUpdateWithoutFormItemInput;
  where: AnswerWhereUniqueInput;
}

export interface AnswerUpdateWithoutFormItemInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
}

export interface AnswerUpsertWithWhereUniqueWithoutFormItemInput {
  create: AnswerCreateWithoutFormItemInput;
  update: AnswerUpdateWithoutFormItemInput;
  where: AnswerWhereUniqueInput;
}

export interface AnswerWhereInput {
  AND?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  FormItem?: InputMaybe<FormItemNullableRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  formItemId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringNullableFilter>;
}

export interface AnswerWhereUniqueInput {
  AND?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  FormItem?: InputMaybe<FormItemNullableRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  formItemId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<StringNullableFilter>;
}

export interface BatchPayload {
  count: Scalars['Int']['output'];
}

export interface BoolFieldUpdateOperationsInput {
  set?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface BoolFilter {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
}

export interface BoolWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface DateTimeFilter {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
}

export interface DateTimeWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
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

export interface Folder {
  Forms: Array<Form>;
  _count: FolderCountOutputType;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['String']['output'];
}


export interface FolderFormsArgs {
  cursor?: InputMaybe<FormWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<FormScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<FormOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormWhereInput>;
}

export interface FolderCountAggregateOutputType {
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  ownerId: Scalars['Int']['output'];
}

export interface FolderCountOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
}

export interface FolderCountOutputType {
  Forms: Scalars['Int']['output'];
}

export interface FolderCreateInput {
  Forms?: InputMaybe<FormCreateNestedManyWithoutFolderInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
}

export interface FolderCreateManyInput {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
}

export interface FolderCreateNestedOneWithoutFormsInput {
  connect?: InputMaybe<FolderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FolderCreateOrConnectWithoutFormsInput>;
  create?: InputMaybe<FolderCreateWithoutFormsInput>;
}

export interface FolderCreateOrConnectWithoutFormsInput {
  create: FolderCreateWithoutFormsInput;
  where: FolderWhereUniqueInput;
}

export interface FolderCreateWithoutFormsInput {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
}

export interface FolderMaxAggregateOutputType {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
}

export interface FolderMaxOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
}

export interface FolderMinAggregateOutputType {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
}

export interface FolderMinOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
}

export interface FolderNullableRelationFilter {
  is?: InputMaybe<FolderWhereInput>;
  isNot?: InputMaybe<FolderWhereInput>;
}

export interface FolderOrderByWithAggregationInput {
  _count?: InputMaybe<FolderCountOrderByAggregateInput>;
  _max?: InputMaybe<FolderMaxOrderByAggregateInput>;
  _min?: InputMaybe<FolderMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
}

export interface FolderOrderByWithRelationInput {
  Forms?: InputMaybe<FormOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
}

export interface FolderOwnerIdNameCompoundUniqueInput {
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
}

export enum FolderScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  OwnerId = 'ownerId'
}

export interface FolderScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<InputMaybe<FolderScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FolderScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FolderScalarWhereWithAggregatesInput>>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  ownerId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface FolderUncheckedCreateInput {
  Forms?: InputMaybe<FormUncheckedCreateNestedManyWithoutFolderInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
}

export interface FolderUncheckedCreateWithoutFormsInput {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
}

export interface FolderUncheckedUpdateInput {
  Forms?: InputMaybe<FormUncheckedUpdateManyWithoutFolderNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface FolderUncheckedUpdateManyInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface FolderUncheckedUpdateWithoutFormsInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface FolderUpdateInput {
  Forms?: InputMaybe<FormUpdateManyWithoutFolderNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface FolderUpdateManyMutationInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface FolderUpdateOneWithoutFormsNestedInput {
  connect?: InputMaybe<FolderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FolderCreateOrConnectWithoutFormsInput>;
  create?: InputMaybe<FolderCreateWithoutFormsInput>;
  delete?: InputMaybe<FolderWhereInput>;
  disconnect?: InputMaybe<FolderWhereInput>;
  update?: InputMaybe<FolderUpdateToOneWithWhereWithoutFormsInput>;
  upsert?: InputMaybe<FolderUpsertWithoutFormsInput>;
}

export interface FolderUpdateToOneWithWhereWithoutFormsInput {
  data: FolderUpdateWithoutFormsInput;
  where?: InputMaybe<FolderWhereInput>;
}

export interface FolderUpdateWithoutFormsInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface FolderUpsertWithoutFormsInput {
  create: FolderCreateWithoutFormsInput;
  update: FolderUpdateWithoutFormsInput;
  where?: InputMaybe<FolderWhereInput>;
}

export interface FolderWhereInput {
  AND?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  Forms?: InputMaybe<FormListRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
}

export interface FolderWhereUniqueInput {
  AND?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  Forms?: InputMaybe<FormListRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FolderWhereInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
  ownerId_name?: InputMaybe<FolderOwnerIdNameCompoundUniqueInput>;
}

export interface Form {
  Folder?: Maybe<Folder>;
  _count: FormCountOutputType;
  createdAt: Scalars['DateTime']['output'];
  favorite: Scalars['Boolean']['output'];
  folderId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  items: Array<FormItem>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  ownerId: Scalars['String']['output'];
  responses: Scalars['Int']['output'];
  style?: Maybe<Scalars['Json']['output']>;
  updatedAt: Scalars['DateTime']['output'];
}


export interface FormFolderArgs {
  where?: InputMaybe<FolderWhereInput>;
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
  responses?: Maybe<Scalars['Float']['output']>;
}

export interface FormAvgOrderByAggregateInput {
  order?: InputMaybe<SortOrder>;
  responses?: InputMaybe<SortOrder>;
}

export interface FormCountAggregateOutputType {
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  favorite: Scalars['Int']['output'];
  folderId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  ownerId: Scalars['Int']['output'];
  responses: Scalars['Int']['output'];
  style: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
}

export interface FormCountOrderByAggregateInput {
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  folderId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  responses?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
}

export interface FormCountOutputType {
  items: Scalars['Int']['output'];
}

export interface FormCreateInput {
  Folder?: InputMaybe<FolderCreateNestedOneWithoutFormsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<FormItemCreateNestedManyWithoutFormInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface FormCreateManyFolderInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface FormCreateManyFolderInputEnvelope {
  data: FormCreateManyFolderInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface FormCreateManyInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface FormCreateNestedManyWithoutFolderInput {
  connect?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormCreateOrConnectWithoutFolderInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormCreateWithoutFolderInput>>>;
  createMany?: InputMaybe<FormCreateManyFolderInputEnvelope>;
}

export interface FormCreateNestedOneWithoutItemsInput {
  connect?: InputMaybe<FormWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<FormCreateWithoutItemsInput>;
}

export interface FormCreateOrConnectWithoutFolderInput {
  create: FormCreateWithoutFolderInput;
  where: FormWhereUniqueInput;
}

export interface FormCreateOrConnectWithoutItemsInput {
  create: FormCreateWithoutItemsInput;
  where: FormWhereUniqueInput;
}

export interface FormCreateWithoutFolderInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<FormItemCreateNestedManyWithoutFormInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface FormCreateWithoutItemsInput {
  Folder?: InputMaybe<FolderCreateNestedOneWithoutFormsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface FormItem {
  Answers: Array<Answer>;
  Form: Form;
  _count: FormItemCountOutputType;
  formId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['Json']['output']>;
  items?: Maybe<Scalars['Json']['output']>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  required: Scalars['Boolean']['output'];
  section: Scalars['Int']['output'];
  type: FormType;
}


export interface FormItemAnswersArgs {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AnswerWhereInput>;
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
  image: Scalars['Int']['output'];
  items: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  required: Scalars['Int']['output'];
  section: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
}

export interface FormItemCountOrderByAggregateInput {
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  items?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface FormItemCountOutputType {
  Answers: Scalars['Int']['output'];
}

export interface FormItemCreateInput {
  Answers?: InputMaybe<AnswerCreateNestedManyWithoutFormItemInput>;
  Form: FormCreateNestedOneWithoutItemsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemCreateManyFormInput {
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
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
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemCreateNestedManyWithoutFormInput {
  connect?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormItemCreateOrConnectWithoutFormInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormItemCreateWithoutFormInput>>>;
  createMany?: InputMaybe<FormItemCreateManyFormInputEnvelope>;
}

export interface FormItemCreateNestedOneWithoutAnswersInput {
  connect?: InputMaybe<FormItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormItemCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<FormItemCreateWithoutAnswersInput>;
}

export interface FormItemCreateOrConnectWithoutAnswersInput {
  create: FormItemCreateWithoutAnswersInput;
  where: FormItemWhereUniqueInput;
}

export interface FormItemCreateOrConnectWithoutFormInput {
  create: FormItemCreateWithoutFormInput;
  where: FormItemWhereUniqueInput;
}

export interface FormItemCreateWithoutAnswersInput {
  Form: FormCreateNestedOneWithoutItemsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemCreateWithoutFormInput {
  Answers?: InputMaybe<AnswerCreateNestedManyWithoutFormItemInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
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
  required?: Maybe<Scalars['Boolean']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<FormType>;
}

export interface FormItemMaxOrderByAggregateInput {
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface FormItemMinAggregateOutputType {
  formId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<FormType>;
}

export interface FormItemMinOrderByAggregateInput {
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface FormItemNullableRelationFilter {
  is?: InputMaybe<FormItemWhereInput>;
  isNot?: InputMaybe<FormItemWhereInput>;
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
  image?: InputMaybe<SortOrderInput>;
  items?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface FormItemOrderByWithRelationInput {
  Answers?: InputMaybe<AnswerOrderByRelationAggregateInput>;
  Form?: InputMaybe<FormOrderByWithRelationInput>;
  formId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  items?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  section?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export enum FormItemScalarFieldEnum {
  FormId = 'formId',
  Id = 'id',
  Image = 'image',
  Items = 'items',
  Name = 'name',
  Order = 'order',
  Required = 'required',
  Section = 'section',
  Type = 'type'
}

export interface FormItemScalarWhereInput {
  AND?: InputMaybe<Array<InputMaybe<FormItemScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormItemScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemScalarWhereInput>>>;
  formId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<JsonNullableFilter>;
  items?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  required?: InputMaybe<BoolFilter>;
  section?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumFormTypeFilter>;
}

export interface FormItemScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<InputMaybe<FormItemScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormItemScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemScalarWhereWithAggregatesInput>>>;
  formId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<JsonNullableWithAggregatesFilter>;
  items?: InputMaybe<JsonNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  order?: InputMaybe<IntWithAggregatesFilter>;
  required?: InputMaybe<BoolWithAggregatesFilter>;
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
  Answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutFormItemInput>;
  formId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemUncheckedCreateNestedManyWithoutFormInput {
  connect?: InputMaybe<Array<InputMaybe<FormItemWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormItemCreateOrConnectWithoutFormInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormItemCreateWithoutFormInput>>>;
  createMany?: InputMaybe<FormItemCreateManyFormInputEnvelope>;
}

export interface FormItemUncheckedCreateWithoutAnswersInput {
  formId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemUncheckedCreateWithoutFormInput {
  Answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutFormItemInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type: FormType;
}

export interface FormItemUncheckedUpdateInput {
  Answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutFormItemNestedInput>;
  formId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUncheckedUpdateManyInput {
  formId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUncheckedUpdateManyWithoutFormInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
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

export interface FormItemUncheckedUpdateWithoutAnswersInput {
  formId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUncheckedUpdateWithoutFormInput {
  Answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutFormItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUpdateInput {
  Answers?: InputMaybe<AnswerUpdateManyWithoutFormItemNestedInput>;
  Form?: InputMaybe<FormUpdateOneRequiredWithoutItemsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUpdateManyMutationInput {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
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

export interface FormItemUpdateOneWithoutAnswersNestedInput {
  connect?: InputMaybe<FormItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormItemCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<FormItemCreateWithoutAnswersInput>;
  delete?: InputMaybe<FormItemWhereInput>;
  disconnect?: InputMaybe<FormItemWhereInput>;
  update?: InputMaybe<FormItemUpdateToOneWithWhereWithoutAnswersInput>;
  upsert?: InputMaybe<FormItemUpsertWithoutAnswersInput>;
}

export interface FormItemUpdateToOneWithWhereWithoutAnswersInput {
  data: FormItemUpdateWithoutAnswersInput;
  where?: InputMaybe<FormItemWhereInput>;
}

export interface FormItemUpdateWithWhereUniqueWithoutFormInput {
  data: FormItemUpdateWithoutFormInput;
  where: FormItemWhereUniqueInput;
}

export interface FormItemUpdateWithoutAnswersInput {
  Form?: InputMaybe<FormUpdateOneRequiredWithoutItemsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUpdateWithoutFormInput {
  Answers?: InputMaybe<AnswerUpdateManyWithoutFormItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<Scalars['Json']['input']>;
  items?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  required?: InputMaybe<BoolFieldUpdateOperationsInput>;
  section?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFormTypeFieldUpdateOperationsInput>;
}

export interface FormItemUpsertWithWhereUniqueWithoutFormInput {
  create: FormItemCreateWithoutFormInput;
  update: FormItemUpdateWithoutFormInput;
  where: FormItemWhereUniqueInput;
}

export interface FormItemUpsertWithoutAnswersInput {
  create: FormItemCreateWithoutAnswersInput;
  update: FormItemUpdateWithoutAnswersInput;
  where?: InputMaybe<FormItemWhereInput>;
}

export interface FormItemWhereInput {
  AND?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  Answers?: InputMaybe<AnswerListRelationFilter>;
  Form?: InputMaybe<FormRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  formId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<JsonNullableFilter>;
  items?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  required?: InputMaybe<BoolFilter>;
  section?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumFormTypeFilter>;
}

export interface FormItemWhereUniqueInput {
  AND?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  Answers?: InputMaybe<AnswerListRelationFilter>;
  Form?: InputMaybe<FormRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemWhereInput>>>;
  formId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<JsonNullableFilter>;
  items?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  required?: InputMaybe<BoolFilter>;
  section?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumFormTypeFilter>;
}

export interface FormListRelationFilter {
  every?: InputMaybe<FormWhereInput>;
  none?: InputMaybe<FormWhereInput>;
  some?: InputMaybe<FormWhereInput>;
}

export interface FormMaxAggregateOutputType {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  favorite?: Maybe<Scalars['Boolean']['output']>;
  folderId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  responses?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface FormMaxOrderByAggregateInput {
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  folderId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  responses?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
}

export interface FormMinAggregateOutputType {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  favorite?: Maybe<Scalars['Boolean']['output']>;
  folderId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  responses?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface FormMinOrderByAggregateInput {
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  folderId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  responses?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
}

export interface FormOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface FormOrderByWithAggregationInput {
  _avg?: InputMaybe<FormAvgOrderByAggregateInput>;
  _count?: InputMaybe<FormCountOrderByAggregateInput>;
  _max?: InputMaybe<FormMaxOrderByAggregateInput>;
  _min?: InputMaybe<FormMinOrderByAggregateInput>;
  _sum?: InputMaybe<FormSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  folderId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  responses?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
}

export interface FormOrderByWithRelationInput {
  Folder?: InputMaybe<FolderOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  favorite?: InputMaybe<SortOrder>;
  folderId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<FormItemOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  responses?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
}

export interface FormOwnerIdNameCompoundUniqueInput {
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
}

export interface FormRelationFilter {
  is?: InputMaybe<FormWhereInput>;
  isNot?: InputMaybe<FormWhereInput>;
}

export enum FormScalarFieldEnum {
  CreatedAt = 'createdAt',
  Favorite = 'favorite',
  FolderId = 'folderId',
  Id = 'id',
  Name = 'name',
  Order = 'order',
  OwnerId = 'ownerId',
  Responses = 'responses',
  Style = 'style',
  UpdatedAt = 'updatedAt'
}

export interface FormScalarWhereInput {
  AND?: InputMaybe<Array<InputMaybe<FormScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  favorite?: InputMaybe<BoolFilter>;
  folderId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  ownerId?: InputMaybe<StringFilter>;
  responses?: InputMaybe<IntFilter>;
  style?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
}

export interface FormScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<InputMaybe<FormScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<FormScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  favorite?: InputMaybe<BoolWithAggregatesFilter>;
  folderId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  order?: InputMaybe<IntWithAggregatesFilter>;
  ownerId?: InputMaybe<StringWithAggregatesFilter>;
  responses?: InputMaybe<IntWithAggregatesFilter>;
  style?: InputMaybe<JsonNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
}

export interface FormSumAggregateOutputType {
  order?: Maybe<Scalars['Int']['output']>;
  responses?: Maybe<Scalars['Int']['output']>;
}

export interface FormSumOrderByAggregateInput {
  order?: InputMaybe<SortOrder>;
  responses?: InputMaybe<SortOrder>;
}

export enum FormType {
  Date = 'DATE',
  Dropdown = 'DROPDOWN',
  LinearScale = 'LINEAR_SCALE',
  Long = 'LONG',
  MultipleChoice = 'MULTIPLE_CHOICE',
  Short = 'SHORT',
  SingleChoice = 'SINGLE_CHOICE'
}

export interface FormUncheckedCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<FormItemUncheckedCreateNestedManyWithoutFormInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface FormUncheckedCreateNestedManyWithoutFolderInput {
  connect?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormCreateOrConnectWithoutFolderInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormCreateWithoutFolderInput>>>;
  createMany?: InputMaybe<FormCreateManyFolderInputEnvelope>;
}

export interface FormUncheckedCreateWithoutFolderInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<FormItemUncheckedCreateNestedManyWithoutFormInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface FormUncheckedCreateWithoutItemsInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId: Scalars['String']['input'];
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface FormUncheckedUpdateInput {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  folderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<FormItemUncheckedUpdateManyWithoutFormNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUncheckedUpdateManyInput {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  folderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUncheckedUpdateManyWithoutFolderInput {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUncheckedUpdateManyWithoutFolderNestedInput {
  connect?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormCreateOrConnectWithoutFolderInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormCreateWithoutFolderInput>>>;
  createMany?: InputMaybe<FormCreateManyFolderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<FormScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<FormUpdateWithWhereUniqueWithoutFolderInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<FormUpdateManyWithWhereWithoutFolderInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<FormUpsertWithWhereUniqueWithoutFolderInput>>>;
}

export interface FormUncheckedUpdateWithoutFolderInput {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<FormItemUncheckedUpdateManyWithoutFormNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUncheckedUpdateWithoutItemsInput {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  folderId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUpdateInput {
  Folder?: InputMaybe<FolderUpdateOneWithoutFormsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<FormItemUpdateManyWithoutFormNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUpdateManyMutationInput {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUpdateManyWithWhereWithoutFolderInput {
  data: FormUpdateManyMutationInput;
  where: FormScalarWhereInput;
}

export interface FormUpdateManyWithoutFolderNestedInput {
  connect?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<FormCreateOrConnectWithoutFolderInput>>>;
  create?: InputMaybe<Array<InputMaybe<FormCreateWithoutFolderInput>>>;
  createMany?: InputMaybe<FormCreateManyFolderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<FormScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<FormWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<FormUpdateWithWhereUniqueWithoutFolderInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<FormUpdateManyWithWhereWithoutFolderInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<FormUpsertWithWhereUniqueWithoutFolderInput>>>;
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

export interface FormUpdateWithWhereUniqueWithoutFolderInput {
  data: FormUpdateWithoutFolderInput;
  where: FormWhereUniqueInput;
}

export interface FormUpdateWithoutFolderInput {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<FormItemUpdateManyWithoutFormNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUpdateWithoutItemsInput {
  Folder?: InputMaybe<FolderUpdateOneWithoutFormsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorite?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<IntFieldUpdateOperationsInput>;
  style?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface FormUpsertWithWhereUniqueWithoutFolderInput {
  create: FormCreateWithoutFolderInput;
  update: FormUpdateWithoutFolderInput;
  where: FormWhereUniqueInput;
}

export interface FormUpsertWithoutItemsInput {
  create: FormCreateWithoutItemsInput;
  update: FormUpdateWithoutItemsInput;
  where?: InputMaybe<FormWhereInput>;
}

export interface FormWhereInput {
  AND?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  Folder?: InputMaybe<FolderNullableRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  favorite?: InputMaybe<BoolFilter>;
  folderId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<FormItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  ownerId?: InputMaybe<StringFilter>;
  responses?: InputMaybe<IntFilter>;
  style?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
}

export interface FormWhereUniqueInput {
  AND?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  Folder?: InputMaybe<FolderNullableRelationFilter>;
  NOT?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FormWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  favorite?: InputMaybe<BoolFilter>;
  folderId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<FormItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  ownerId?: InputMaybe<StringFilter>;
  ownerId_name?: InputMaybe<FormOwnerIdNameCompoundUniqueInput>;
  responses?: InputMaybe<IntFilter>;
  style?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
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
  createOneAnswer: Answer;
  createOneForm: Form;
  createOneFormItem: FormItem;
  deleteOneFolder?: Maybe<Folder>;
  deleteOneForm?: Maybe<Form>;
  deleteOneFormItem?: Maybe<FormItem>;
  submitForm?: Maybe<Form>;
  updateOneForm: Form;
  updateOneFormItem: FormItem;
  uploadItemImage?: Maybe<UploadResponse>;
  uploaderHeaderImage?: Maybe<UploadResponse>;
  upsertOneFolder: Folder;
}


export interface MutationCreateOneAnswerArgs {
  data?: InputMaybe<AnswerCreateInput>;
}


export interface MutationCreateOneFormArgs {
  data: FormCreateInput;
}


export interface MutationCreateOneFormItemArgs {
  data: FormItemCreateInput;
}


export interface MutationDeleteOneFolderArgs {
  where: FolderWhereUniqueInput;
}


export interface MutationDeleteOneFormArgs {
  where: FormWhereUniqueInput;
}


export interface MutationDeleteOneFormItemArgs {
  where: FormItemWhereUniqueInput;
}


export interface MutationSubmitFormArgs {
  answers: Array<AnswerInput>;
  formId: Scalars['String']['input'];
}


export interface MutationUpdateOneFormArgs {
  data: FormUpdateInput;
  where: FormWhereUniqueInput;
}


export interface MutationUpdateOneFormItemArgs {
  data: FormItemUpdateInput;
  where: FormItemWhereUniqueInput;
}


export interface MutationUploadItemImageArgs {
  base64: Scalars['String']['input'];
  formId: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
}


export interface MutationUploaderHeaderImageArgs {
  base64: Scalars['String']['input'];
  formId: Scalars['String']['input'];
}


export interface MutationUpsertOneFolderArgs {
  create: FolderCreateInput;
  update: FolderUpdateInput;
  where: FolderWhereUniqueInput;
}

export interface NestedBoolFilter {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
}

export interface NestedBoolWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
}

export interface NestedDateTimeFilter {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
}

export interface NestedDateTimeWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
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

export interface NestedStringNullableFilter {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface NestedStringNullableWithAggregatesFilter {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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

export interface NullableStringFieldUpdateOperationsInput {
  set?: InputMaybe<Scalars['String']['input']>;
}

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export interface Query {
  findFirstForm?: Maybe<Form>;
  findManyAnswer: Array<Answer>;
  findManyFolder: Array<Folder>;
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


export interface QueryFindManyAnswerArgs {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AnswerWhereInput>;
}


export interface QueryFindManyFolderArgs {
  cursor?: InputMaybe<FolderWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<FolderScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<FolderOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FolderWhereInput>;
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

export interface StringNullableFilter {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface StringNullableWithAggregatesFilter {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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

export interface UploadResponse {
  /** Error mesage, or uploaded file url */
  message?: Maybe<Scalars['String']['output']>;
  /** Success flag */
  success?: Maybe<Scalars['Boolean']['output']>;
}

export type ResponsesQueryVariables = Exact<{
  formId: Scalars['String']['input'];
}>;


export type ResponsesQuery = { findFirstForm?: { id: string, responses: number, items: Array<{ id: string, name: string, type: FormType, _count: { Answers: number }, Answers: Array<{ id: string, value?: string | undefined }> }> } | undefined };

export type MyFoldersQueryVariables = Exact<{ [key: string]: never; }>;


export type MyFoldersQuery = { findManyFolder: Array<{ id: string, name: string }> };

export type UpsertFolderMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpsertFolderMutation = { upsertOneFolder: { id: string, name: string } };

export type DeleteFolderMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteFolderMutation = { deleteOneFolder?: { id: string, name: string } | undefined };

export type UpdateFormFolderMutationVariables = Exact<{
  folder: FolderUpdateOneWithoutFormsNestedInput;
  formId: Scalars['String']['input'];
}>;


export type UpdateFormFolderMutation = { updateOneForm: { id: string } };

export type CreateFormMutationVariables = Exact<{
  data: FormCreateInput;
}>;


export type CreateFormMutation = { createOneForm: { id: string, name: string, createdAt: Date } };

export type DeleteFormMutationVariables = Exact<{
  formId: Scalars['String']['input'];
}>;


export type DeleteFormMutation = { deleteOneForm?: { id: string } | undefined };

export type StarFormMutationVariables = Exact<{
  formId: Scalars['String']['input'];
  favorite: Scalars['Boolean']['input'];
}>;


export type StarFormMutation = { updateOneForm: { id: string, favorite: boolean } };

export type MyFormsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<InputMaybe<FormOrderByWithRelationInput>> | InputMaybe<FormOrderByWithRelationInput>>;
}>;


export type MyFormsQuery = { findManyForm: Array<{ id: string, name: string, favorite: boolean, createdAt: Date, updatedAt: Date }> };

export type FolderFormsQueryVariables = Exact<{
  folderId: Scalars['String']['input'];
}>;


export type FolderFormsQuery = { findManyForm: Array<{ id: string, name: string, favorite: boolean, folderId?: string | undefined, createdAt: Date, updatedAt: Date }> };

export type DefaultFolderFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type DefaultFolderFormsQuery = { findManyForm: Array<{ id: string, name: string, favorite: boolean, folderId?: string | undefined, createdAt: Date, updatedAt: Date }> };

export type FormDataQueryVariables = Exact<{
  formId: Scalars['String']['input'];
}>;


export type FormDataQuery = { findFirstForm?: { id: string, name: string, favorite: boolean, style?: any | undefined, items: Array<{ id: string, formId: string, name: string, order: number, required: boolean, items?: any | undefined, image?: any | undefined, type: FormType }> } | undefined };

export type UploadItemImageMutationVariables = Exact<{
  formId: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
  base64: Scalars['String']['input'];
}>;


export type UploadItemImageMutation = { uploadItemImage?: { success?: boolean | undefined } | undefined };

export type UploadHeaderImageMutationVariables = Exact<{
  formId: Scalars['String']['input'];
  base64: Scalars['String']['input'];
}>;


export type UploadHeaderImageMutation = { uploaderHeaderImage?: { success?: boolean | undefined } | undefined };

export type UpdateFormMutationVariables = Exact<{
  data: FormUpdateInput;
  where: FormWhereUniqueInput;
}>;


export type UpdateFormMutation = { updateOneForm: { id: string } };

export type SubmitFormMutationVariables = Exact<{
  formId: Scalars['String']['input'];
  answers: Array<AnswerInput> | AnswerInput;
}>;


export type SubmitFormMutation = { submitForm?: { id: string } | undefined };


export const ResponsesDocument = /*#__PURE__*/ gql`
    query Responses($formId: String!) {
  findFirstForm(where: {id: {equals: $formId}}) {
    id
    responses
    items(orderBy: {order: asc}) {
      id
      name
      _count {
        Answers
      }
      type
      Answers {
        id
        value
      }
    }
  }
}
    `;

/**
 * __useResponsesQuery__
 *
 * To run a query within a React component, call `useResponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useResponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResponsesQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useResponsesQuery(baseOptions: Apollo.QueryHookOptions<ResponsesQuery, ResponsesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ResponsesQuery, ResponsesQueryVariables>(ResponsesDocument, options);
      }
export function useResponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResponsesQuery, ResponsesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ResponsesQuery, ResponsesQueryVariables>(ResponsesDocument, options);
        }
export function useResponsesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ResponsesQuery, ResponsesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ResponsesQuery, ResponsesQueryVariables>(ResponsesDocument, options);
        }
export type ResponsesQueryHookResult = ReturnType<typeof useResponsesQuery>;
export type ResponsesLazyQueryHookResult = ReturnType<typeof useResponsesLazyQuery>;
export type ResponsesSuspenseQueryHookResult = ReturnType<typeof useResponsesSuspenseQuery>;
export type ResponsesQueryResult = Apollo.QueryResult<ResponsesQuery, ResponsesQueryVariables>;
export const MyFoldersDocument = /*#__PURE__*/ gql`
    query MyFolders {
  findManyFolder {
    id
    name
  }
}
    `;

/**
 * __useMyFoldersQuery__
 *
 * To run a query within a React component, call `useMyFoldersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFoldersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFoldersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFoldersQuery(baseOptions?: Apollo.QueryHookOptions<MyFoldersQuery, MyFoldersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyFoldersQuery, MyFoldersQueryVariables>(MyFoldersDocument, options);
      }
export function useMyFoldersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyFoldersQuery, MyFoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyFoldersQuery, MyFoldersQueryVariables>(MyFoldersDocument, options);
        }
export function useMyFoldersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MyFoldersQuery, MyFoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyFoldersQuery, MyFoldersQueryVariables>(MyFoldersDocument, options);
        }
export type MyFoldersQueryHookResult = ReturnType<typeof useMyFoldersQuery>;
export type MyFoldersLazyQueryHookResult = ReturnType<typeof useMyFoldersLazyQuery>;
export type MyFoldersSuspenseQueryHookResult = ReturnType<typeof useMyFoldersSuspenseQuery>;
export type MyFoldersQueryResult = Apollo.QueryResult<MyFoldersQuery, MyFoldersQueryVariables>;
export const UpsertFolderDocument = /*#__PURE__*/ gql`
    mutation UpsertFolder($id: String!, $name: String!) {
  upsertOneFolder(
    where: {id: $id}
    create: {name: $name, ownerId: ""}
    update: {name: {set: $name}}
  ) {
    id
    name
  }
}
    `;
export type UpsertFolderMutationFn = Apollo.MutationFunction<UpsertFolderMutation, UpsertFolderMutationVariables>;

/**
 * __useUpsertFolderMutation__
 *
 * To run a mutation, you first call `useUpsertFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertFolderMutation, { data, loading, error }] = useUpsertFolderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpsertFolderMutation(baseOptions?: Apollo.MutationHookOptions<UpsertFolderMutation, UpsertFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertFolderMutation, UpsertFolderMutationVariables>(UpsertFolderDocument, options);
      }
export type UpsertFolderMutationHookResult = ReturnType<typeof useUpsertFolderMutation>;
export type UpsertFolderMutationResult = Apollo.MutationResult<UpsertFolderMutation>;
export const DeleteFolderDocument = /*#__PURE__*/ gql`
    mutation DeleteFolder($id: String!) {
  deleteOneFolder(where: {id: $id}) {
    id
    name
  }
}
    `;
export type DeleteFolderMutationFn = Apollo.MutationFunction<DeleteFolderMutation, DeleteFolderMutationVariables>;

/**
 * __useDeleteFolderMutation__
 *
 * To run a mutation, you first call `useDeleteFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFolderMutation, { data, loading, error }] = useDeleteFolderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFolderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFolderMutation, DeleteFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFolderMutation, DeleteFolderMutationVariables>(DeleteFolderDocument, options);
      }
export type DeleteFolderMutationHookResult = ReturnType<typeof useDeleteFolderMutation>;
export type DeleteFolderMutationResult = Apollo.MutationResult<DeleteFolderMutation>;
export const UpdateFormFolderDocument = /*#__PURE__*/ gql`
    mutation UpdateFormFolder($folder: FolderUpdateOneWithoutFormsNestedInput!, $formId: String!) {
  updateOneForm(where: {id: $formId}, data: {Folder: $folder}) {
    id
  }
}
    `;
export type UpdateFormFolderMutationFn = Apollo.MutationFunction<UpdateFormFolderMutation, UpdateFormFolderMutationVariables>;

/**
 * __useUpdateFormFolderMutation__
 *
 * To run a mutation, you first call `useUpdateFormFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFormFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFormFolderMutation, { data, loading, error }] = useUpdateFormFolderMutation({
 *   variables: {
 *      folder: // value for 'folder'
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useUpdateFormFolderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFormFolderMutation, UpdateFormFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFormFolderMutation, UpdateFormFolderMutationVariables>(UpdateFormFolderDocument, options);
      }
export type UpdateFormFolderMutationHookResult = ReturnType<typeof useUpdateFormFolderMutation>;
export type UpdateFormFolderMutationResult = Apollo.MutationResult<UpdateFormFolderMutation>;
export const CreateFormDocument = /*#__PURE__*/ gql`
    mutation CreateForm($data: FormCreateInput!) {
  createOneForm(data: $data) {
    id
    name
    createdAt
  }
}
    `;
export type CreateFormMutationFn = Apollo.MutationFunction<CreateFormMutation, CreateFormMutationVariables>;

/**
 * __useCreateFormMutation__
 *
 * To run a mutation, you first call `useCreateFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFormMutation, { data, loading, error }] = useCreateFormMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFormMutation(baseOptions?: Apollo.MutationHookOptions<CreateFormMutation, CreateFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFormMutation, CreateFormMutationVariables>(CreateFormDocument, options);
      }
export type CreateFormMutationHookResult = ReturnType<typeof useCreateFormMutation>;
export type CreateFormMutationResult = Apollo.MutationResult<CreateFormMutation>;
export const DeleteFormDocument = /*#__PURE__*/ gql`
    mutation DeleteForm($formId: String!) {
  deleteOneForm(where: {id: $formId}) {
    id
  }
}
    `;
export type DeleteFormMutationFn = Apollo.MutationFunction<DeleteFormMutation, DeleteFormMutationVariables>;

/**
 * __useDeleteFormMutation__
 *
 * To run a mutation, you first call `useDeleteFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFormMutation, { data, loading, error }] = useDeleteFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useDeleteFormMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFormMutation, DeleteFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFormMutation, DeleteFormMutationVariables>(DeleteFormDocument, options);
      }
export type DeleteFormMutationHookResult = ReturnType<typeof useDeleteFormMutation>;
export type DeleteFormMutationResult = Apollo.MutationResult<DeleteFormMutation>;
export const StarFormDocument = /*#__PURE__*/ gql`
    mutation StarForm($formId: String!, $favorite: Boolean!) {
  updateOneForm(where: {id: $formId}, data: {favorite: {set: $favorite}}) {
    id
    favorite
  }
}
    `;
export type StarFormMutationFn = Apollo.MutationFunction<StarFormMutation, StarFormMutationVariables>;

/**
 * __useStarFormMutation__
 *
 * To run a mutation, you first call `useStarFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStarFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [starFormMutation, { data, loading, error }] = useStarFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      favorite: // value for 'favorite'
 *   },
 * });
 */
export function useStarFormMutation(baseOptions?: Apollo.MutationHookOptions<StarFormMutation, StarFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StarFormMutation, StarFormMutationVariables>(StarFormDocument, options);
      }
export type StarFormMutationHookResult = ReturnType<typeof useStarFormMutation>;
export type StarFormMutationResult = Apollo.MutationResult<StarFormMutation>;
export const MyFormsDocument = /*#__PURE__*/ gql`
    query MyForms($orderBy: [FormOrderByWithRelationInput]) {
  findManyForm(orderBy: $orderBy) {
    id
    name
    favorite
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMyFormsQuery__
 *
 * To run a query within a React component, call `useMyFormsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFormsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFormsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useMyFormsQuery(baseOptions?: Apollo.QueryHookOptions<MyFormsQuery, MyFormsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyFormsQuery, MyFormsQueryVariables>(MyFormsDocument, options);
      }
export function useMyFormsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyFormsQuery, MyFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyFormsQuery, MyFormsQueryVariables>(MyFormsDocument, options);
        }
export function useMyFormsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MyFormsQuery, MyFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyFormsQuery, MyFormsQueryVariables>(MyFormsDocument, options);
        }
export type MyFormsQueryHookResult = ReturnType<typeof useMyFormsQuery>;
export type MyFormsLazyQueryHookResult = ReturnType<typeof useMyFormsLazyQuery>;
export type MyFormsSuspenseQueryHookResult = ReturnType<typeof useMyFormsSuspenseQuery>;
export type MyFormsQueryResult = Apollo.QueryResult<MyFormsQuery, MyFormsQueryVariables>;
export const FolderFormsDocument = /*#__PURE__*/ gql`
    query FolderForms($folderId: String!) {
  findManyForm(where: {folderId: {equals: $folderId}}) {
    id
    name
    favorite
    folderId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useFolderFormsQuery__
 *
 * To run a query within a React component, call `useFolderFormsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFolderFormsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFolderFormsQuery({
 *   variables: {
 *      folderId: // value for 'folderId'
 *   },
 * });
 */
export function useFolderFormsQuery(baseOptions: Apollo.QueryHookOptions<FolderFormsQuery, FolderFormsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FolderFormsQuery, FolderFormsQueryVariables>(FolderFormsDocument, options);
      }
export function useFolderFormsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FolderFormsQuery, FolderFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FolderFormsQuery, FolderFormsQueryVariables>(FolderFormsDocument, options);
        }
export function useFolderFormsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FolderFormsQuery, FolderFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FolderFormsQuery, FolderFormsQueryVariables>(FolderFormsDocument, options);
        }
export type FolderFormsQueryHookResult = ReturnType<typeof useFolderFormsQuery>;
export type FolderFormsLazyQueryHookResult = ReturnType<typeof useFolderFormsLazyQuery>;
export type FolderFormsSuspenseQueryHookResult = ReturnType<typeof useFolderFormsSuspenseQuery>;
export type FolderFormsQueryResult = Apollo.QueryResult<FolderFormsQuery, FolderFormsQueryVariables>;
export const DefaultFolderFormsDocument = /*#__PURE__*/ gql`
    query DefaultFolderForms {
  findManyForm(where: {folderId: null}) {
    id
    name
    favorite
    folderId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useDefaultFolderFormsQuery__
 *
 * To run a query within a React component, call `useDefaultFolderFormsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDefaultFolderFormsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDefaultFolderFormsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDefaultFolderFormsQuery(baseOptions?: Apollo.QueryHookOptions<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>(DefaultFolderFormsDocument, options);
      }
export function useDefaultFolderFormsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>(DefaultFolderFormsDocument, options);
        }
export function useDefaultFolderFormsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>(DefaultFolderFormsDocument, options);
        }
export type DefaultFolderFormsQueryHookResult = ReturnType<typeof useDefaultFolderFormsQuery>;
export type DefaultFolderFormsLazyQueryHookResult = ReturnType<typeof useDefaultFolderFormsLazyQuery>;
export type DefaultFolderFormsSuspenseQueryHookResult = ReturnType<typeof useDefaultFolderFormsSuspenseQuery>;
export type DefaultFolderFormsQueryResult = Apollo.QueryResult<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>;
export const FormDataDocument = /*#__PURE__*/ gql`
    query FormData($formId: String!) {
  findFirstForm(where: {id: {equals: $formId}}) {
    id
    name
    favorite
    style
    items {
      id
      formId
      name
      order
      required
      items
      image
      type
    }
  }
}
    `;

/**
 * __useFormDataQuery__
 *
 * To run a query within a React component, call `useFormDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormDataQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useFormDataQuery(baseOptions: Apollo.QueryHookOptions<FormDataQuery, FormDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormDataQuery, FormDataQueryVariables>(FormDataDocument, options);
      }
export function useFormDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormDataQuery, FormDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormDataQuery, FormDataQueryVariables>(FormDataDocument, options);
        }
export function useFormDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FormDataQuery, FormDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FormDataQuery, FormDataQueryVariables>(FormDataDocument, options);
        }
export type FormDataQueryHookResult = ReturnType<typeof useFormDataQuery>;
export type FormDataLazyQueryHookResult = ReturnType<typeof useFormDataLazyQuery>;
export type FormDataSuspenseQueryHookResult = ReturnType<typeof useFormDataSuspenseQuery>;
export type FormDataQueryResult = Apollo.QueryResult<FormDataQuery, FormDataQueryVariables>;
export const UploadItemImageDocument = /*#__PURE__*/ gql`
    mutation UploadItemImage($formId: String!, $itemId: String!, $base64: String!) {
  uploadItemImage(formId: $formId, itemId: $itemId, base64: $base64) {
    success
  }
}
    `;
export type UploadItemImageMutationFn = Apollo.MutationFunction<UploadItemImageMutation, UploadItemImageMutationVariables>;

/**
 * __useUploadItemImageMutation__
 *
 * To run a mutation, you first call `useUploadItemImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadItemImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadItemImageMutation, { data, loading, error }] = useUploadItemImageMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      itemId: // value for 'itemId'
 *      base64: // value for 'base64'
 *   },
 * });
 */
export function useUploadItemImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadItemImageMutation, UploadItemImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadItemImageMutation, UploadItemImageMutationVariables>(UploadItemImageDocument, options);
      }
export type UploadItemImageMutationHookResult = ReturnType<typeof useUploadItemImageMutation>;
export type UploadItemImageMutationResult = Apollo.MutationResult<UploadItemImageMutation>;
export const UploadHeaderImageDocument = /*#__PURE__*/ gql`
    mutation UploadHeaderImage($formId: String!, $base64: String!) {
  uploaderHeaderImage(formId: $formId, base64: $base64) {
    success
  }
}
    `;
export type UploadHeaderImageMutationFn = Apollo.MutationFunction<UploadHeaderImageMutation, UploadHeaderImageMutationVariables>;

/**
 * __useUploadHeaderImageMutation__
 *
 * To run a mutation, you first call `useUploadHeaderImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadHeaderImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadHeaderImageMutation, { data, loading, error }] = useUploadHeaderImageMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      base64: // value for 'base64'
 *   },
 * });
 */
export function useUploadHeaderImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadHeaderImageMutation, UploadHeaderImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadHeaderImageMutation, UploadHeaderImageMutationVariables>(UploadHeaderImageDocument, options);
      }
export type UploadHeaderImageMutationHookResult = ReturnType<typeof useUploadHeaderImageMutation>;
export type UploadHeaderImageMutationResult = Apollo.MutationResult<UploadHeaderImageMutation>;
export const UpdateFormDocument = /*#__PURE__*/ gql`
    mutation UpdateForm($data: FormUpdateInput!, $where: FormWhereUniqueInput!) {
  updateOneForm(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateFormMutationFn = Apollo.MutationFunction<UpdateFormMutation, UpdateFormMutationVariables>;

/**
 * __useUpdateFormMutation__
 *
 * To run a mutation, you first call `useUpdateFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFormMutation, { data, loading, error }] = useUpdateFormMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateFormMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFormMutation, UpdateFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFormMutation, UpdateFormMutationVariables>(UpdateFormDocument, options);
      }
export type UpdateFormMutationHookResult = ReturnType<typeof useUpdateFormMutation>;
export type UpdateFormMutationResult = Apollo.MutationResult<UpdateFormMutation>;
export const SubmitFormDocument = /*#__PURE__*/ gql`
    mutation SubmitForm($formId: String!, $answers: [AnswerInput!]!) {
  submitForm(formId: $formId, answers: $answers) {
    id
  }
}
    `;
export type SubmitFormMutationFn = Apollo.MutationFunction<SubmitFormMutation, SubmitFormMutationVariables>;

/**
 * __useSubmitFormMutation__
 *
 * To run a mutation, you first call `useSubmitFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitFormMutation, { data, loading, error }] = useSubmitFormMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      answers: // value for 'answers'
 *   },
 * });
 */
export function useSubmitFormMutation(baseOptions?: Apollo.MutationHookOptions<SubmitFormMutation, SubmitFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitFormMutation, SubmitFormMutationVariables>(SubmitFormDocument, options);
      }
export type SubmitFormMutationHookResult = ReturnType<typeof useSubmitFormMutation>;
export type SubmitFormMutationResult = Apollo.MutationResult<SubmitFormMutation>;