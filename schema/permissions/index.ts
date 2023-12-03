import { shield } from "graphql-shield";
import { rules } from "./rules";

export const permissions = shield(
  {
    Query: {},
    Mutation: {},
  },
  {
    debug: true,
  }
);
