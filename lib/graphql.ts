import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
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
  jsonb: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
}

/** columns and relationships of "Answer" */
export interface Answer {
  /** An object relationship */
  FormItem?: Maybe<FormItem>;
  formItemId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  responseId?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
}

/** aggregated selection of "Answer" */
export interface Answer_Aggregate {
  aggregate?: Maybe<Answer_Aggregate_Fields>;
  nodes: Array<Answer>;
}

export interface Answer_Aggregate_Bool_Exp {
  count?: InputMaybe<Answer_Aggregate_Bool_Exp_Count>;
}

export interface Answer_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Answer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Answer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "Answer" */
export interface Answer_Aggregate_Fields {
  count: Scalars['Int']['output'];
  max?: Maybe<Answer_Max_Fields>;
  min?: Maybe<Answer_Min_Fields>;
}


/** aggregate fields of "Answer" */
export interface Answer_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Answer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "Answer" */
export interface Answer_Aggregate_Order_By {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Answer_Max_Order_By>;
  min?: InputMaybe<Answer_Min_Order_By>;
}

/** input type for inserting array relation for remote table "Answer" */
export interface Answer_Arr_Rel_Insert_Input {
  data: Array<Answer_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Answer_On_Conflict>;
}

/** Boolean expression to filter rows from the table "Answer". All fields are combined with a logical 'AND'. */
export interface Answer_Bool_Exp {
  FormItem?: InputMaybe<FormItem_Bool_Exp>;
  _and?: InputMaybe<Array<Answer_Bool_Exp>>;
  _not?: InputMaybe<Answer_Bool_Exp>;
  _or?: InputMaybe<Array<Answer_Bool_Exp>>;
  formItemId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  responseId?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "Answer" */
export enum Answer_Constraint {
  /** unique or primary key constraint on columns "id" */
  AnswerPkey = 'Answer_pkey'
}

/** input type for inserting data into table "Answer" */
export interface Answer_Insert_Input {
  FormItem?: InputMaybe<FormItem_Obj_Rel_Insert_Input>;
  formItemId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  responseId?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate max on columns */
export interface Answer_Max_Fields {
  formItemId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  responseId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
}

/** order by max() on columns of table "Answer" */
export interface Answer_Max_Order_By {
  formItemId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  responseId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Answer_Min_Fields {
  formItemId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  responseId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
}

/** order by min() on columns of table "Answer" */
export interface Answer_Min_Order_By {
  formItemId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  responseId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "Answer" */
export interface Answer_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Answer>;
}

/** on_conflict condition type for table "Answer" */
export interface Answer_On_Conflict {
  constraint: Answer_Constraint;
  update_columns?: Array<Answer_Update_Column>;
  where?: InputMaybe<Answer_Bool_Exp>;
}

/** Ordering options when selecting data from "Answer". */
export interface Answer_Order_By {
  FormItem?: InputMaybe<FormItem_Order_By>;
  formItemId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  responseId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
}

/** primary key columns input for table: Answer */
export interface Answer_Pk_Columns_Input {
  id: Scalars['String']['input'];
}

/** select columns of table "Answer" */
export enum Answer_Select_Column {
  /** column name */
  FormItemId = 'formItemId',
  /** column name */
  Id = 'id',
  /** column name */
  ResponseId = 'responseId',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Answer" */
export interface Answer_Set_Input {
  formItemId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  responseId?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

/** Streaming cursor of the table "Answer" */
export interface Answer_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Answer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Answer_Stream_Cursor_Value_Input {
  formItemId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  responseId?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

/** update columns of table "Answer" */
export enum Answer_Update_Column {
  /** column name */
  FormItemId = 'formItemId',
  /** column name */
  Id = 'id',
  /** column name */
  ResponseId = 'responseId',
  /** column name */
  Value = 'value'
}

export interface Answer_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Answer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Answer_Bool_Exp;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_Comparison_Exp {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
}

/** columns and relationships of "Folder" */
export interface Folder {
  /** An array relationship */
  Forms: Array<Form>;
  /** An aggregate relationship */
  Forms_aggregate: Form_Aggregate;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['String']['output'];
}


/** columns and relationships of "Folder" */
export interface FolderFormsArgs {
  distinct_on?: InputMaybe<Array<Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Order_By>>;
  where?: InputMaybe<Form_Bool_Exp>;
}


/** columns and relationships of "Folder" */
export interface FolderForms_AggregateArgs {
  distinct_on?: InputMaybe<Array<Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Order_By>>;
  where?: InputMaybe<Form_Bool_Exp>;
}

/** aggregated selection of "Folder" */
export interface Folder_Aggregate {
  aggregate?: Maybe<Folder_Aggregate_Fields>;
  nodes: Array<Folder>;
}

/** aggregate fields of "Folder" */
export interface Folder_Aggregate_Fields {
  count: Scalars['Int']['output'];
  max?: Maybe<Folder_Max_Fields>;
  min?: Maybe<Folder_Min_Fields>;
}


/** aggregate fields of "Folder" */
export interface Folder_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Folder_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Boolean expression to filter rows from the table "Folder". All fields are combined with a logical 'AND'. */
export interface Folder_Bool_Exp {
  Forms?: InputMaybe<Form_Bool_Exp>;
  Forms_aggregate?: InputMaybe<Form_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Folder_Bool_Exp>>;
  _not?: InputMaybe<Folder_Bool_Exp>;
  _or?: InputMaybe<Array<Folder_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ownerId?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "Folder" */
export enum Folder_Constraint {
  /** unique or primary key constraint on columns "ownerId", "name" */
  FolderOwnerIdNameKey = 'Folder_ownerId_name_key',
  /** unique or primary key constraint on columns "id" */
  FolderPkey = 'Folder_pkey'
}

/** input type for inserting data into table "Folder" */
export interface Folder_Insert_Input {
  Forms?: InputMaybe<Form_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate max on columns */
export interface Folder_Max_Fields {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
}

/** aggregate min on columns */
export interface Folder_Min_Fields {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
}

/** response of any mutation on the table "Folder" */
export interface Folder_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Folder>;
}

/** input type for inserting object relation for remote table "Folder" */
export interface Folder_Obj_Rel_Insert_Input {
  data: Folder_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Folder_On_Conflict>;
}

/** on_conflict condition type for table "Folder" */
export interface Folder_On_Conflict {
  constraint: Folder_Constraint;
  update_columns?: Array<Folder_Update_Column>;
  where?: InputMaybe<Folder_Bool_Exp>;
}

/** Ordering options when selecting data from "Folder". */
export interface Folder_Order_By {
  Forms_aggregate?: InputMaybe<Form_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ownerId?: InputMaybe<Order_By>;
}

/** primary key columns input for table: Folder */
export interface Folder_Pk_Columns_Input {
  id: Scalars['String']['input'];
}

/** select columns of table "Folder" */
export enum Folder_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'ownerId'
}

/** input type for updating data in table "Folder" */
export interface Folder_Set_Input {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
}

/** Streaming cursor of the table "Folder" */
export interface Folder_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Folder_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Folder_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
}

/** update columns of table "Folder" */
export enum Folder_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'ownerId'
}

export interface Folder_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Folder_Set_Input>;
  /** filter the rows which have to be updated */
  where: Folder_Bool_Exp;
}

/** columns and relationships of "Form" */
export interface Form {
  /** An object relationship */
  Folder?: Maybe<Folder>;
  /** An array relationship */
  FormItems: Array<FormItem>;
  /** An aggregate relationship */
  FormItems_aggregate: FormItem_Aggregate;
  createdAt: Scalars['timestamp']['output'];
  favorite: Scalars['Boolean']['output'];
  folderId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  ownerId: Scalars['String']['output'];
  responses: Scalars['Int']['output'];
  style?: Maybe<Scalars['jsonb']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamp']['output'];
}


/** columns and relationships of "Form" */
export interface FormFormItemsArgs {
  distinct_on?: InputMaybe<Array<FormItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItem_Order_By>>;
  where?: InputMaybe<FormItem_Bool_Exp>;
}


/** columns and relationships of "Form" */
export interface FormFormItems_AggregateArgs {
  distinct_on?: InputMaybe<Array<FormItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItem_Order_By>>;
  where?: InputMaybe<FormItem_Bool_Exp>;
}


/** columns and relationships of "Form" */
export interface FormStyleArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "FormItem" */
export interface FormItem {
  /** An array relationship */
  Answers: Array<Answer>;
  /** An aggregate relationship */
  Answers_aggregate: Answer_Aggregate;
  /** An object relationship */
  Form: Form;
  formId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['jsonb']['output']>;
  items?: Maybe<Scalars['jsonb']['output']>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  required: Scalars['Boolean']['output'];
  section: Scalars['Int']['output'];
  type?: Maybe<FormItemType_Enum>;
}


/** columns and relationships of "FormItem" */
export interface FormItemAnswersArgs {
  distinct_on?: InputMaybe<Array<Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answer_Order_By>>;
  where?: InputMaybe<Answer_Bool_Exp>;
}


/** columns and relationships of "FormItem" */
export interface FormItemAnswers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answer_Order_By>>;
  where?: InputMaybe<Answer_Bool_Exp>;
}


/** columns and relationships of "FormItem" */
export interface FormItemImageArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}


/** columns and relationships of "FormItem" */
export interface FormItemItemsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** extra settings for form items */
export interface FormItemMeta {
  /** An object relationship */
  FormItem: FormItem;
  formItemId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
}

/** aggregated selection of "FormItemMeta" */
export interface FormItemMeta_Aggregate {
  aggregate?: Maybe<FormItemMeta_Aggregate_Fields>;
  nodes: Array<FormItemMeta>;
}

/** aggregate fields of "FormItemMeta" */
export interface FormItemMeta_Aggregate_Fields {
  avg?: Maybe<FormItemMeta_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<FormItemMeta_Max_Fields>;
  min?: Maybe<FormItemMeta_Min_Fields>;
  stddev?: Maybe<FormItemMeta_Stddev_Fields>;
  stddev_pop?: Maybe<FormItemMeta_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<FormItemMeta_Stddev_Samp_Fields>;
  sum?: Maybe<FormItemMeta_Sum_Fields>;
  var_pop?: Maybe<FormItemMeta_Var_Pop_Fields>;
  var_samp?: Maybe<FormItemMeta_Var_Samp_Fields>;
  variance?: Maybe<FormItemMeta_Variance_Fields>;
}


/** aggregate fields of "FormItemMeta" */
export interface FormItemMeta_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<FormItemMeta_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** aggregate avg on columns */
export interface FormItemMeta_Avg_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** Boolean expression to filter rows from the table "FormItemMeta". All fields are combined with a logical 'AND'. */
export interface FormItemMeta_Bool_Exp {
  FormItem?: InputMaybe<FormItem_Bool_Exp>;
  _and?: InputMaybe<Array<FormItemMeta_Bool_Exp>>;
  _not?: InputMaybe<FormItemMeta_Bool_Exp>;
  _or?: InputMaybe<Array<FormItemMeta_Bool_Exp>>;
  formItemId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "FormItemMeta" */
export enum FormItemMeta_Constraint {
  /** unique or primary key constraint on columns "id" */
  FormItemMetaPkey = 'FormItemMeta_pkey'
}

/** input type for incrementing numeric columns in table "FormItemMeta" */
export interface FormItemMeta_Inc_Input {
  id?: InputMaybe<Scalars['Int']['input']>;
}

/** input type for inserting data into table "FormItemMeta" */
export interface FormItemMeta_Insert_Input {
  FormItem?: InputMaybe<FormItem_Obj_Rel_Insert_Input>;
  formItemId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate max on columns */
export interface FormItemMeta_Max_Fields {
  formItemId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
}

/** aggregate min on columns */
export interface FormItemMeta_Min_Fields {
  formItemId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
}

/** response of any mutation on the table "FormItemMeta" */
export interface FormItemMeta_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<FormItemMeta>;
}

/** on_conflict condition type for table "FormItemMeta" */
export interface FormItemMeta_On_Conflict {
  constraint: FormItemMeta_Constraint;
  update_columns?: Array<FormItemMeta_Update_Column>;
  where?: InputMaybe<FormItemMeta_Bool_Exp>;
}

/** Ordering options when selecting data from "FormItemMeta". */
export interface FormItemMeta_Order_By {
  FormItem?: InputMaybe<FormItem_Order_By>;
  formItemId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
}

/** primary key columns input for table: FormItemMeta */
export interface FormItemMeta_Pk_Columns_Input {
  id: Scalars['Int']['input'];
}

/** select columns of table "FormItemMeta" */
export enum FormItemMeta_Select_Column {
  /** column name */
  FormItemId = 'formItemId',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "FormItemMeta" */
export interface FormItemMeta_Set_Input {
  formItemId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate stddev on columns */
export interface FormItemMeta_Stddev_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_pop on columns */
export interface FormItemMeta_Stddev_Pop_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_samp on columns */
export interface FormItemMeta_Stddev_Samp_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** Streaming cursor of the table "FormItemMeta" */
export interface FormItemMeta_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: FormItemMeta_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface FormItemMeta_Stream_Cursor_Value_Input {
  formItemId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate sum on columns */
export interface FormItemMeta_Sum_Fields {
  id?: Maybe<Scalars['Int']['output']>;
}

/** update columns of table "FormItemMeta" */
export enum FormItemMeta_Update_Column {
  /** column name */
  FormItemId = 'formItemId',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

export interface FormItemMeta_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FormItemMeta_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FormItemMeta_Set_Input>;
  /** filter the rows which have to be updated */
  where: FormItemMeta_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface FormItemMeta_Var_Pop_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate var_samp on columns */
export interface FormItemMeta_Var_Samp_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate variance on columns */
export interface FormItemMeta_Variance_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** enum for form item types */
export interface FormItemType {
  type: Scalars['String']['output'];
}

/** aggregated selection of "FormItemType" */
export interface FormItemType_Aggregate {
  aggregate?: Maybe<FormItemType_Aggregate_Fields>;
  nodes: Array<FormItemType>;
}

/** aggregate fields of "FormItemType" */
export interface FormItemType_Aggregate_Fields {
  count: Scalars['Int']['output'];
  max?: Maybe<FormItemType_Max_Fields>;
  min?: Maybe<FormItemType_Min_Fields>;
}


/** aggregate fields of "FormItemType" */
export interface FormItemType_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<FormItemType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Boolean expression to filter rows from the table "FormItemType". All fields are combined with a logical 'AND'. */
export interface FormItemType_Bool_Exp {
  _and?: InputMaybe<Array<FormItemType_Bool_Exp>>;
  _not?: InputMaybe<FormItemType_Bool_Exp>;
  _or?: InputMaybe<Array<FormItemType_Bool_Exp>>;
  type?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "FormItemType" */
export enum FormItemType_Constraint {
  /** unique or primary key constraint on columns "type" */
  FormItemTypePkey = 'FormItemType_pkey'
}

export enum FormItemType_Enum {
  Date = 'DATE',
  Dropdown = 'DROPDOWN',
  LinearScale = 'LINEAR_SCALE',
  Long = 'LONG',
  MultipleChoice = 'MULTIPLE_CHOICE',
  MultipleChoiceGrid = 'MULTIPLE_CHOICE_GRID',
  PhoneNumber = 'PHONE_NUMBER',
  Rating = 'RATING',
  Section = 'SECTION',
  Short = 'SHORT',
  SingleChoice = 'SINGLE_CHOICE',
  SingleChoiceGrid = 'SINGLE_CHOICE_GRID',
  Text = 'TEXT'
}

/** Boolean expression to compare columns of type "FormItemType_enum". All fields are combined with logical 'AND'. */
export interface FormItemType_Enum_Comparison_Exp {
  _eq?: InputMaybe<FormItemType_Enum>;
  _in?: InputMaybe<Array<FormItemType_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<FormItemType_Enum>;
  _nin?: InputMaybe<Array<FormItemType_Enum>>;
}

/** input type for inserting data into table "FormItemType" */
export interface FormItemType_Insert_Input {
  type?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate max on columns */
export interface FormItemType_Max_Fields {
  type?: Maybe<Scalars['String']['output']>;
}

/** aggregate min on columns */
export interface FormItemType_Min_Fields {
  type?: Maybe<Scalars['String']['output']>;
}

/** response of any mutation on the table "FormItemType" */
export interface FormItemType_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<FormItemType>;
}

/** on_conflict condition type for table "FormItemType" */
export interface FormItemType_On_Conflict {
  constraint: FormItemType_Constraint;
  update_columns?: Array<FormItemType_Update_Column>;
  where?: InputMaybe<FormItemType_Bool_Exp>;
}

/** Ordering options when selecting data from "FormItemType". */
export interface FormItemType_Order_By {
  type?: InputMaybe<Order_By>;
}

/** primary key columns input for table: FormItemType */
export interface FormItemType_Pk_Columns_Input {
  type: Scalars['String']['input'];
}

/** select columns of table "FormItemType" */
export enum FormItemType_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "FormItemType" */
export interface FormItemType_Set_Input {
  type?: InputMaybe<Scalars['String']['input']>;
}

/** Streaming cursor of the table "FormItemType" */
export interface FormItemType_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: FormItemType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface FormItemType_Stream_Cursor_Value_Input {
  type?: InputMaybe<Scalars['String']['input']>;
}

/** update columns of table "FormItemType" */
export enum FormItemType_Update_Column {
  /** column name */
  Type = 'type'
}

export interface FormItemType_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FormItemType_Set_Input>;
  /** filter the rows which have to be updated */
  where: FormItemType_Bool_Exp;
}

/** aggregated selection of "FormItem" */
export interface FormItem_Aggregate {
  aggregate?: Maybe<FormItem_Aggregate_Fields>;
  nodes: Array<FormItem>;
}

export interface FormItem_Aggregate_Bool_Exp {
  bool_and?: InputMaybe<FormItem_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<FormItem_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<FormItem_Aggregate_Bool_Exp_Count>;
}

export interface FormItem_Aggregate_Bool_Exp_Bool_And {
  arguments: FormItem_Select_Column_FormItem_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FormItem_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface FormItem_Aggregate_Bool_Exp_Bool_Or {
  arguments: FormItem_Select_Column_FormItem_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FormItem_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface FormItem_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<FormItem_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FormItem_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "FormItem" */
export interface FormItem_Aggregate_Fields {
  avg?: Maybe<FormItem_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<FormItem_Max_Fields>;
  min?: Maybe<FormItem_Min_Fields>;
  stddev?: Maybe<FormItem_Stddev_Fields>;
  stddev_pop?: Maybe<FormItem_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<FormItem_Stddev_Samp_Fields>;
  sum?: Maybe<FormItem_Sum_Fields>;
  var_pop?: Maybe<FormItem_Var_Pop_Fields>;
  var_samp?: Maybe<FormItem_Var_Samp_Fields>;
  variance?: Maybe<FormItem_Variance_Fields>;
}


/** aggregate fields of "FormItem" */
export interface FormItem_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<FormItem_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "FormItem" */
export interface FormItem_Aggregate_Order_By {
  avg?: InputMaybe<FormItem_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FormItem_Max_Order_By>;
  min?: InputMaybe<FormItem_Min_Order_By>;
  stddev?: InputMaybe<FormItem_Stddev_Order_By>;
  stddev_pop?: InputMaybe<FormItem_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<FormItem_Stddev_Samp_Order_By>;
  sum?: InputMaybe<FormItem_Sum_Order_By>;
  var_pop?: InputMaybe<FormItem_Var_Pop_Order_By>;
  var_samp?: InputMaybe<FormItem_Var_Samp_Order_By>;
  variance?: InputMaybe<FormItem_Variance_Order_By>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface FormItem_Append_Input {
  image?: InputMaybe<Scalars['jsonb']['input']>;
  items?: InputMaybe<Scalars['jsonb']['input']>;
}

/** input type for inserting array relation for remote table "FormItem" */
export interface FormItem_Arr_Rel_Insert_Input {
  data: Array<FormItem_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FormItem_On_Conflict>;
}

/** aggregate avg on columns */
export interface FormItem_Avg_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  section?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "FormItem" */
export interface FormItem_Avg_Order_By {
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "FormItem". All fields are combined with a logical 'AND'. */
export interface FormItem_Bool_Exp {
  Answers?: InputMaybe<Answer_Bool_Exp>;
  Answers_aggregate?: InputMaybe<Answer_Aggregate_Bool_Exp>;
  Form?: InputMaybe<Form_Bool_Exp>;
  _and?: InputMaybe<Array<FormItem_Bool_Exp>>;
  _not?: InputMaybe<FormItem_Bool_Exp>;
  _or?: InputMaybe<Array<FormItem_Bool_Exp>>;
  formId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<Jsonb_Comparison_Exp>;
  items?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  required?: InputMaybe<Boolean_Comparison_Exp>;
  section?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<FormItemType_Enum_Comparison_Exp>;
}

/** unique or primary key constraints on table "FormItem" */
export enum FormItem_Constraint {
  /** unique or primary key constraint on columns "id" */
  FormItemPkey = 'FormItem_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface FormItem_Delete_At_Path_Input {
  image?: InputMaybe<Array<Scalars['String']['input']>>;
  items?: InputMaybe<Array<Scalars['String']['input']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface FormItem_Delete_Elem_Input {
  image?: InputMaybe<Scalars['Int']['input']>;
  items?: InputMaybe<Scalars['Int']['input']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface FormItem_Delete_Key_Input {
  image?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Scalars['String']['input']>;
}

/** input type for incrementing numeric columns in table "FormItem" */
export interface FormItem_Inc_Input {
  order?: InputMaybe<Scalars['Int']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
}

/** input type for inserting data into table "FormItem" */
export interface FormItem_Insert_Input {
  Answers?: InputMaybe<Answer_Arr_Rel_Insert_Input>;
  Form?: InputMaybe<Form_Obj_Rel_Insert_Input>;
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['jsonb']['input']>;
  items?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<FormItemType_Enum>;
}

/** aggregate max on columns */
export interface FormItem_Max_Fields {
  formId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "FormItem" */
export interface FormItem_Max_Order_By {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface FormItem_Min_Fields {
  formId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "FormItem" */
export interface FormItem_Min_Order_By {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "FormItem" */
export interface FormItem_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<FormItem>;
}

/** input type for inserting object relation for remote table "FormItem" */
export interface FormItem_Obj_Rel_Insert_Input {
  data: FormItem_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<FormItem_On_Conflict>;
}

/** on_conflict condition type for table "FormItem" */
export interface FormItem_On_Conflict {
  constraint: FormItem_Constraint;
  update_columns?: Array<FormItem_Update_Column>;
  where?: InputMaybe<FormItem_Bool_Exp>;
}

/** Ordering options when selecting data from "FormItem". */
export interface FormItem_Order_By {
  Answers_aggregate?: InputMaybe<Answer_Aggregate_Order_By>;
  Form?: InputMaybe<Form_Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  items?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  required?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
}

/** primary key columns input for table: FormItem */
export interface FormItem_Pk_Columns_Input {
  id: Scalars['String']['input'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface FormItem_Prepend_Input {
  image?: InputMaybe<Scalars['jsonb']['input']>;
  items?: InputMaybe<Scalars['jsonb']['input']>;
}

/** select columns of table "FormItem" */
export enum FormItem_Select_Column {
  /** column name */
  FormId = 'formId',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Items = 'items',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  Required = 'required',
  /** column name */
  Section = 'section',
  /** column name */
  Type = 'type'
}

/** select "FormItem_aggregate_bool_exp_bool_and_arguments_columns" columns of table "FormItem" */
export enum FormItem_Select_Column_FormItem_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Required = 'required'
}

/** select "FormItem_aggregate_bool_exp_bool_or_arguments_columns" columns of table "FormItem" */
export enum FormItem_Select_Column_FormItem_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Required = 'required'
}

/** input type for updating data in table "FormItem" */
export interface FormItem_Set_Input {
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['jsonb']['input']>;
  items?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<FormItemType_Enum>;
}

/** aggregate stddev on columns */
export interface FormItem_Stddev_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  section?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "FormItem" */
export interface FormItem_Stddev_Order_By {
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface FormItem_Stddev_Pop_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  section?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "FormItem" */
export interface FormItem_Stddev_Pop_Order_By {
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface FormItem_Stddev_Samp_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  section?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "FormItem" */
export interface FormItem_Stddev_Samp_Order_By {
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "FormItem" */
export interface FormItem_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: FormItem_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface FormItem_Stream_Cursor_Value_Input {
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['jsonb']['input']>;
  items?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  section?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<FormItemType_Enum>;
}

/** aggregate sum on columns */
export interface FormItem_Sum_Fields {
  order?: Maybe<Scalars['Int']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "FormItem" */
export interface FormItem_Sum_Order_By {
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** update columns of table "FormItem" */
export enum FormItem_Update_Column {
  /** column name */
  FormId = 'formId',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Items = 'items',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  Required = 'required',
  /** column name */
  Section = 'section',
  /** column name */
  Type = 'type'
}

export interface FormItem_Updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<FormItem_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<FormItem_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<FormItem_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<FormItem_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FormItem_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<FormItem_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FormItem_Set_Input>;
  /** filter the rows which have to be updated */
  where: FormItem_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface FormItem_Var_Pop_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  section?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "FormItem" */
export interface FormItem_Var_Pop_Order_By {
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface FormItem_Var_Samp_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  section?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "FormItem" */
export interface FormItem_Var_Samp_Order_By {
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface FormItem_Variance_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  section?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "FormItem" */
export interface FormItem_Variance_Order_By {
  order?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
}

/** aggregated selection of "Form" */
export interface Form_Aggregate {
  aggregate?: Maybe<Form_Aggregate_Fields>;
  nodes: Array<Form>;
}

export interface Form_Aggregate_Bool_Exp {
  bool_and?: InputMaybe<Form_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Form_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Form_Aggregate_Bool_Exp_Count>;
}

export interface Form_Aggregate_Bool_Exp_Bool_And {
  arguments: Form_Select_Column_Form_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Form_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Form_Aggregate_Bool_Exp_Bool_Or {
  arguments: Form_Select_Column_Form_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Form_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Form_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Form_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Form_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "Form" */
export interface Form_Aggregate_Fields {
  avg?: Maybe<Form_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Form_Max_Fields>;
  min?: Maybe<Form_Min_Fields>;
  stddev?: Maybe<Form_Stddev_Fields>;
  stddev_pop?: Maybe<Form_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Form_Stddev_Samp_Fields>;
  sum?: Maybe<Form_Sum_Fields>;
  var_pop?: Maybe<Form_Var_Pop_Fields>;
  var_samp?: Maybe<Form_Var_Samp_Fields>;
  variance?: Maybe<Form_Variance_Fields>;
}


/** aggregate fields of "Form" */
export interface Form_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Form_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "Form" */
export interface Form_Aggregate_Order_By {
  avg?: InputMaybe<Form_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Form_Max_Order_By>;
  min?: InputMaybe<Form_Min_Order_By>;
  stddev?: InputMaybe<Form_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Form_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Form_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Form_Sum_Order_By>;
  var_pop?: InputMaybe<Form_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Form_Var_Samp_Order_By>;
  variance?: InputMaybe<Form_Variance_Order_By>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface Form_Append_Input {
  style?: InputMaybe<Scalars['jsonb']['input']>;
}

/** input type for inserting array relation for remote table "Form" */
export interface Form_Arr_Rel_Insert_Input {
  data: Array<Form_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_On_Conflict>;
}

/** aggregate avg on columns */
export interface Form_Avg_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  responses?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "Form" */
export interface Form_Avg_Order_By {
  order?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "Form". All fields are combined with a logical 'AND'. */
export interface Form_Bool_Exp {
  Folder?: InputMaybe<Folder_Bool_Exp>;
  FormItems?: InputMaybe<FormItem_Bool_Exp>;
  FormItems_aggregate?: InputMaybe<FormItem_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Form_Bool_Exp>>;
  _not?: InputMaybe<Form_Bool_Exp>;
  _or?: InputMaybe<Array<Form_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  favorite?: InputMaybe<Boolean_Comparison_Exp>;
  folderId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  ownerId?: InputMaybe<String_Comparison_Exp>;
  responses?: InputMaybe<Int_Comparison_Exp>;
  style?: InputMaybe<Jsonb_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
}

/** unique or primary key constraints on table "Form" */
export enum Form_Constraint {
  /** unique or primary key constraint on columns "ownerId", "name" */
  FormOwnerIdNameKey = 'Form_ownerId_name_key',
  /** unique or primary key constraint on columns "id" */
  FormPkey = 'Form_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface Form_Delete_At_Path_Input {
  style?: InputMaybe<Array<Scalars['String']['input']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface Form_Delete_Elem_Input {
  style?: InputMaybe<Scalars['Int']['input']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface Form_Delete_Key_Input {
  style?: InputMaybe<Scalars['String']['input']>;
}

/** input type for incrementing numeric columns in table "Form" */
export interface Form_Inc_Input {
  order?: InputMaybe<Scalars['Int']['input']>;
  responses?: InputMaybe<Scalars['Int']['input']>;
}

/** input type for inserting data into table "Form" */
export interface Form_Insert_Input {
  Folder?: InputMaybe<Folder_Obj_Rel_Insert_Input>;
  FormItems?: InputMaybe<FormItem_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['jsonb']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
}

/** aggregate max on columns */
export interface Form_Max_Fields {
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  folderId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  responses?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
}

/** order by max() on columns of table "Form" */
export interface Form_Max_Order_By {
  createdAt?: InputMaybe<Order_By>;
  folderId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  ownerId?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Form_Min_Fields {
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  folderId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  responses?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
}

/** order by min() on columns of table "Form" */
export interface Form_Min_Order_By {
  createdAt?: InputMaybe<Order_By>;
  folderId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  ownerId?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "Form" */
export interface Form_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Form>;
}

/** input type for inserting object relation for remote table "Form" */
export interface Form_Obj_Rel_Insert_Input {
  data: Form_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_On_Conflict>;
}

/** on_conflict condition type for table "Form" */
export interface Form_On_Conflict {
  constraint: Form_Constraint;
  update_columns?: Array<Form_Update_Column>;
  where?: InputMaybe<Form_Bool_Exp>;
}

/** Ordering options when selecting data from "Form". */
export interface Form_Order_By {
  Folder?: InputMaybe<Folder_Order_By>;
  FormItems_aggregate?: InputMaybe<FormItem_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  favorite?: InputMaybe<Order_By>;
  folderId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  ownerId?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
  style?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
}

/** primary key columns input for table: Form */
export interface Form_Pk_Columns_Input {
  id: Scalars['String']['input'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface Form_Prepend_Input {
  style?: InputMaybe<Scalars['jsonb']['input']>;
}

/** select columns of table "Form" */
export enum Form_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Favorite = 'favorite',
  /** column name */
  FolderId = 'folderId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  Responses = 'responses',
  /** column name */
  Style = 'style',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "Form_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Form" */
export enum Form_Select_Column_Form_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Favorite = 'favorite'
}

/** select "Form_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Form" */
export enum Form_Select_Column_Form_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Favorite = 'favorite'
}

/** input type for updating data in table "Form" */
export interface Form_Set_Input {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['jsonb']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
}

/** aggregate stddev on columns */
export interface Form_Stddev_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  responses?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "Form" */
export interface Form_Stddev_Order_By {
  order?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Form_Stddev_Pop_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  responses?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "Form" */
export interface Form_Stddev_Pop_Order_By {
  order?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Form_Stddev_Samp_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  responses?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "Form" */
export interface Form_Stddev_Samp_Order_By {
  order?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "Form" */
export interface Form_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Form_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Form_Stream_Cursor_Value_Input {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  responses?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Scalars['jsonb']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
}

/** aggregate sum on columns */
export interface Form_Sum_Fields {
  order?: Maybe<Scalars['Int']['output']>;
  responses?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "Form" */
export interface Form_Sum_Order_By {
  order?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
}

/** update columns of table "Form" */
export enum Form_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Favorite = 'favorite',
  /** column name */
  FolderId = 'folderId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  Responses = 'responses',
  /** column name */
  Style = 'style',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export interface Form_Updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Form_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Form_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Form_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Form_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Form_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Form_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Form_Set_Input>;
  /** filter the rows which have to be updated */
  where: Form_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Form_Var_Pop_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  responses?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "Form" */
export interface Form_Var_Pop_Order_By {
  order?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Form_Var_Samp_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  responses?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "Form" */
export interface Form_Var_Samp_Order_By {
  order?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Form_Variance_Fields {
  order?: Maybe<Scalars['Float']['output']>;
  responses?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "Form" */
export interface Form_Variance_Order_By {
  order?: InputMaybe<Order_By>;
  responses?: InputMaybe<Order_By>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_Comparison_Exp {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
}

/** user notifications */
export interface Notification {
  /** An object relationship */
  Form?: Maybe<Form>;
  createdAt: Scalars['timestamp']['output'];
  description?: Maybe<Scalars['String']['output']>;
  formId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  read: Scalars['Boolean']['output'];
  relatedId?: Maybe<Scalars['String']['output']>;
}

/** aggregated selection of "Notification" */
export interface Notification_Aggregate {
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
}

/** aggregate fields of "Notification" */
export interface Notification_Aggregate_Fields {
  avg?: Maybe<Notification_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Notification_Max_Fields>;
  min?: Maybe<Notification_Min_Fields>;
  stddev?: Maybe<Notification_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Sum_Fields>;
  var_pop?: Maybe<Notification_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Var_Samp_Fields>;
  variance?: Maybe<Notification_Variance_Fields>;
}


/** aggregate fields of "Notification" */
export interface Notification_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** aggregate avg on columns */
export interface Notification_Avg_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** Boolean expression to filter rows from the table "Notification". All fields are combined with a logical 'AND'. */
export interface Notification_Bool_Exp {
  Form?: InputMaybe<Form_Bool_Exp>;
  _and?: InputMaybe<Array<Notification_Bool_Exp>>;
  _not?: InputMaybe<Notification_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  formId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ownerId?: InputMaybe<String_Comparison_Exp>;
  read?: InputMaybe<Boolean_Comparison_Exp>;
  relatedId?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "Notification" */
export enum Notification_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationPkey = 'Notification_pkey'
}

/** input type for incrementing numeric columns in table "Notification" */
export interface Notification_Inc_Input {
  id?: InputMaybe<Scalars['Int']['input']>;
}

/** input type for inserting data into table "Notification" */
export interface Notification_Insert_Input {
  Form?: InputMaybe<Form_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  relatedId?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate max on columns */
export interface Notification_Max_Fields {
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  formId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  relatedId?: Maybe<Scalars['String']['output']>;
}

/** aggregate min on columns */
export interface Notification_Min_Fields {
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  formId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  relatedId?: Maybe<Scalars['String']['output']>;
}

/** response of any mutation on the table "Notification" */
export interface Notification_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
}

/** on_conflict condition type for table "Notification" */
export interface Notification_On_Conflict {
  constraint: Notification_Constraint;
  update_columns?: Array<Notification_Update_Column>;
  where?: InputMaybe<Notification_Bool_Exp>;
}

/** Ordering options when selecting data from "Notification". */
export interface Notification_Order_By {
  Form?: InputMaybe<Form_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ownerId?: InputMaybe<Order_By>;
  read?: InputMaybe<Order_By>;
  relatedId?: InputMaybe<Order_By>;
}

/** primary key columns input for table: Notification */
export interface Notification_Pk_Columns_Input {
  id: Scalars['Int']['input'];
}

/** select columns of table "Notification" */
export enum Notification_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FormId = 'formId',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  Read = 'read',
  /** column name */
  RelatedId = 'relatedId'
}

/** input type for updating data in table "Notification" */
export interface Notification_Set_Input {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  relatedId?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate stddev on columns */
export interface Notification_Stddev_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_pop on columns */
export interface Notification_Stddev_Pop_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_samp on columns */
export interface Notification_Stddev_Samp_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** Streaming cursor of the table "Notification" */
export interface Notification_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Notification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Notification_Stream_Cursor_Value_Input {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  formId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  relatedId?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate sum on columns */
export interface Notification_Sum_Fields {
  id?: Maybe<Scalars['Int']['output']>;
}

/** update columns of table "Notification" */
export enum Notification_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  FormId = 'formId',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  Read = 'read',
  /** column name */
  RelatedId = 'relatedId'
}

export interface Notification_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Notification_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notification_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Notification_Var_Pop_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate var_samp on columns */
export interface Notification_Var_Samp_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate variance on columns */
export interface Notification_Variance_Fields {
  id?: Maybe<Scalars['Float']['output']>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export interface Jsonb_Cast_Exp {
  String?: InputMaybe<String_Comparison_Exp>;
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface Jsonb_Comparison_Exp {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
}

/** mutation root */
export interface Mutation_Root {
  /** delete data from the table: "Answer" */
  delete_Answer?: Maybe<Answer_Mutation_Response>;
  /** delete single row from the table: "Answer" */
  delete_Answer_by_pk?: Maybe<Answer>;
  /** delete data from the table: "Folder" */
  delete_Folder?: Maybe<Folder_Mutation_Response>;
  /** delete single row from the table: "Folder" */
  delete_Folder_by_pk?: Maybe<Folder>;
  /** delete data from the table: "Form" */
  delete_Form?: Maybe<Form_Mutation_Response>;
  /** delete data from the table: "FormItem" */
  delete_FormItem?: Maybe<FormItem_Mutation_Response>;
  /** delete data from the table: "FormItemMeta" */
  delete_FormItemMeta?: Maybe<FormItemMeta_Mutation_Response>;
  /** delete single row from the table: "FormItemMeta" */
  delete_FormItemMeta_by_pk?: Maybe<FormItemMeta>;
  /** delete data from the table: "FormItemType" */
  delete_FormItemType?: Maybe<FormItemType_Mutation_Response>;
  /** delete single row from the table: "FormItemType" */
  delete_FormItemType_by_pk?: Maybe<FormItemType>;
  /** delete single row from the table: "FormItem" */
  delete_FormItem_by_pk?: Maybe<FormItem>;
  /** delete single row from the table: "Form" */
  delete_Form_by_pk?: Maybe<Form>;
  /** delete data from the table: "Notification" */
  delete_Notification?: Maybe<Notification_Mutation_Response>;
  /** delete single row from the table: "Notification" */
  delete_Notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "Answer" */
  insert_Answer?: Maybe<Answer_Mutation_Response>;
  /** insert a single row into the table: "Answer" */
  insert_Answer_one?: Maybe<Answer>;
  /** insert data into the table: "Folder" */
  insert_Folder?: Maybe<Folder_Mutation_Response>;
  /** insert a single row into the table: "Folder" */
  insert_Folder_one?: Maybe<Folder>;
  /** insert data into the table: "Form" */
  insert_Form?: Maybe<Form_Mutation_Response>;
  /** insert data into the table: "FormItem" */
  insert_FormItem?: Maybe<FormItem_Mutation_Response>;
  /** insert data into the table: "FormItemMeta" */
  insert_FormItemMeta?: Maybe<FormItemMeta_Mutation_Response>;
  /** insert a single row into the table: "FormItemMeta" */
  insert_FormItemMeta_one?: Maybe<FormItemMeta>;
  /** insert data into the table: "FormItemType" */
  insert_FormItemType?: Maybe<FormItemType_Mutation_Response>;
  /** insert a single row into the table: "FormItemType" */
  insert_FormItemType_one?: Maybe<FormItemType>;
  /** insert a single row into the table: "FormItem" */
  insert_FormItem_one?: Maybe<FormItem>;
  /** insert a single row into the table: "Form" */
  insert_Form_one?: Maybe<Form>;
  /** insert data into the table: "Notification" */
  insert_Notification?: Maybe<Notification_Mutation_Response>;
  /** insert a single row into the table: "Notification" */
  insert_Notification_one?: Maybe<Notification>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "Answer" */
  update_Answer?: Maybe<Answer_Mutation_Response>;
  /** update single row of the table: "Answer" */
  update_Answer_by_pk?: Maybe<Answer>;
  /** update multiples rows of table: "Answer" */
  update_Answer_many?: Maybe<Array<Maybe<Answer_Mutation_Response>>>;
  /** update data of the table: "Folder" */
  update_Folder?: Maybe<Folder_Mutation_Response>;
  /** update single row of the table: "Folder" */
  update_Folder_by_pk?: Maybe<Folder>;
  /** update multiples rows of table: "Folder" */
  update_Folder_many?: Maybe<Array<Maybe<Folder_Mutation_Response>>>;
  /** update data of the table: "Form" */
  update_Form?: Maybe<Form_Mutation_Response>;
  /** update data of the table: "FormItem" */
  update_FormItem?: Maybe<FormItem_Mutation_Response>;
  /** update data of the table: "FormItemMeta" */
  update_FormItemMeta?: Maybe<FormItemMeta_Mutation_Response>;
  /** update single row of the table: "FormItemMeta" */
  update_FormItemMeta_by_pk?: Maybe<FormItemMeta>;
  /** update multiples rows of table: "FormItemMeta" */
  update_FormItemMeta_many?: Maybe<Array<Maybe<FormItemMeta_Mutation_Response>>>;
  /** update data of the table: "FormItemType" */
  update_FormItemType?: Maybe<FormItemType_Mutation_Response>;
  /** update single row of the table: "FormItemType" */
  update_FormItemType_by_pk?: Maybe<FormItemType>;
  /** update multiples rows of table: "FormItemType" */
  update_FormItemType_many?: Maybe<Array<Maybe<FormItemType_Mutation_Response>>>;
  /** update single row of the table: "FormItem" */
  update_FormItem_by_pk?: Maybe<FormItem>;
  /** update multiples rows of table: "FormItem" */
  update_FormItem_many?: Maybe<Array<Maybe<FormItem_Mutation_Response>>>;
  /** update single row of the table: "Form" */
  update_Form_by_pk?: Maybe<Form>;
  /** update multiples rows of table: "Form" */
  update_Form_many?: Maybe<Array<Maybe<Form_Mutation_Response>>>;
  /** update data of the table: "Notification" */
  update_Notification?: Maybe<Notification_Mutation_Response>;
  /** update single row of the table: "Notification" */
  update_Notification_by_pk?: Maybe<Notification>;
  /** update multiples rows of table: "Notification" */
  update_Notification_many?: Maybe<Array<Maybe<Notification_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
}


/** mutation root */
export interface Mutation_RootDelete_AnswerArgs {
  where: Answer_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Answer_By_PkArgs {
  id: Scalars['String']['input'];
}


/** mutation root */
export interface Mutation_RootDelete_FolderArgs {
  where: Folder_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Folder_By_PkArgs {
  id: Scalars['String']['input'];
}


/** mutation root */
export interface Mutation_RootDelete_FormArgs {
  where: Form_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_FormItemArgs {
  where: FormItem_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_FormItemMetaArgs {
  where: FormItemMeta_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_FormItemMeta_By_PkArgs {
  id: Scalars['Int']['input'];
}


/** mutation root */
export interface Mutation_RootDelete_FormItemTypeArgs {
  where: FormItemType_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_FormItemType_By_PkArgs {
  type: Scalars['String']['input'];
}


/** mutation root */
export interface Mutation_RootDelete_FormItem_By_PkArgs {
  id: Scalars['String']['input'];
}


/** mutation root */
export interface Mutation_RootDelete_Form_By_PkArgs {
  id: Scalars['String']['input'];
}


/** mutation root */
export interface Mutation_RootDelete_NotificationArgs {
  where: Notification_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Notification_By_PkArgs {
  id: Scalars['Int']['input'];
}


/** mutation root */
export interface Mutation_RootDelete_UsersArgs {
  where: Users_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootDelete_Users_By_PkArgs {
  id: Scalars['String']['input'];
}


/** mutation root */
export interface Mutation_RootInsert_AnswerArgs {
  objects: Array<Answer_Insert_Input>;
  on_conflict?: InputMaybe<Answer_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Answer_OneArgs {
  object: Answer_Insert_Input;
  on_conflict?: InputMaybe<Answer_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_FolderArgs {
  objects: Array<Folder_Insert_Input>;
  on_conflict?: InputMaybe<Folder_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Folder_OneArgs {
  object: Folder_Insert_Input;
  on_conflict?: InputMaybe<Folder_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_FormArgs {
  objects: Array<Form_Insert_Input>;
  on_conflict?: InputMaybe<Form_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_FormItemArgs {
  objects: Array<FormItem_Insert_Input>;
  on_conflict?: InputMaybe<FormItem_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_FormItemMetaArgs {
  objects: Array<FormItemMeta_Insert_Input>;
  on_conflict?: InputMaybe<FormItemMeta_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_FormItemMeta_OneArgs {
  object: FormItemMeta_Insert_Input;
  on_conflict?: InputMaybe<FormItemMeta_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_FormItemTypeArgs {
  objects: Array<FormItemType_Insert_Input>;
  on_conflict?: InputMaybe<FormItemType_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_FormItemType_OneArgs {
  object: FormItemType_Insert_Input;
  on_conflict?: InputMaybe<FormItemType_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_FormItem_OneArgs {
  object: FormItem_Insert_Input;
  on_conflict?: InputMaybe<FormItem_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Form_OneArgs {
  object: Form_Insert_Input;
  on_conflict?: InputMaybe<Form_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_NotificationArgs {
  objects: Array<Notification_Insert_Input>;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Notification_OneArgs {
  object: Notification_Insert_Input;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_UsersArgs {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootInsert_Users_OneArgs {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
}


/** mutation root */
export interface Mutation_RootUpdate_AnswerArgs {
  _set?: InputMaybe<Answer_Set_Input>;
  where: Answer_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Answer_By_PkArgs {
  _set?: InputMaybe<Answer_Set_Input>;
  pk_columns: Answer_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Answer_ManyArgs {
  updates: Array<Answer_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_FolderArgs {
  _set?: InputMaybe<Folder_Set_Input>;
  where: Folder_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Folder_By_PkArgs {
  _set?: InputMaybe<Folder_Set_Input>;
  pk_columns: Folder_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Folder_ManyArgs {
  updates: Array<Folder_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_FormArgs {
  _append?: InputMaybe<Form_Append_Input>;
  _delete_at_path?: InputMaybe<Form_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Form_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Form_Delete_Key_Input>;
  _inc?: InputMaybe<Form_Inc_Input>;
  _prepend?: InputMaybe<Form_Prepend_Input>;
  _set?: InputMaybe<Form_Set_Input>;
  where: Form_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItemArgs {
  _append?: InputMaybe<FormItem_Append_Input>;
  _delete_at_path?: InputMaybe<FormItem_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<FormItem_Delete_Elem_Input>;
  _delete_key?: InputMaybe<FormItem_Delete_Key_Input>;
  _inc?: InputMaybe<FormItem_Inc_Input>;
  _prepend?: InputMaybe<FormItem_Prepend_Input>;
  _set?: InputMaybe<FormItem_Set_Input>;
  where: FormItem_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItemMetaArgs {
  _inc?: InputMaybe<FormItemMeta_Inc_Input>;
  _set?: InputMaybe<FormItemMeta_Set_Input>;
  where: FormItemMeta_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItemMeta_By_PkArgs {
  _inc?: InputMaybe<FormItemMeta_Inc_Input>;
  _set?: InputMaybe<FormItemMeta_Set_Input>;
  pk_columns: FormItemMeta_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItemMeta_ManyArgs {
  updates: Array<FormItemMeta_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItemTypeArgs {
  _set?: InputMaybe<FormItemType_Set_Input>;
  where: FormItemType_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItemType_By_PkArgs {
  _set?: InputMaybe<FormItemType_Set_Input>;
  pk_columns: FormItemType_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItemType_ManyArgs {
  updates: Array<FormItemType_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItem_By_PkArgs {
  _append?: InputMaybe<FormItem_Append_Input>;
  _delete_at_path?: InputMaybe<FormItem_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<FormItem_Delete_Elem_Input>;
  _delete_key?: InputMaybe<FormItem_Delete_Key_Input>;
  _inc?: InputMaybe<FormItem_Inc_Input>;
  _prepend?: InputMaybe<FormItem_Prepend_Input>;
  _set?: InputMaybe<FormItem_Set_Input>;
  pk_columns: FormItem_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_FormItem_ManyArgs {
  updates: Array<FormItem_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_Form_By_PkArgs {
  _append?: InputMaybe<Form_Append_Input>;
  _delete_at_path?: InputMaybe<Form_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Form_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Form_Delete_Key_Input>;
  _inc?: InputMaybe<Form_Inc_Input>;
  _prepend?: InputMaybe<Form_Prepend_Input>;
  _set?: InputMaybe<Form_Set_Input>;
  pk_columns: Form_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Form_ManyArgs {
  updates: Array<Form_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_NotificationArgs {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Notification_By_PkArgs {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  pk_columns: Notification_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Notification_ManyArgs {
  updates: Array<Notification_Updates>;
}


/** mutation root */
export interface Mutation_RootUpdate_UsersArgs {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
}


/** mutation root */
export interface Mutation_RootUpdate_Users_By_PkArgs {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
}


/** mutation root */
export interface Mutation_RootUpdate_Users_ManyArgs {
  updates: Array<Users_Updates>;
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export interface Query_Root {
  /** fetch data from the table: "Answer" */
  Answer: Array<Answer>;
  /** fetch aggregated fields from the table: "Answer" */
  Answer_aggregate: Answer_Aggregate;
  /** fetch data from the table: "Answer" using primary key columns */
  Answer_by_pk?: Maybe<Answer>;
  /** fetch data from the table: "Folder" */
  Folder: Array<Folder>;
  /** fetch aggregated fields from the table: "Folder" */
  Folder_aggregate: Folder_Aggregate;
  /** fetch data from the table: "Folder" using primary key columns */
  Folder_by_pk?: Maybe<Folder>;
  /** fetch data from the table: "Form" */
  Form: Array<Form>;
  /** fetch data from the table: "FormItem" */
  FormItem: Array<FormItem>;
  /** fetch data from the table: "FormItemMeta" */
  FormItemMeta: Array<FormItemMeta>;
  /** fetch aggregated fields from the table: "FormItemMeta" */
  FormItemMeta_aggregate: FormItemMeta_Aggregate;
  /** fetch data from the table: "FormItemMeta" using primary key columns */
  FormItemMeta_by_pk?: Maybe<FormItemMeta>;
  /** fetch data from the table: "FormItemType" */
  FormItemType: Array<FormItemType>;
  /** fetch aggregated fields from the table: "FormItemType" */
  FormItemType_aggregate: FormItemType_Aggregate;
  /** fetch data from the table: "FormItemType" using primary key columns */
  FormItemType_by_pk?: Maybe<FormItemType>;
  /** fetch aggregated fields from the table: "FormItem" */
  FormItem_aggregate: FormItem_Aggregate;
  /** fetch data from the table: "FormItem" using primary key columns */
  FormItem_by_pk?: Maybe<FormItem>;
  /** fetch aggregated fields from the table: "Form" */
  Form_aggregate: Form_Aggregate;
  /** fetch data from the table: "Form" using primary key columns */
  Form_by_pk?: Maybe<Form>;
  /** fetch data from the table: "Notification" */
  Notification: Array<Notification>;
  /** fetch aggregated fields from the table: "Notification" */
  Notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "Notification" using primary key columns */
  Notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


export interface Query_RootAnswerArgs {
  distinct_on?: InputMaybe<Array<Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answer_Order_By>>;
  where?: InputMaybe<Answer_Bool_Exp>;
}


export interface Query_RootAnswer_AggregateArgs {
  distinct_on?: InputMaybe<Array<Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answer_Order_By>>;
  where?: InputMaybe<Answer_Bool_Exp>;
}


export interface Query_RootAnswer_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Query_RootFolderArgs {
  distinct_on?: InputMaybe<Array<Folder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folder_Order_By>>;
  where?: InputMaybe<Folder_Bool_Exp>;
}


export interface Query_RootFolder_AggregateArgs {
  distinct_on?: InputMaybe<Array<Folder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folder_Order_By>>;
  where?: InputMaybe<Folder_Bool_Exp>;
}


export interface Query_RootFolder_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Query_RootFormArgs {
  distinct_on?: InputMaybe<Array<Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Order_By>>;
  where?: InputMaybe<Form_Bool_Exp>;
}


export interface Query_RootFormItemArgs {
  distinct_on?: InputMaybe<Array<FormItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItem_Order_By>>;
  where?: InputMaybe<FormItem_Bool_Exp>;
}


export interface Query_RootFormItemMetaArgs {
  distinct_on?: InputMaybe<Array<FormItemMeta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItemMeta_Order_By>>;
  where?: InputMaybe<FormItemMeta_Bool_Exp>;
}


export interface Query_RootFormItemMeta_AggregateArgs {
  distinct_on?: InputMaybe<Array<FormItemMeta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItemMeta_Order_By>>;
  where?: InputMaybe<FormItemMeta_Bool_Exp>;
}


export interface Query_RootFormItemMeta_By_PkArgs {
  id: Scalars['Int']['input'];
}


export interface Query_RootFormItemTypeArgs {
  distinct_on?: InputMaybe<Array<FormItemType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItemType_Order_By>>;
  where?: InputMaybe<FormItemType_Bool_Exp>;
}


export interface Query_RootFormItemType_AggregateArgs {
  distinct_on?: InputMaybe<Array<FormItemType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItemType_Order_By>>;
  where?: InputMaybe<FormItemType_Bool_Exp>;
}


export interface Query_RootFormItemType_By_PkArgs {
  type: Scalars['String']['input'];
}


export interface Query_RootFormItem_AggregateArgs {
  distinct_on?: InputMaybe<Array<FormItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItem_Order_By>>;
  where?: InputMaybe<FormItem_Bool_Exp>;
}


export interface Query_RootFormItem_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Query_RootForm_AggregateArgs {
  distinct_on?: InputMaybe<Array<Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Order_By>>;
  where?: InputMaybe<Form_Bool_Exp>;
}


export interface Query_RootForm_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Query_RootNotificationArgs {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
}


export interface Query_RootNotification_AggregateArgs {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
}


export interface Query_RootNotification_By_PkArgs {
  id: Scalars['Int']['input'];
}


export interface Query_RootUsersArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}


export interface Query_RootUsers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}


export interface Query_RootUsers_By_PkArgs {
  id: Scalars['String']['input'];
}

export interface Subscription_Root {
  /** fetch data from the table: "Answer" */
  Answer: Array<Answer>;
  /** fetch aggregated fields from the table: "Answer" */
  Answer_aggregate: Answer_Aggregate;
  /** fetch data from the table: "Answer" using primary key columns */
  Answer_by_pk?: Maybe<Answer>;
  /** fetch data from the table in a streaming manner: "Answer" */
  Answer_stream: Array<Answer>;
  /** fetch data from the table: "Folder" */
  Folder: Array<Folder>;
  /** fetch aggregated fields from the table: "Folder" */
  Folder_aggregate: Folder_Aggregate;
  /** fetch data from the table: "Folder" using primary key columns */
  Folder_by_pk?: Maybe<Folder>;
  /** fetch data from the table in a streaming manner: "Folder" */
  Folder_stream: Array<Folder>;
  /** fetch data from the table: "Form" */
  Form: Array<Form>;
  /** fetch data from the table: "FormItem" */
  FormItem: Array<FormItem>;
  /** fetch data from the table: "FormItemMeta" */
  FormItemMeta: Array<FormItemMeta>;
  /** fetch aggregated fields from the table: "FormItemMeta" */
  FormItemMeta_aggregate: FormItemMeta_Aggregate;
  /** fetch data from the table: "FormItemMeta" using primary key columns */
  FormItemMeta_by_pk?: Maybe<FormItemMeta>;
  /** fetch data from the table in a streaming manner: "FormItemMeta" */
  FormItemMeta_stream: Array<FormItemMeta>;
  /** fetch data from the table: "FormItemType" */
  FormItemType: Array<FormItemType>;
  /** fetch aggregated fields from the table: "FormItemType" */
  FormItemType_aggregate: FormItemType_Aggregate;
  /** fetch data from the table: "FormItemType" using primary key columns */
  FormItemType_by_pk?: Maybe<FormItemType>;
  /** fetch data from the table in a streaming manner: "FormItemType" */
  FormItemType_stream: Array<FormItemType>;
  /** fetch aggregated fields from the table: "FormItem" */
  FormItem_aggregate: FormItem_Aggregate;
  /** fetch data from the table: "FormItem" using primary key columns */
  FormItem_by_pk?: Maybe<FormItem>;
  /** fetch data from the table in a streaming manner: "FormItem" */
  FormItem_stream: Array<FormItem>;
  /** fetch aggregated fields from the table: "Form" */
  Form_aggregate: Form_Aggregate;
  /** fetch data from the table: "Form" using primary key columns */
  Form_by_pk?: Maybe<Form>;
  /** fetch data from the table in a streaming manner: "Form" */
  Form_stream: Array<Form>;
  /** fetch data from the table: "Notification" */
  Notification: Array<Notification>;
  /** fetch aggregated fields from the table: "Notification" */
  Notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "Notification" using primary key columns */
  Notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table in a streaming manner: "Notification" */
  Notification_stream: Array<Notification>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
}


export interface Subscription_RootAnswerArgs {
  distinct_on?: InputMaybe<Array<Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answer_Order_By>>;
  where?: InputMaybe<Answer_Bool_Exp>;
}


export interface Subscription_RootAnswer_AggregateArgs {
  distinct_on?: InputMaybe<Array<Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answer_Order_By>>;
  where?: InputMaybe<Answer_Bool_Exp>;
}


export interface Subscription_RootAnswer_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Subscription_RootAnswer_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Answer_Stream_Cursor_Input>>;
  where?: InputMaybe<Answer_Bool_Exp>;
}


export interface Subscription_RootFolderArgs {
  distinct_on?: InputMaybe<Array<Folder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folder_Order_By>>;
  where?: InputMaybe<Folder_Bool_Exp>;
}


export interface Subscription_RootFolder_AggregateArgs {
  distinct_on?: InputMaybe<Array<Folder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Folder_Order_By>>;
  where?: InputMaybe<Folder_Bool_Exp>;
}


export interface Subscription_RootFolder_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Subscription_RootFolder_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Folder_Stream_Cursor_Input>>;
  where?: InputMaybe<Folder_Bool_Exp>;
}


export interface Subscription_RootFormArgs {
  distinct_on?: InputMaybe<Array<Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Order_By>>;
  where?: InputMaybe<Form_Bool_Exp>;
}


export interface Subscription_RootFormItemArgs {
  distinct_on?: InputMaybe<Array<FormItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItem_Order_By>>;
  where?: InputMaybe<FormItem_Bool_Exp>;
}


export interface Subscription_RootFormItemMetaArgs {
  distinct_on?: InputMaybe<Array<FormItemMeta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItemMeta_Order_By>>;
  where?: InputMaybe<FormItemMeta_Bool_Exp>;
}


export interface Subscription_RootFormItemMeta_AggregateArgs {
  distinct_on?: InputMaybe<Array<FormItemMeta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItemMeta_Order_By>>;
  where?: InputMaybe<FormItemMeta_Bool_Exp>;
}


export interface Subscription_RootFormItemMeta_By_PkArgs {
  id: Scalars['Int']['input'];
}


export interface Subscription_RootFormItemMeta_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FormItemMeta_Stream_Cursor_Input>>;
  where?: InputMaybe<FormItemMeta_Bool_Exp>;
}


export interface Subscription_RootFormItemTypeArgs {
  distinct_on?: InputMaybe<Array<FormItemType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItemType_Order_By>>;
  where?: InputMaybe<FormItemType_Bool_Exp>;
}


export interface Subscription_RootFormItemType_AggregateArgs {
  distinct_on?: InputMaybe<Array<FormItemType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItemType_Order_By>>;
  where?: InputMaybe<FormItemType_Bool_Exp>;
}


export interface Subscription_RootFormItemType_By_PkArgs {
  type: Scalars['String']['input'];
}


export interface Subscription_RootFormItemType_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FormItemType_Stream_Cursor_Input>>;
  where?: InputMaybe<FormItemType_Bool_Exp>;
}


export interface Subscription_RootFormItem_AggregateArgs {
  distinct_on?: InputMaybe<Array<FormItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<FormItem_Order_By>>;
  where?: InputMaybe<FormItem_Bool_Exp>;
}


export interface Subscription_RootFormItem_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Subscription_RootFormItem_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FormItem_Stream_Cursor_Input>>;
  where?: InputMaybe<FormItem_Bool_Exp>;
}


export interface Subscription_RootForm_AggregateArgs {
  distinct_on?: InputMaybe<Array<Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Order_By>>;
  where?: InputMaybe<Form_Bool_Exp>;
}


export interface Subscription_RootForm_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Subscription_RootForm_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Form_Stream_Cursor_Input>>;
  where?: InputMaybe<Form_Bool_Exp>;
}


export interface Subscription_RootNotificationArgs {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
}


export interface Subscription_RootNotification_AggregateArgs {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
}


export interface Subscription_RootNotification_By_PkArgs {
  id: Scalars['Int']['input'];
}


export interface Subscription_RootNotification_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notification_Stream_Cursor_Input>>;
  where?: InputMaybe<Notification_Bool_Exp>;
}


export interface Subscription_RootUsersArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}


export interface Subscription_RootUsers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}


export interface Subscription_RootUsers_By_PkArgs {
  id: Scalars['String']['input'];
}


export interface Subscription_RootUsers_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface Timestamp_Comparison_Exp {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
}

/** users */
export interface Users {
  id: Scalars['String']['output'];
  last_seen: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
}

/** aggregated selection of "users" */
export interface Users_Aggregate {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
}

/** aggregate fields of "users" */
export interface Users_Aggregate_Fields {
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
}


/** aggregate fields of "users" */
export interface Users_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface Users_Bool_Exp {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export interface Users_Insert_Input {
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate max on columns */
export interface Users_Max_Fields {
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

/** aggregate min on columns */
export interface Users_Min_Fields {
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

/** response of any mutation on the table "users" */
export interface Users_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
}

/** on_conflict condition type for table "users" */
export interface Users_On_Conflict {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
}

/** Ordering options when selecting data from "users". */
export interface Users_Order_By {
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
}

/** primary key columns input for table: users */
export interface Users_Pk_Columns_Input {
  id: Scalars['String']['input'];
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export interface Users_Set_Input {
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

/** Streaming cursor of the table "users" */
export interface Users_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Users_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

export interface Users_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
}

export type FormsByNameQueryVariables = Exact<{ [key: string]: never; }>;


export type FormsByNameQuery = { Form: Array<{ id: string, name: string }> };

export type ActivitiesQueryVariables = Exact<{
  ownerId: Scalars['String']['input'];
  formName?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['timestamp']['input']>;
  toDate?: InputMaybe<Scalars['timestamp']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ActivitiesQuery = { Notification: Array<{ id: number, description?: string | undefined | null, createdAt: any, relatedId?: string | undefined | null, Form?: { id: string, name: string } | undefined | null }> };

export type ActivitiesCountQueryVariables = Exact<{
  ownerId: Scalars['String']['input'];
  formName?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['timestamp']['input']>;
  toDate?: InputMaybe<Scalars['timestamp']['input']>;
}>;


export type ActivitiesCountQuery = { Notification_aggregate: { aggregate?: { count: number } | undefined | null } };

export type OldestNotificationQueryVariables = Exact<{
  ownerId: Scalars['String']['input'];
}>;


export type OldestNotificationQuery = { Notification: Array<{ id: number, createdAt: any }> };

export type ResponsesQueryVariables = Exact<{
  formId: Scalars['String']['input'];
}>;


export type ResponsesQuery = { Form_by_pk?: { id: string, responses: number, FormItems: Array<{ id: string, name: string, items?: any | undefined | null, type?: FormItemType_Enum | undefined | null, Answers_aggregate: { aggregate?: { count: number } | undefined | null }, Answers: Array<{ id: string, value: string }> }> } | undefined | null };

export type SubmitFormMutationVariables = Exact<{
  formId: Scalars['String']['input'];
  data: Array<Answer_Insert_Input> | Answer_Insert_Input;
}>;


export type SubmitFormMutation = { insert_Answer?: { affected_rows: number } | undefined | null, update_Form?: { affected_rows: number } | undefined | null };

export type GetResponsesByIdQueryVariables = Exact<{
  responseId: Scalars['String']['input'];
}>;


export type GetResponsesByIdQuery = { Answer: Array<{ id: string, value: string, FormItem?: { id: string } | undefined | null }> };

export type FormResponsesQueryVariables = Exact<{
  ownerId: Scalars['String']['input'];
  formId: Scalars['String']['input'];
}>;


export type FormResponsesQuery = { Notification: Array<{ id: number, createdAt: any, relatedId?: string | undefined | null }> };

export type ResponseCounterSubscriptionVariables = Exact<{
  formId: Scalars['String']['input'];
}>;


export type ResponseCounterSubscription = { Form_by_pk?: { responses: number } | undefined | null };

export type MyFoldersQueryVariables = Exact<{ [key: string]: never; }>;


export type MyFoldersQuery = { Folder: Array<{ id: string, name: string }> };

export type UpsertFolderMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UpsertFolderMutation = { insert_Folder?: { returning: Array<{ id: string, name: string }> } | undefined | null };

export type DeleteFolderMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteFolderMutation = { delete_Folder?: { returning: Array<{ id: string, name: string }> } | undefined | null };

export type UpdateFormFolderMutationVariables = Exact<{
  formId: Scalars['String']['input'];
  folderId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateFormFolderMutation = { update_Form?: { affected_rows: number } | undefined | null };

export type CreateFormMutationVariables = Exact<{
  data: Form_Insert_Input;
}>;


export type CreateFormMutation = { insert_Form_one?: { id: string, name: string, favorite: boolean, createdAt: any, updatedAt: any } | undefined | null };

export type DeleteFormMutationVariables = Exact<{
  formId: Scalars['String']['input'];
}>;


export type DeleteFormMutation = { delete_Form?: { returning: Array<{ id: string }> } | undefined | null };

export type StarFormMutationVariables = Exact<{
  formId: Scalars['String']['input'];
  favorite: Scalars['Boolean']['input'];
}>;


export type StarFormMutation = { update_Form?: { returning: Array<{ id: string, favorite: boolean }> } | undefined | null };

export type MyFormsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<Form_Order_By> | Form_Order_By>;
}>;


export type MyFormsQuery = { Form: Array<{ id: string, name: string, favorite: boolean, thumbnail?: string | undefined | null, style?: any | undefined | null, createdAt: any, updatedAt: any }> };

export type FolderFormsQueryVariables = Exact<{
  folderId: Scalars['String']['input'];
}>;


export type FolderFormsQuery = { Form: Array<{ id: string, name: string, favorite: boolean, thumbnail?: string | undefined | null, style?: any | undefined | null, createdAt: any, updatedAt: any }> };

export type DefaultFolderFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type DefaultFolderFormsQuery = { Form: Array<{ id: string, name: string, favorite: boolean, thumbnail?: string | undefined | null, style?: any | undefined | null, createdAt: any, updatedAt: any }> };

export type FormDataQueryVariables = Exact<{
  formId: Scalars['String']['input'];
}>;


export type FormDataQuery = { Form_by_pk?: { id: string, name: string, favorite: boolean, style?: any | undefined | null, FormItems: Array<{ id: string, formId: string, name: string, order: number, required: boolean, items?: any | undefined | null, image?: any | undefined | null, type?: FormItemType_Enum | undefined | null }> } | undefined | null };

export type GetFormQueryVariables = Exact<{
  formId: Scalars['String']['input'];
}>;


export type GetFormQuery = { Form_by_pk?: { id: string, name: string, favorite: boolean, style?: any | undefined | null, ownerId: string, FormItems: Array<{ id: string, formId: string, name: string, order: number, required: boolean, items?: any | undefined | null, image?: any | undefined | null, type?: FormItemType_Enum | undefined | null }> } | undefined | null };

export type UpdateFormMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  style: Scalars['jsonb']['input'];
  favorite: Scalars['Boolean']['input'];
}>;


export type UpdateFormMutation = { update_Form?: { returning: Array<{ id: string, name: string, favorite: boolean, thumbnail?: string | undefined | null, style?: any | undefined | null, createdAt: any, updatedAt: any }> } | undefined | null };

export type UpdateFormThumbnailMutationVariables = Exact<{
  id: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
}>;


export type UpdateFormThumbnailMutation = { update_Form?: { returning: Array<{ id: string, thumbnail?: string | undefined | null }> } | undefined | null };

export type UpdateFormItemsMutationVariables = Exact<{
  data: Array<FormItem_Insert_Input> | FormItem_Insert_Input;
}>;


export type UpdateFormItemsMutation = { insert_FormItem?: { affected_rows: number } | undefined | null };

export type DeleteFormItemsMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type DeleteFormItemsMutation = { delete_FormItem?: { affected_rows: number } | undefined | null };

export type InsertNotificationMutationVariables = Exact<{
  ownerId: Scalars['String']['input'];
  formId: Scalars['String']['input'];
  responseId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertNotificationMutation = { insert_Notification?: { affected_rows: number } | undefined | null };

export type NotificationsSubscriptionVariables = Exact<{
  ownerId: Scalars['String']['input'];
}>;


export type NotificationsSubscription = { Notification: Array<{ id: number, description?: string | undefined | null, createdAt: any, read: boolean }> };

export type ReadNotificationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ReadNotificationMutation = { update_Notification?: { affected_rows: number } | undefined | null };

export type ReadAllNotificationsMutationVariables = Exact<{
  ownerId: Scalars['String']['input'];
}>;


export type ReadAllNotificationsMutation = { update_Notification?: { affected_rows: number } | undefined | null };


export const FormsByNameDocument = /*#__PURE__*/ gql`
    query FormsByName {
  Form {
    id
    name
  }
}
    `;

/**
 * __useFormsByNameQuery__
 *
 * To run a query within a React component, call `useFormsByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormsByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormsByNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useFormsByNameQuery(baseOptions?: Apollo.QueryHookOptions<FormsByNameQuery, FormsByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormsByNameQuery, FormsByNameQueryVariables>(FormsByNameDocument, options);
      }
export function useFormsByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormsByNameQuery, FormsByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormsByNameQuery, FormsByNameQueryVariables>(FormsByNameDocument, options);
        }
export function useFormsByNameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FormsByNameQuery, FormsByNameQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FormsByNameQuery, FormsByNameQueryVariables>(FormsByNameDocument, options);
        }
export type FormsByNameQueryHookResult = ReturnType<typeof useFormsByNameQuery>;
export type FormsByNameLazyQueryHookResult = ReturnType<typeof useFormsByNameLazyQuery>;
export type FormsByNameSuspenseQueryHookResult = ReturnType<typeof useFormsByNameSuspenseQuery>;
export type FormsByNameQueryResult = Apollo.QueryResult<FormsByNameQuery, FormsByNameQueryVariables>;
export const ActivitiesDocument = /*#__PURE__*/ gql`
    query Activities($ownerId: String!, $formName: String = "%%", $fromDate: timestamp, $toDate: timestamp, $offset: Int = 0, $limit: Int = 10) {
  Notification(
    order_by: [{createdAt: desc}]
    where: {_and: {createdAt: {_gte: $fromDate, _lte: $toDate}}, Form: {name: {_like: $formName}}, ownerId: {_eq: $ownerId}}
    offset: $offset
    limit: $limit
  ) {
    id
    description
    createdAt
    relatedId
    Form {
      id
      name
    }
  }
}
    `;

/**
 * __useActivitiesQuery__
 *
 * To run a query within a React component, call `useActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *      formName: // value for 'formName'
 *      fromDate: // value for 'fromDate'
 *      toDate: // value for 'toDate'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useActivitiesQuery(baseOptions: Apollo.QueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables> & ({ variables: ActivitiesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
      }
export function useActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
        }
export function useActivitiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
        }
export type ActivitiesQueryHookResult = ReturnType<typeof useActivitiesQuery>;
export type ActivitiesLazyQueryHookResult = ReturnType<typeof useActivitiesLazyQuery>;
export type ActivitiesSuspenseQueryHookResult = ReturnType<typeof useActivitiesSuspenseQuery>;
export type ActivitiesQueryResult = Apollo.QueryResult<ActivitiesQuery, ActivitiesQueryVariables>;
export const ActivitiesCountDocument = /*#__PURE__*/ gql`
    query ActivitiesCount($ownerId: String!, $formName: String = "%%", $fromDate: timestamp, $toDate: timestamp) {
  Notification_aggregate(
    where: {_and: {createdAt: {_gte: $fromDate, _lte: $toDate}}, Form: {name: {_like: $formName}}, ownerId: {_eq: $ownerId}}
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useActivitiesCountQuery__
 *
 * To run a query within a React component, call `useActivitiesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesCountQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *      formName: // value for 'formName'
 *      fromDate: // value for 'fromDate'
 *      toDate: // value for 'toDate'
 *   },
 * });
 */
export function useActivitiesCountQuery(baseOptions: Apollo.QueryHookOptions<ActivitiesCountQuery, ActivitiesCountQueryVariables> & ({ variables: ActivitiesCountQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivitiesCountQuery, ActivitiesCountQueryVariables>(ActivitiesCountDocument, options);
      }
export function useActivitiesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivitiesCountQuery, ActivitiesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivitiesCountQuery, ActivitiesCountQueryVariables>(ActivitiesCountDocument, options);
        }
export function useActivitiesCountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ActivitiesCountQuery, ActivitiesCountQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ActivitiesCountQuery, ActivitiesCountQueryVariables>(ActivitiesCountDocument, options);
        }
export type ActivitiesCountQueryHookResult = ReturnType<typeof useActivitiesCountQuery>;
export type ActivitiesCountLazyQueryHookResult = ReturnType<typeof useActivitiesCountLazyQuery>;
export type ActivitiesCountSuspenseQueryHookResult = ReturnType<typeof useActivitiesCountSuspenseQuery>;
export type ActivitiesCountQueryResult = Apollo.QueryResult<ActivitiesCountQuery, ActivitiesCountQueryVariables>;
export const OldestNotificationDocument = /*#__PURE__*/ gql`
    query OldestNotification($ownerId: String!) {
  Notification(
    where: {ownerId: {_eq: $ownerId}}
    order_by: {createdAt: asc}
    limit: 1
  ) {
    id
    createdAt
  }
}
    `;

/**
 * __useOldestNotificationQuery__
 *
 * To run a query within a React component, call `useOldestNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOldestNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOldestNotificationQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useOldestNotificationQuery(baseOptions: Apollo.QueryHookOptions<OldestNotificationQuery, OldestNotificationQueryVariables> & ({ variables: OldestNotificationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OldestNotificationQuery, OldestNotificationQueryVariables>(OldestNotificationDocument, options);
      }
export function useOldestNotificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OldestNotificationQuery, OldestNotificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OldestNotificationQuery, OldestNotificationQueryVariables>(OldestNotificationDocument, options);
        }
export function useOldestNotificationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OldestNotificationQuery, OldestNotificationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OldestNotificationQuery, OldestNotificationQueryVariables>(OldestNotificationDocument, options);
        }
export type OldestNotificationQueryHookResult = ReturnType<typeof useOldestNotificationQuery>;
export type OldestNotificationLazyQueryHookResult = ReturnType<typeof useOldestNotificationLazyQuery>;
export type OldestNotificationSuspenseQueryHookResult = ReturnType<typeof useOldestNotificationSuspenseQuery>;
export type OldestNotificationQueryResult = Apollo.QueryResult<OldestNotificationQuery, OldestNotificationQueryVariables>;
export const ResponsesDocument = /*#__PURE__*/ gql`
    query Responses($formId: String!) {
  Form_by_pk(id: $formId) {
    id
    responses
    FormItems(order_by: {order: asc}) {
      id
      name
      items
      Answers_aggregate {
        aggregate {
          count
        }
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
export function useResponsesQuery(baseOptions: Apollo.QueryHookOptions<ResponsesQuery, ResponsesQueryVariables> & ({ variables: ResponsesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ResponsesQuery, ResponsesQueryVariables>(ResponsesDocument, options);
      }
export function useResponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResponsesQuery, ResponsesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ResponsesQuery, ResponsesQueryVariables>(ResponsesDocument, options);
        }
export function useResponsesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ResponsesQuery, ResponsesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ResponsesQuery, ResponsesQueryVariables>(ResponsesDocument, options);
        }
export type ResponsesQueryHookResult = ReturnType<typeof useResponsesQuery>;
export type ResponsesLazyQueryHookResult = ReturnType<typeof useResponsesLazyQuery>;
export type ResponsesSuspenseQueryHookResult = ReturnType<typeof useResponsesSuspenseQuery>;
export type ResponsesQueryResult = Apollo.QueryResult<ResponsesQuery, ResponsesQueryVariables>;
export const SubmitFormDocument = /*#__PURE__*/ gql`
    mutation SubmitForm($formId: String!, $data: [Answer_insert_input!]!) {
  insert_Answer(objects: $data) {
    affected_rows
  }
  update_Form(where: {id: {_eq: $formId}}, _inc: {responses: 1}) {
    affected_rows
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
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSubmitFormMutation(baseOptions?: Apollo.MutationHookOptions<SubmitFormMutation, SubmitFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitFormMutation, SubmitFormMutationVariables>(SubmitFormDocument, options);
      }
export type SubmitFormMutationHookResult = ReturnType<typeof useSubmitFormMutation>;
export type SubmitFormMutationResult = Apollo.MutationResult<SubmitFormMutation>;
export const GetResponsesByIdDocument = /*#__PURE__*/ gql`
    query GetResponsesById($responseId: String!) {
  Answer(where: {responseId: {_eq: $responseId}}) {
    id
    FormItem {
      id
    }
    value
  }
}
    `;

/**
 * __useGetResponsesByIdQuery__
 *
 * To run a query within a React component, call `useGetResponsesByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResponsesByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResponsesByIdQuery({
 *   variables: {
 *      responseId: // value for 'responseId'
 *   },
 * });
 */
export function useGetResponsesByIdQuery(baseOptions: Apollo.QueryHookOptions<GetResponsesByIdQuery, GetResponsesByIdQueryVariables> & ({ variables: GetResponsesByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResponsesByIdQuery, GetResponsesByIdQueryVariables>(GetResponsesByIdDocument, options);
      }
export function useGetResponsesByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResponsesByIdQuery, GetResponsesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResponsesByIdQuery, GetResponsesByIdQueryVariables>(GetResponsesByIdDocument, options);
        }
export function useGetResponsesByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetResponsesByIdQuery, GetResponsesByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetResponsesByIdQuery, GetResponsesByIdQueryVariables>(GetResponsesByIdDocument, options);
        }
export type GetResponsesByIdQueryHookResult = ReturnType<typeof useGetResponsesByIdQuery>;
export type GetResponsesByIdLazyQueryHookResult = ReturnType<typeof useGetResponsesByIdLazyQuery>;
export type GetResponsesByIdSuspenseQueryHookResult = ReturnType<typeof useGetResponsesByIdSuspenseQuery>;
export type GetResponsesByIdQueryResult = Apollo.QueryResult<GetResponsesByIdQuery, GetResponsesByIdQueryVariables>;
export const FormResponsesDocument = /*#__PURE__*/ gql`
    query FormResponses($ownerId: String!, $formId: String!) {
  Notification(
    order_by: [{createdAt: desc}]
    where: {Form: {id: {_eq: $formId}}, ownerId: {_eq: $ownerId}}
  ) {
    id
    createdAt
    relatedId
  }
}
    `;

/**
 * __useFormResponsesQuery__
 *
 * To run a query within a React component, call `useFormResponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormResponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormResponsesQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useFormResponsesQuery(baseOptions: Apollo.QueryHookOptions<FormResponsesQuery, FormResponsesQueryVariables> & ({ variables: FormResponsesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormResponsesQuery, FormResponsesQueryVariables>(FormResponsesDocument, options);
      }
export function useFormResponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormResponsesQuery, FormResponsesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormResponsesQuery, FormResponsesQueryVariables>(FormResponsesDocument, options);
        }
export function useFormResponsesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FormResponsesQuery, FormResponsesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FormResponsesQuery, FormResponsesQueryVariables>(FormResponsesDocument, options);
        }
export type FormResponsesQueryHookResult = ReturnType<typeof useFormResponsesQuery>;
export type FormResponsesLazyQueryHookResult = ReturnType<typeof useFormResponsesLazyQuery>;
export type FormResponsesSuspenseQueryHookResult = ReturnType<typeof useFormResponsesSuspenseQuery>;
export type FormResponsesQueryResult = Apollo.QueryResult<FormResponsesQuery, FormResponsesQueryVariables>;
export const ResponseCounterDocument = /*#__PURE__*/ gql`
    subscription ResponseCounter($formId: String!) {
  Form_by_pk(id: $formId) {
    responses
  }
}
    `;

/**
 * __useResponseCounterSubscription__
 *
 * To run a query within a React component, call `useResponseCounterSubscription` and pass it any options that fit your needs.
 * When your component renders, `useResponseCounterSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResponseCounterSubscription({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useResponseCounterSubscription(baseOptions: Apollo.SubscriptionHookOptions<ResponseCounterSubscription, ResponseCounterSubscriptionVariables> & ({ variables: ResponseCounterSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ResponseCounterSubscription, ResponseCounterSubscriptionVariables>(ResponseCounterDocument, options);
      }
export type ResponseCounterSubscriptionHookResult = ReturnType<typeof useResponseCounterSubscription>;
export type ResponseCounterSubscriptionResult = Apollo.SubscriptionResult<ResponseCounterSubscription>;
export const MyFoldersDocument = /*#__PURE__*/ gql`
    query MyFolders {
  Folder {
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
export function useMyFoldersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyFoldersQuery, MyFoldersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyFoldersQuery, MyFoldersQueryVariables>(MyFoldersDocument, options);
        }
export type MyFoldersQueryHookResult = ReturnType<typeof useMyFoldersQuery>;
export type MyFoldersLazyQueryHookResult = ReturnType<typeof useMyFoldersLazyQuery>;
export type MyFoldersSuspenseQueryHookResult = ReturnType<typeof useMyFoldersSuspenseQuery>;
export type MyFoldersQueryResult = Apollo.QueryResult<MyFoldersQuery, MyFoldersQueryVariables>;
export const UpsertFolderDocument = /*#__PURE__*/ gql`
    mutation UpsertFolder($id: String!, $name: String!) {
  insert_Folder(
    objects: {id: $id, name: $name}
    on_conflict: {constraint: Folder_pkey, update_columns: [name]}
  ) {
    returning {
      id
      name
    }
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
  delete_Folder(where: {id: {_eq: $id}}) {
    returning {
      id
      name
    }
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
    mutation UpdateFormFolder($formId: String!, $folderId: String) {
  update_Form(where: {id: {_eq: $formId}}, _set: {folderId: $folderId}) {
    affected_rows
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
 *      formId: // value for 'formId'
 *      folderId: // value for 'folderId'
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
    mutation CreateForm($data: Form_insert_input!) {
  insert_Form_one(object: $data) {
    id
    name
    favorite
    createdAt
    updatedAt
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
  delete_Form(where: {id: {_eq: $formId}}) {
    returning {
      id
    }
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
  update_Form(where: {id: {_eq: $formId}}, _set: {favorite: $favorite}) {
    returning {
      id
      favorite
    }
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
    query MyForms($orderBy: [Form_order_by!] = {createdAt: desc}) {
  Form(order_by: $orderBy) {
    id
    name
    favorite
    thumbnail
    style
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
export function useMyFormsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyFormsQuery, MyFormsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyFormsQuery, MyFormsQueryVariables>(MyFormsDocument, options);
        }
export type MyFormsQueryHookResult = ReturnType<typeof useMyFormsQuery>;
export type MyFormsLazyQueryHookResult = ReturnType<typeof useMyFormsLazyQuery>;
export type MyFormsSuspenseQueryHookResult = ReturnType<typeof useMyFormsSuspenseQuery>;
export type MyFormsQueryResult = Apollo.QueryResult<MyFormsQuery, MyFormsQueryVariables>;
export const FolderFormsDocument = /*#__PURE__*/ gql`
    query FolderForms($folderId: String!) {
  Form(where: {folderId: {_eq: $folderId}}) {
    id
    name
    favorite
    thumbnail
    style
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
export function useFolderFormsQuery(baseOptions: Apollo.QueryHookOptions<FolderFormsQuery, FolderFormsQueryVariables> & ({ variables: FolderFormsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FolderFormsQuery, FolderFormsQueryVariables>(FolderFormsDocument, options);
      }
export function useFolderFormsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FolderFormsQuery, FolderFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FolderFormsQuery, FolderFormsQueryVariables>(FolderFormsDocument, options);
        }
export function useFolderFormsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FolderFormsQuery, FolderFormsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FolderFormsQuery, FolderFormsQueryVariables>(FolderFormsDocument, options);
        }
export type FolderFormsQueryHookResult = ReturnType<typeof useFolderFormsQuery>;
export type FolderFormsLazyQueryHookResult = ReturnType<typeof useFolderFormsLazyQuery>;
export type FolderFormsSuspenseQueryHookResult = ReturnType<typeof useFolderFormsSuspenseQuery>;
export type FolderFormsQueryResult = Apollo.QueryResult<FolderFormsQuery, FolderFormsQueryVariables>;
export const DefaultFolderFormsDocument = /*#__PURE__*/ gql`
    query DefaultFolderForms {
  Form(where: {folderId: {_is_null: true}}) {
    id
    name
    favorite
    thumbnail
    style
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
export function useDefaultFolderFormsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>(DefaultFolderFormsDocument, options);
        }
export type DefaultFolderFormsQueryHookResult = ReturnType<typeof useDefaultFolderFormsQuery>;
export type DefaultFolderFormsLazyQueryHookResult = ReturnType<typeof useDefaultFolderFormsLazyQuery>;
export type DefaultFolderFormsSuspenseQueryHookResult = ReturnType<typeof useDefaultFolderFormsSuspenseQuery>;
export type DefaultFolderFormsQueryResult = Apollo.QueryResult<DefaultFolderFormsQuery, DefaultFolderFormsQueryVariables>;
export const FormDataDocument = /*#__PURE__*/ gql`
    query FormData($formId: String!) {
  Form_by_pk(id: $formId) {
    id
    name
    favorite
    style
    FormItems(order_by: {order: asc}) {
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
export function useFormDataQuery(baseOptions: Apollo.QueryHookOptions<FormDataQuery, FormDataQueryVariables> & ({ variables: FormDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormDataQuery, FormDataQueryVariables>(FormDataDocument, options);
      }
export function useFormDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormDataQuery, FormDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormDataQuery, FormDataQueryVariables>(FormDataDocument, options);
        }
export function useFormDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FormDataQuery, FormDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FormDataQuery, FormDataQueryVariables>(FormDataDocument, options);
        }
export type FormDataQueryHookResult = ReturnType<typeof useFormDataQuery>;
export type FormDataLazyQueryHookResult = ReturnType<typeof useFormDataLazyQuery>;
export type FormDataSuspenseQueryHookResult = ReturnType<typeof useFormDataSuspenseQuery>;
export type FormDataQueryResult = Apollo.QueryResult<FormDataQuery, FormDataQueryVariables>;
export const GetFormDocument = /*#__PURE__*/ gql`
    query GetForm($formId: String!) {
  Form_by_pk(id: $formId) {
    id
    name
    favorite
    style
    ownerId
    FormItems(order_by: {order: asc}) {
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
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useGetFormQuery(baseOptions: Apollo.QueryHookOptions<GetFormQuery, GetFormQueryVariables> & ({ variables: GetFormQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
      }
export function useGetFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
        }
export function useGetFormSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
        }
export type GetFormQueryHookResult = ReturnType<typeof useGetFormQuery>;
export type GetFormLazyQueryHookResult = ReturnType<typeof useGetFormLazyQuery>;
export type GetFormSuspenseQueryHookResult = ReturnType<typeof useGetFormSuspenseQuery>;
export type GetFormQueryResult = Apollo.QueryResult<GetFormQuery, GetFormQueryVariables>;
export const UpdateFormDocument = /*#__PURE__*/ gql`
    mutation UpdateForm($id: String!, $name: String!, $style: jsonb!, $favorite: Boolean!) {
  update_Form(
    where: {id: {_eq: $id}}
    _set: {name: $name, style: $style, favorite: $favorite, updatedAt: now}
  ) {
    returning {
      id
      name
      favorite
      thumbnail
      style
      createdAt
      updatedAt
    }
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
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      style: // value for 'style'
 *      favorite: // value for 'favorite'
 *   },
 * });
 */
export function useUpdateFormMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFormMutation, UpdateFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFormMutation, UpdateFormMutationVariables>(UpdateFormDocument, options);
      }
export type UpdateFormMutationHookResult = ReturnType<typeof useUpdateFormMutation>;
export type UpdateFormMutationResult = Apollo.MutationResult<UpdateFormMutation>;
export const UpdateFormThumbnailDocument = /*#__PURE__*/ gql`
    mutation UpdateFormThumbnail($id: String!, $imageUrl: String!) {
  update_Form(
    where: {id: {_eq: $id}}
    _set: {thumbnail: $imageUrl, updatedAt: now}
  ) {
    returning {
      id
      thumbnail
    }
  }
}
    `;
export type UpdateFormThumbnailMutationFn = Apollo.MutationFunction<UpdateFormThumbnailMutation, UpdateFormThumbnailMutationVariables>;

/**
 * __useUpdateFormThumbnailMutation__
 *
 * To run a mutation, you first call `useUpdateFormThumbnailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFormThumbnailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFormThumbnailMutation, { data, loading, error }] = useUpdateFormThumbnailMutation({
 *   variables: {
 *      id: // value for 'id'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useUpdateFormThumbnailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFormThumbnailMutation, UpdateFormThumbnailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFormThumbnailMutation, UpdateFormThumbnailMutationVariables>(UpdateFormThumbnailDocument, options);
      }
export type UpdateFormThumbnailMutationHookResult = ReturnType<typeof useUpdateFormThumbnailMutation>;
export type UpdateFormThumbnailMutationResult = Apollo.MutationResult<UpdateFormThumbnailMutation>;
export const UpdateFormItemsDocument = /*#__PURE__*/ gql`
    mutation UpdateFormItems($data: [FormItem_insert_input!]!) {
  insert_FormItem(
    objects: $data
    on_conflict: {constraint: FormItem_pkey, update_columns: [image, items, name, order, required, section, type]}
  ) {
    affected_rows
  }
}
    `;
export type UpdateFormItemsMutationFn = Apollo.MutationFunction<UpdateFormItemsMutation, UpdateFormItemsMutationVariables>;

/**
 * __useUpdateFormItemsMutation__
 *
 * To run a mutation, you first call `useUpdateFormItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFormItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFormItemsMutation, { data, loading, error }] = useUpdateFormItemsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateFormItemsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFormItemsMutation, UpdateFormItemsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFormItemsMutation, UpdateFormItemsMutationVariables>(UpdateFormItemsDocument, options);
      }
export type UpdateFormItemsMutationHookResult = ReturnType<typeof useUpdateFormItemsMutation>;
export type UpdateFormItemsMutationResult = Apollo.MutationResult<UpdateFormItemsMutation>;
export const DeleteFormItemsDocument = /*#__PURE__*/ gql`
    mutation DeleteFormItems($ids: [String!]!) {
  delete_FormItem(where: {id: {_in: $ids}}) {
    affected_rows
  }
}
    `;
export type DeleteFormItemsMutationFn = Apollo.MutationFunction<DeleteFormItemsMutation, DeleteFormItemsMutationVariables>;

/**
 * __useDeleteFormItemsMutation__
 *
 * To run a mutation, you first call `useDeleteFormItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFormItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFormItemsMutation, { data, loading, error }] = useDeleteFormItemsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteFormItemsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFormItemsMutation, DeleteFormItemsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFormItemsMutation, DeleteFormItemsMutationVariables>(DeleteFormItemsDocument, options);
      }
export type DeleteFormItemsMutationHookResult = ReturnType<typeof useDeleteFormItemsMutation>;
export type DeleteFormItemsMutationResult = Apollo.MutationResult<DeleteFormItemsMutation>;
export const InsertNotificationDocument = /*#__PURE__*/ gql`
    mutation InsertNotification($ownerId: String!, $formId: String!, $responseId: String!, $description: String) {
  insert_Notification(
    objects: {description: $description, formId: $formId, ownerId: $ownerId, relatedId: $responseId}
  ) {
    affected_rows
  }
}
    `;
export type InsertNotificationMutationFn = Apollo.MutationFunction<InsertNotificationMutation, InsertNotificationMutationVariables>;

/**
 * __useInsertNotificationMutation__
 *
 * To run a mutation, you first call `useInsertNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNotificationMutation, { data, loading, error }] = useInsertNotificationMutation({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *      formId: // value for 'formId'
 *      responseId: // value for 'responseId'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useInsertNotificationMutation(baseOptions?: Apollo.MutationHookOptions<InsertNotificationMutation, InsertNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertNotificationMutation, InsertNotificationMutationVariables>(InsertNotificationDocument, options);
      }
export type InsertNotificationMutationHookResult = ReturnType<typeof useInsertNotificationMutation>;
export type InsertNotificationMutationResult = Apollo.MutationResult<InsertNotificationMutation>;
export const NotificationsDocument = /*#__PURE__*/ gql`
    subscription Notifications($ownerId: String!) {
  Notification(
    where: {ownerId: {_eq: $ownerId}}
    order_by: [{createdAt: desc}]
    limit: 5
  ) {
    id
    description
    createdAt
    read
  }
}
    `;

/**
 * __useNotificationsSubscription__
 *
 * To run a query within a React component, call `useNotificationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsSubscription({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useNotificationsSubscription(baseOptions: Apollo.SubscriptionHookOptions<NotificationsSubscription, NotificationsSubscriptionVariables> & ({ variables: NotificationsSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NotificationsSubscription, NotificationsSubscriptionVariables>(NotificationsDocument, options);
      }
export type NotificationsSubscriptionHookResult = ReturnType<typeof useNotificationsSubscription>;
export type NotificationsSubscriptionResult = Apollo.SubscriptionResult<NotificationsSubscription>;
export const ReadNotificationDocument = /*#__PURE__*/ gql`
    mutation ReadNotification($id: Int!) {
  update_Notification(where: {id: {_eq: $id}}, _set: {read: true}) {
    affected_rows
  }
}
    `;
export type ReadNotificationMutationFn = Apollo.MutationFunction<ReadNotificationMutation, ReadNotificationMutationVariables>;

/**
 * __useReadNotificationMutation__
 *
 * To run a mutation, you first call `useReadNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readNotificationMutation, { data, loading, error }] = useReadNotificationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReadNotificationMutation(baseOptions?: Apollo.MutationHookOptions<ReadNotificationMutation, ReadNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReadNotificationMutation, ReadNotificationMutationVariables>(ReadNotificationDocument, options);
      }
export type ReadNotificationMutationHookResult = ReturnType<typeof useReadNotificationMutation>;
export type ReadNotificationMutationResult = Apollo.MutationResult<ReadNotificationMutation>;
export const ReadAllNotificationsDocument = /*#__PURE__*/ gql`
    mutation ReadAllNotifications($ownerId: String!) {
  update_Notification(where: {ownerId: {_eq: $ownerId}}, _set: {read: true}) {
    affected_rows
  }
}
    `;
export type ReadAllNotificationsMutationFn = Apollo.MutationFunction<ReadAllNotificationsMutation, ReadAllNotificationsMutationVariables>;

/**
 * __useReadAllNotificationsMutation__
 *
 * To run a mutation, you first call `useReadAllNotificationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadAllNotificationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readAllNotificationsMutation, { data, loading, error }] = useReadAllNotificationsMutation({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useReadAllNotificationsMutation(baseOptions?: Apollo.MutationHookOptions<ReadAllNotificationsMutation, ReadAllNotificationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReadAllNotificationsMutation, ReadAllNotificationsMutationVariables>(ReadAllNotificationsDocument, options);
      }
export type ReadAllNotificationsMutationHookResult = ReturnType<typeof useReadAllNotificationsMutation>;
export type ReadAllNotificationsMutationResult = Apollo.MutationResult<ReadAllNotificationsMutation>;