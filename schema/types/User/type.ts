import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.string('password')
    t.string('firstName')
    t.string('lastName')
    t.field('createdAt', { type: 'DateTime' })
  },
})
