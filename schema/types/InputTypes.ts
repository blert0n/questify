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

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: ['id', 'email', 'password', 'firstName', 'createdAt'],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('firstName', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
  },
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('password', { type: 'StringFilter' })
    t.field('firstName', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_avg', { type: 'UserAvgOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
    t.field('_sum', { type: 'UserSumOrderByAggregateInput' })
  },
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('email', { type: 'StringWithAggregatesFilter' })
    t.field('password', { type: 'StringWithAggregatesFilter' })
    t.field('firstName', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
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

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
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

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
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

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
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

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
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

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('password', { type: 'Int' })
    t.field('firstName', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('firstName', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('firstName', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})
