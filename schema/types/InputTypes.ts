import { enumType, inputObjectType, objectType } from 'nexus'

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const FormScalarFieldEnum = enumType({
  name: 'FormScalarFieldEnum',
  members: ['id', 'name', 'ownerId', 'order', 'style'],
})

export const FormItemScalarFieldEnum = enumType({
  name: 'FormItemScalarFieldEnum',
  members: [
    'id',
    'name',
    'order',
    'section',
    'formId',
    'required',
    'items',
    'image',
    'type',
  ],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const NullableJsonNullValueInput = enumType({
  name: 'NullableJsonNullValueInput',
  members: ['DbNull', 'JsonNull'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const JsonNullValueFilter = enumType({
  name: 'JsonNullValueFilter',
  members: ['DbNull', 'JsonNull', 'AnyNull'],
})

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
})

export const FormType = enumType({
  name: 'FormType',
  members: [
    'SHORT',
    'LONG',
    'SINGLE_CHOICE',
    'MULTIPLE_CHOICE',
    'DROPDOWN',
    'LINEAR_SCALE',
    'DATE',
  ],
})

export const FormWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FormWhereInput' })
    t.list.field('OR', { type: 'FormWhereInput' })
    t.list.field('NOT', { type: 'FormWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('style', { type: 'JsonNullableFilter' })
    t.field('items', { type: 'FormItemListRelationFilter' })
  },
})

export const FormOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('style', { type: 'SortOrderInput' })
    t.field('items', { type: 'FormItemOrderByRelationAggregateInput' })
  },
})

export const FormWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('ownerId_name', { type: 'FormOwnerIdNameCompoundUniqueInput' })
    t.list.field('AND', { type: 'FormWhereInput' })
    t.list.field('OR', { type: 'FormWhereInput' })
    t.list.field('NOT', { type: 'FormWhereInput' })
    t.field('name', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('style', { type: 'JsonNullableFilter' })
    t.field('items', { type: 'FormItemListRelationFilter' })
  },
})

export const FormOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('style', { type: 'SortOrderInput' })
    t.field('_count', { type: 'FormCountOrderByAggregateInput' })
    t.field('_avg', { type: 'FormAvgOrderByAggregateInput' })
    t.field('_max', { type: 'FormMaxOrderByAggregateInput' })
    t.field('_min', { type: 'FormMinOrderByAggregateInput' })
    t.field('_sum', { type: 'FormSumOrderByAggregateInput' })
  },
})

export const FormScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'FormScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'FormScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'FormScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('ownerId', { type: 'StringWithAggregatesFilter' })
    t.field('order', { type: 'IntWithAggregatesFilter' })
    t.field('style', { type: 'JsonNullableWithAggregatesFilter' })
  },
})

export const FormItemWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FormItemWhereInput' })
    t.list.field('OR', { type: 'FormItemWhereInput' })
    t.list.field('NOT', { type: 'FormItemWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('section', { type: 'IntFilter' })
    t.field('formId', { type: 'StringFilter' })
    t.field('required', { type: 'BoolFilter' })
    t.field('items', { type: 'JsonNullableFilter' })
    t.field('image', { type: 'JsonNullableFilter' })
    t.field('type', { type: 'EnumFormTypeFilter' })
    t.field('Form', { type: 'FormRelationFilter' })
  },
})

export const FormItemOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('items', { type: 'SortOrderInput' })
    t.field('image', { type: 'SortOrderInput' })
    t.field('type', { type: 'SortOrder' })
    t.field('Form', { type: 'FormOrderByWithRelationInput' })
  },
})

export const FormItemWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'FormItemWhereInput' })
    t.list.field('OR', { type: 'FormItemWhereInput' })
    t.list.field('NOT', { type: 'FormItemWhereInput' })
    t.field('name', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('section', { type: 'IntFilter' })
    t.field('formId', { type: 'StringFilter' })
    t.field('required', { type: 'BoolFilter' })
    t.field('items', { type: 'JsonNullableFilter' })
    t.field('image', { type: 'JsonNullableFilter' })
    t.field('type', { type: 'EnumFormTypeFilter' })
    t.field('Form', { type: 'FormRelationFilter' })
  },
})

