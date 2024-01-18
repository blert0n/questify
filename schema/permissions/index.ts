import { shield, and } from "graphql-shield";
import { rules } from "./rules";

export const permissions = shield(
  {
    Query: {},
    Mutation: {
      createOneForm: and(rules.isAuthenticatedUser, rules.injectUserOnData),
    },
  },
  {
    debug: true,
  }
);
