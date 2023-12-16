import { mutationField, nonNull } from 'nexus'

export const FormItemUpdateOneMutation = mutationField('updateOneFormItem', {
  type: nonNull('FormItem'),
  args: {
    data: nonNull('FormItemUpdateInput'),
    where: nonNull('FormItemWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.formItem.update({
      where,
      data,
      ...select,
    })
  },
})
