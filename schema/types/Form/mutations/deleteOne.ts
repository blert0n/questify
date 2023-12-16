import { mutationField, nonNull } from 'nexus'

export const FormDeleteOneMutation = mutationField('deleteOneForm', {
  type: 'Form',
  args: {
    where: nonNull('FormWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.form.delete({
      where,
      ...select,
    })
  },
})
