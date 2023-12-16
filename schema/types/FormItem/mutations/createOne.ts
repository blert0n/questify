import { mutationField, nonNull } from 'nexus'

export const FormItemCreateOneMutation = mutationField('createOneFormItem', {
  type: nonNull('FormItem'),
  args: {
    data: nonNull('FormItemCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.formItem.create({
      data,
      ...select,
    })
  },
})
