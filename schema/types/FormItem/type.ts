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
    t.field('type', { type: 'FormType' })
    t.int('order')
    t.nullable.json('style')
    t.int('section')
    t.string('formId')
    t.field('Form', {
      type: 'Form',
      resolve(root: any) {
        return root.Form
      },
    })
  },
})
