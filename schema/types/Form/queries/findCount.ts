import { queryField, nonNull, list } from 'nexus'

export const FormFindCountQuery = queryField('findManyFormCount', {
  type: nonNull('Int'),
  args: {
    where: 'FormWhereInput',
    orderBy: list('FormOrderByWithRelationInput'),
    cursor: 'FormWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FormScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.form.count(args as any)
  },
})
