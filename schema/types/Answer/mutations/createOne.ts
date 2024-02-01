import { mutationField, nonNull } from 'nexus'

export const AnswerCreateOneMutation = mutationField('createOneAnswer', {
  type: nonNull('Answer'),
  args: {
    data: 'AnswerCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.answer.create({
      data,
      ...select,
    })
  },
})
