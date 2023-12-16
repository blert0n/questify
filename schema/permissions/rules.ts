import { rule } from "graphql-shield";
import { Context } from "../context";

export const rules = {
  isAuthenticatedUser: rule()((_parent, _args, context: Context) => {
    return Boolean(context.userId);
  }),
  accessOwnForms: rule()((_parent, args, context: Context) => {
    if (!context.userId) return false;
    args.where = {
      ...args.where,
      ownerId: context.userId,
    };
    return true;
  }),

  injectUserOnCreate: rule()((_parent, args, context: Context) => {
    if (!context.userId) return false;
    args.create = {
      ...args.create,
      ownerId: context.userId,
    };
    return true;
  }),
  injectUserOnData: rule()((_parent, args, context: Context) => {
    if (!context.userId) return false;
    args.data = {
      ...args.data,
      ownerId: context.userId,
    };
    return true;
  }),
  interceptOwnerId: rule()((_parent, args, context: Context) => {
    if (!context.userId) return false;
    args.where = { ...args.where, ownerId: { equals: context.userId } };
    return true;
  }),
};
