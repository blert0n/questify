/**
 * @type {import('@paljs/types').Config}
 **/

const common = {
    excludeFieldsByModel: {
      // Model: ['field1', 'field2', 'fieldN'],
    },
    // excludeQueriesAndMutations: ['deleteMany', 'createMany', 'updateMany'],
    excludeQueriesAndMutationsByModel: {
      // all possible resolvers : ['findUnique','findFirst','findMany','findCount','aggregate','createOne','updateOne','upsertOne','deleteOne','updateMany','deleteMany']
      // Model : ['resolver','resolver2'] - exclude generation for resolver
      User: [
        'findUnique',
        'findCount',
        'aggregate',
        'createOne',
        'upsertOne',
        'updateMany',
        'deleteMany',
      ],
    },
    excludeModels: [
      // { name: 'model', queries: true, mutations: true },
    ],
  }
  
  module.exports = {
    backend: {
      ...common,
      generator: 'nexus',
      output:__dirname + '/schema/types',
      outputs: {
        schema: __dirname + '/schema/generated/schema.graphql',
        typegen: __dirname + '/schema/generated/nexus.ts',
      },
    },
  }
  