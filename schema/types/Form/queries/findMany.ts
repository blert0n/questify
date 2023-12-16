import { queryField, nonNull, list } from 'nexus'

export const FormFindManyQuery = queryField('findManyForm', {
  type: nonNull(list(nonNull('Form'))),
  args: {
    where: 'FormWhereInput',
    orderBy: list('FormOrderByWithRelationInput'),
    cursor: 'FormWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FormScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.form.findMany({
      ...args,
      ...select,
    })
  },
})
