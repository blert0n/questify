import { queryField, nonNull, list } from 'nexus'

export const AnswerFindManyQuery = queryField('findManyAnswer', {
  type: nonNull(list(nonNull('Answer'))),
  args: {
    where: 'AnswerWhereInput',
    orderBy: list('AnswerOrderByWithRelationInput'),
    cursor: 'AnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('AnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.answer.findMany({
      ...args,
      ...select,
    })
  },
})
