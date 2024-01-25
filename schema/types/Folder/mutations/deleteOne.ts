import { mutationField, nonNull } from 'nexus'

export const FolderDeleteOneMutation = mutationField('deleteOneFolder', {
  type: 'Folder',
  args: {
    where: nonNull('FolderWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.folder.delete({
      where,
      ...select,
    })
  },
})