export const FormItemOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('items', { type: 'SortOrderInput' })
    t.field('image', { type: 'SortOrderInput' })
    t.field('type', { type: 'SortOrder' })
    t.field('_count', { type: 'FormItemCountOrderByAggregateInput' })
    t.field('_avg', { type: 'FormItemAvgOrderByAggregateInput' })
    t.field('_max', { type: 'FormItemMaxOrderByAggregateInput' })
    t.field('_min', { type: 'FormItemMinOrderByAggregateInput' })
    t.field('_sum', { type: 'FormItemSumOrderByAggregateInput' })
  },
})

export const FormItemScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'FormItemScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'FormItemScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'FormItemScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('order', { type: 'IntWithAggregatesFilter' })
    t.field('section', { type: 'IntWithAggregatesFilter' })
    t.field('formId', { type: 'StringWithAggregatesFilter' })
    t.field('required', { type: 'BoolWithAggregatesFilter' })
    t.field('items', { type: 'JsonNullableWithAggregatesFilter' })
    t.field('image', { type: 'JsonNullableWithAggregatesFilter' })
    t.field('type', { type: 'EnumFormTypeWithAggregatesFilter' })
  },
})

export const FormCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('items', { type: 'FormItemCreateNestedManyWithoutFormInput' })
  },
})

export const FormUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
    t.field('items', {
      type: 'FormItemUncheckedCreateNestedManyWithoutFormInput',
    })
  },
})

export const FormUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('items', { type: 'FormItemUpdateManyWithoutFormNestedInput' })
  },
})

export const FormUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
    t.field('items', {
      type: 'FormItemUncheckedUpdateManyWithoutFormNestedInput',
    })
  },
})

export const FormCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
  },
})

export const FormUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
  },
})

export const FormUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
  },
})

export const FormItemCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
    t.nonNull.field('Form', { type: 'FormCreateNestedOneWithoutItemsInput' })
  },
})

export const FormItemUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.nonNull.field('formId', { type: 'String' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
    t.field('Form', { type: 'FormUpdateOneRequiredWithoutItemsNestedInput' })
  },
})

export const FormItemUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('formId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormItemCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.nonNull.field('formId', { type: 'String' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormItemUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('formId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const JsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  },
})

export const FormItemListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemListRelationFilter',
  definition(t) {
    t.field('every', { type: 'FormItemWhereInput' })
    t.field('some', { type: 'FormItemWhereInput' })
    t.field('none', { type: 'FormItemWhereInput' })
  },
})

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.field('nulls', { type: 'NullsOrder' })
  },
})

export const FormItemOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const FormOwnerIdNameCompoundUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormOwnerIdNameCompoundUniqueInput',
  definition(t) {
    t.nonNull.field('ownerId', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const FormCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('style', { type: 'SortOrder' })
  },
})

export const FormAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormAvgOrderByAggregateInput',
  definition(t) {
    t.field('order', { type: 'SortOrder' })
  },
})

export const FormMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
  },
})

export const FormMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('ownerId', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
  },
})

export const FormSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormSumOrderByAggregateInput',
  definition(t) {
    t.field('order', { type: 'SortOrder' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const JsonNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedJsonNullableFilter' })
    t.field('_max', { type: 'NestedJsonNullableFilter' })
  },
})

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const EnumFormTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumFormTypeFilter',
  definition(t) {
    t.field('equals', { type: 'FormType' })
    t.list.field('in', { type: 'FormType' })
    t.list.field('notIn', { type: 'FormType' })
    t.field('not', { type: 'NestedEnumFormTypeFilter' })
  },
})

