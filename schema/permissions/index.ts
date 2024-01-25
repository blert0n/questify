import { shield, and } from "graphql-shield";
import { rules } from "./rules";

export const permissions = shield(
  {
    Query: {
      findManyForm: and(rules.isAuthenticatedUser, rules.injectUserOnWhere),
      findManyFolder: and(rules.isAuthenticatedUser, rules.injectUserOnWhere),
    },
    Mutation: {
      createOneForm: and(rules.isAuthenticatedUser, rules.injectUserOnData),
      deleteOneForm: and(rules.isAuthenticatedUser, rules.injectUserOnWhere),
      updateOneForm: and(rules.isAuthenticatedUser, rules.injectUserOnWhere),
      upsertOneFolder: and(rules.isAuthenticatedUser, rules.injectUserOnCreate),
      deleteOneFolder: and(rules.isAuthenticatedUser, rules.injectUserOnWhere),
    },
  },
  {
    debug: true,
  }
);
