import { queryField, list } from 'nexus'

export const FormFindFirstQuery = queryField('findFirstForm', {
  type: 'Form',
  args: {
    where: 'FormWhereInput',
    orderBy: list('FormOrderByWithRelationInput'),
    cursor: 'FormWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FormScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.form.findFirst({
      ...args,
      ...select,
    })
  },
})