export const FormRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormRelationFilter',
  definition(t) {
    t.field('is', { type: 'FormWhereInput' })
    t.field('isNot', { type: 'FormWhereInput' })
  },
})

export const FormItemCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('items', { type: 'SortOrder' })
    t.field('image', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const FormItemAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemAvgOrderByAggregateInput',
  definition(t) {
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
  },
})

export const FormItemMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const FormItemMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
    t.field('formId', { type: 'SortOrder' })
    t.field('required', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const FormItemSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemSumOrderByAggregateInput',
  definition(t) {
    t.field('order', { type: 'SortOrder' })
    t.field('section', { type: 'SortOrder' })
  },
})

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const EnumFormTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumFormTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'FormType' })
    t.list.field('in', { type: 'FormType' })
    t.list.field('notIn', { type: 'FormType' })
    t.field('not', { type: 'NestedEnumFormTypeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumFormTypeFilter' })
    t.field('_max', { type: 'NestedEnumFormTypeFilter' })
  },
})

export const FormItemCreateNestedManyWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateNestedManyWithoutFormInput',
  definition(t) {
    t.list.field('create', { type: 'FormItemCreateWithoutFormInput' })
    t.list.field('connectOrCreate', {
      type: 'FormItemCreateOrConnectWithoutFormInput',
    })
    t.field('createMany', { type: 'FormItemCreateManyFormInputEnvelope' })
    t.list.field('connect', { type: 'FormItemWhereUniqueInput' })
  },
})

export const FormItemUncheckedCreateNestedManyWithoutFormInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'FormItemUncheckedCreateNestedManyWithoutFormInput',
    definition(t) {
      t.list.field('create', { type: 'FormItemCreateWithoutFormInput' })
      t.list.field('connectOrCreate', {
        type: 'FormItemCreateOrConnectWithoutFormInput',
      })
      t.field('createMany', { type: 'FormItemCreateManyFormInputEnvelope' })
      t.list.field('connect', { type: 'FormItemWhereUniqueInput' })
    },
  })

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const FormItemUpdateManyWithoutFormNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateManyWithoutFormNestedInput',
  definition(t) {
    t.list.field('create', { type: 'FormItemCreateWithoutFormInput' })
    t.list.field('connectOrCreate', {
      type: 'FormItemCreateOrConnectWithoutFormInput',
    })
    t.list.field('upsert', {
      type: 'FormItemUpsertWithWhereUniqueWithoutFormInput',
    })
    t.field('createMany', { type: 'FormItemCreateManyFormInputEnvelope' })
    t.list.field('set', { type: 'FormItemWhereUniqueInput' })
    t.list.field('disconnect', { type: 'FormItemWhereUniqueInput' })
    t.list.field('delete', { type: 'FormItemWhereUniqueInput' })
    t.list.field('connect', { type: 'FormItemWhereUniqueInput' })
    t.list.field('update', {
      type: 'FormItemUpdateWithWhereUniqueWithoutFormInput',
    })
    t.list.field('updateMany', {
      type: 'FormItemUpdateManyWithWhereWithoutFormInput',
    })
    t.list.field('deleteMany', { type: 'FormItemScalarWhereInput' })
  },
})

export const FormItemUncheckedUpdateManyWithoutFormNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'FormItemUncheckedUpdateManyWithoutFormNestedInput',
    definition(t) {
      t.list.field('create', { type: 'FormItemCreateWithoutFormInput' })
      t.list.field('connectOrCreate', {
        type: 'FormItemCreateOrConnectWithoutFormInput',
      })
      t.list.field('upsert', {
        type: 'FormItemUpsertWithWhereUniqueWithoutFormInput',
      })
      t.field('createMany', { type: 'FormItemCreateManyFormInputEnvelope' })
      t.list.field('set', { type: 'FormItemWhereUniqueInput' })
      t.list.field('disconnect', { type: 'FormItemWhereUniqueInput' })
      t.list.field('delete', { type: 'FormItemWhereUniqueInput' })
      t.list.field('connect', { type: 'FormItemWhereUniqueInput' })
      t.list.field('update', {
        type: 'FormItemUpdateWithWhereUniqueWithoutFormInput',
      })
      t.list.field('updateMany', {
        type: 'FormItemUpdateManyWithWhereWithoutFormInput',
      })
      t.list.field('deleteMany', { type: 'FormItemScalarWhereInput' })
    },
  })

