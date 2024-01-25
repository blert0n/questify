import { queryField, nonNull, list } from 'nexus'

export const FolderFindManyQuery = queryField('findManyFolder', {
  type: nonNull(list(nonNull('Folder'))),
  args: {
    where: 'FolderWhereInput',
    orderBy: list('FolderOrderByWithRelationInput'),
    cursor: 'FolderWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FolderScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.folder.findMany({
      ...args,
      ...select,
    })
  },
})
