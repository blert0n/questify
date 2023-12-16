import { mutationField, nonNull } from 'nexus'

export const FormCreateOneMutation = mutationField('createOneForm', {
  type: nonNull('Form'),
  args: {
    data: nonNull('FormCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.form.create({
      data,
      ...select,
    })
  },
})
