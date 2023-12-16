import { mutationField, nonNull } from 'nexus'

export const FormUpdateOneMutation = mutationField('updateOneForm', {
  type: nonNull('Form'),
  args: {
    data: nonNull('FormUpdateInput'),
    where: nonNull('FormWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.form.update({
      where,
      data,
      ...select,
    })
  },
})
