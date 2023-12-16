import { objectType, list } from 'nexus'

export const Form = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Form',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('ownerId')
    t.int('order')
    t.nullable.json('style')
    t.list.field('items', {
      type: 'FormItem',
      args: {
        where: 'FormItemWhereInput',
        orderBy: list('FormItemOrderByWithRelationInput'),
        cursor: 'FormItemWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('FormItemScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.items
      },
    })
    t.field('_count', {
      type: 'FormCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
