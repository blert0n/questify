import { queryField, nonNull, list } from 'nexus'

export const FormItemFindManyQuery = queryField('findManyFormItem', {
  type: nonNull(list(nonNull('FormItem'))),
  args: {
    where: 'FormItemWhereInput',
    orderBy: list('FormItemOrderByWithRelationInput'),
    cursor: 'FormItemWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FormItemScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.formItem.findMany({
      ...args,
      ...select,
    })
  },
})
