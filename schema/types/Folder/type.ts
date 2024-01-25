import { objectType, list } from 'nexus'

export const Folder = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Folder',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('ownerId')
    t.list.field('Forms', {
      type: 'Form',
      args: {
        where: 'FormWhereInput',
        orderBy: list('FormOrderByWithRelationInput'),
        cursor: 'FormWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('FormScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.Forms
      },
    })
    t.field('_count', {
      type: 'FolderCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
