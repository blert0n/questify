import { queryField, nonNull, list } from 'nexus'

export const FormItemFindCountQuery = queryField('findManyFormItemCount', {
  type: nonNull('Int'),
  args: {
    where: 'FormItemWhereInput',
    orderBy: list('FormItemOrderByWithRelationInput'),
    cursor: 'FormItemWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FormItemScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.formItem.count(args as any)
  },
})
