import { objectType } from 'nexus'

export const FormItem = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FormItem',
  definition(t) {
    t.string('id')
    t.string('name')
    t.int('order')
    t.int('section')
    t.string('formId')
    t.boolean('required')
    t.nullable.json('items')
    t.nullable.json('image')
    t.field('type', { type: 'FormType' })
    t.field('Form', {
      type: 'Form',
      resolve(root: any) {
        return root.Form
      },
    })
  },
})
