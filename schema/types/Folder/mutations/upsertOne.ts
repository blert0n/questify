import { mutationField, nonNull } from 'nexus'

export const FolderUpsertOneMutation = mutationField('upsertOneFolder', {
  type: nonNull('Folder'),
  args: {
    where: nonNull('FolderWhereUniqueInput'),
    create: nonNull('FolderCreateInput'),
    update: nonNull('FolderUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.folder.upsert({
      ...args,
      ...select,
    })
  },
})
