import { objectType } from 'nexus'

export const Answer = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Answer',
  definition(t) {
    t.string('id')
    t.string('value')
    t.nullable.string('responseId')
    t.nullable.string('formItemId')
    t.nullable.field('FormItem', {
      type: 'FormItem',
      args: {
        where: 'FormItemWhereInput',
      },
      resolve(root: any) {
        return root.FormItem
      },
    })
  },
})