export const FormCreateNestedOneWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateNestedOneWithoutItemsInput',
  definition(t) {
    t.field('create', { type: 'FormCreateWithoutItemsInput' })
    t.field('connectOrCreate', { type: 'FormCreateOrConnectWithoutItemsInput' })
    t.field('connect', { type: 'FormWhereUniqueInput' })
  },
})

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
  },
})

export const EnumFormTypeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumFormTypeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'FormType' })
  },
})

export const FormUpdateOneRequiredWithoutItemsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateOneRequiredWithoutItemsNestedInput',
  definition(t) {
    t.field('create', { type: 'FormCreateWithoutItemsInput' })
    t.field('connectOrCreate', { type: 'FormCreateOrConnectWithoutItemsInput' })
    t.field('upsert', { type: 'FormUpsertWithoutItemsInput' })
    t.field('connect', { type: 'FormWhereUniqueInput' })
    t.field('update', { type: 'FormUpdateToOneWithWhereWithoutItemsInput' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedJsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedJsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  },
})

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const NestedEnumFormTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumFormTypeFilter',
  definition(t) {
    t.field('equals', { type: 'FormType' })
    t.list.field('in', { type: 'FormType' })
    t.list.field('notIn', { type: 'FormType' })
    t.field('not', { type: 'NestedEnumFormTypeFilter' })
  },
})

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const NestedEnumFormTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumFormTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'FormType' })
    t.list.field('in', { type: 'FormType' })
    t.list.field('notIn', { type: 'FormType' })
    t.field('not', { type: 'NestedEnumFormTypeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumFormTypeFilter' })
    t.field('_max', { type: 'NestedEnumFormTypeFilter' })
  },
})

export const FormItemCreateWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemUncheckedCreateWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedCreateWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemCreateOrConnectWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateOrConnectWithoutFormInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormItemWhereUniqueInput' })
    t.nonNull.field('create', { type: 'FormItemCreateWithoutFormInput' })
  },
})

export const FormItemCreateManyFormInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateManyFormInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'FormItemCreateManyFormInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const FormItemUpsertWithWhereUniqueWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpsertWithWhereUniqueWithoutFormInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormItemWhereUniqueInput' })
    t.nonNull.field('update', { type: 'FormItemUpdateWithoutFormInput' })
    t.nonNull.field('create', { type: 'FormItemCreateWithoutFormInput' })
  },
})

export const FormItemUpdateWithWhereUniqueWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateWithWhereUniqueWithoutFormInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormItemWhereUniqueInput' })
    t.nonNull.field('data', { type: 'FormItemUpdateWithoutFormInput' })
  },
})

export const FormItemUpdateManyWithWhereWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateManyWithWhereWithoutFormInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormItemScalarWhereInput' })
    t.nonNull.field('data', { type: 'FormItemUpdateManyMutationInput' })
  },
})

export const FormItemScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FormItemScalarWhereInput' })
    t.list.field('OR', { type: 'FormItemScalarWhereInput' })
    t.list.field('NOT', { type: 'FormItemScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('order', { type: 'IntFilter' })
    t.field('section', { type: 'IntFilter' })
    t.field('formId', { type: 'StringFilter' })
    t.field('required', { type: 'BoolFilter' })
    t.field('items', { type: 'JsonNullableFilter' })
    t.field('image', { type: 'JsonNullableFilter' })
    t.field('type', { type: 'EnumFormTypeFilter' })
  },
})

export const FormCreateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
  },
})

export const FormUncheckedCreateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedCreateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('ownerId', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Json' })
  },
})

