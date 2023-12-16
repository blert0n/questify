import { mutationField, nonNull } from 'nexus'

export const FormItemDeleteOneMutation = mutationField('deleteOneFormItem', {
  type: 'FormItem',
  args: {
    where: nonNull('FormItemWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.formItem.delete({
      where,
      ...select,
    })
  },
})
