import { mutationField, nonNull } from 'nexus'

export const AnswerCreateOneMutation = mutationField('createOneAnswer', {
  type: nonNull('Answer'),
  args: {
    data: nonNull('AnswerCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.answer.create({
      data,
      ...select,
    })
  },
})