export const FormCreateOrConnectWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormCreateOrConnectWithoutItemsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'FormWhereUniqueInput' })
    t.nonNull.field('create', { type: 'FormCreateWithoutItemsInput' })
  },
})

export const FormUpsertWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpsertWithoutItemsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'FormUpdateWithoutItemsInput' })
    t.nonNull.field('create', { type: 'FormCreateWithoutItemsInput' })
    t.field('where', { type: 'FormWhereInput' })
  },
})

export const FormUpdateToOneWithWhereWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateToOneWithWhereWithoutItemsInput',
  definition(t) {
    t.field('where', { type: 'FormWhereInput' })
    t.nonNull.field('data', { type: 'FormUpdateWithoutItemsInput' })
  },
})

export const FormUpdateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUpdateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
  },
})

export const FormUncheckedUpdateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormUncheckedUpdateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('ownerId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('style', { type: 'Json' })
  },
})

export const FormItemCreateManyFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemCreateManyFormInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('name', { type: 'String' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('required', { type: 'Boolean' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.nonNull.field('type', { type: 'FormType' })
  },
})

export const FormItemUpdateWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUpdateWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormItemUncheckedUpdateWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedUpdateWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const FormItemUncheckedUpdateManyWithoutFormInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FormItemUncheckedUpdateManyWithoutFormInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', { type: 'IntFieldUpdateOperationsInput' })
    t.field('section', { type: 'IntFieldUpdateOperationsInput' })
    t.field('required', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('items', { type: 'Json' })
    t.field('image', { type: 'Json' })
    t.field('type', { type: 'EnumFormTypeFieldUpdateOperationsInput' })
  },
})

export const AggregateForm = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateForm',
  definition(t) {
    t.nullable.field('_count', { type: 'FormCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'FormAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'FormSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'FormMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'FormMaxAggregateOutputType' })
  },
})

export const AggregateFormItem = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateFormItem',
  definition(t) {
    t.nullable.field('_count', { type: 'FormItemCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'FormItemAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'FormItemSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'FormItemMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'FormItemMaxAggregateOutputType' })
  },
})

export const FormCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormCountOutputType',
  definition(t) {
    t.field('items', { type: 'Int' })
  },
})

export const FormCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('ownerId', { type: 'Int' })
    t.field('order', { type: 'Int' })
    t.field('style', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const FormAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('order', { type: 'Float' })
  },
})

export const FormSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormSumAggregateOutputType',
  definition(t) {
    t.nullable.field('order', { type: 'Int' })
  },
})

export const FormMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('ownerId', { type: 'String' })
    t.nullable.field('order', { type: 'Int' })
  },
})

export const FormMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('ownerId', { type: 'String' })
    t.nullable.field('order', { type: 'Int' })
  },
})

export const FormItemCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('order', { type: 'Int' })
    t.field('section', { type: 'Int' })
    t.field('formId', { type: 'Int' })
    t.field('required', { type: 'Int' })
    t.field('items', { type: 'Int' })
    t.field('image', { type: 'Int' })
    t.field('type', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const FormItemAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('order', { type: 'Float' })
    t.nullable.field('section', { type: 'Float' })
  },
})

export const FormItemSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemSumAggregateOutputType',
  definition(t) {
    t.nullable.field('order', { type: 'Int' })
    t.nullable.field('section', { type: 'Int' })
  },
})

export const FormItemMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('order', { type: 'Int' })
    t.nullable.field('section', { type: 'Int' })
    t.nullable.field('formId', { type: 'String' })
    t.nullable.field('required', { type: 'Boolean' })
    t.nullable.field('type', { type: 'FormType' })
  },
})

export const FormItemMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'FormItemMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('order', { type: 'Int' })
    t.nullable.field('section', { type: 'Int' })
    t.nullable.field('formId', { type: 'String' })
    t.nullable.field('required', { type: 'Boolean' })
    t.nullable.field('type', { type: 'FormType' })
  },
})
