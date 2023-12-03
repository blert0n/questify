import { rule, shield } from "graphql-shield";
import { getUserId } from "../auth";
import { Context } from "../context";

export const rules = {
  isAuthenticatedUser: rule()((_parent, _args, context: Context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  accessOwnData: rule()((_parent, args, context: Context) => {
    const userId = getUserId(context);
    if (!userId) return false;
    args.where = {
      ...args.where,
      userId,
    };
    return true;
  }),
  accessOwnUserData: rule()((_parent, args, context: Context) => {
    const userId = getUserId(context);
    if (!userId) return false;
    args.where = {
      ...args.where,
      id: userId,
    };
    return true;
  }),

  injectUserOnCreate: rule()((_parent, args, context: Context) => {
    const userId = getUserId(context);
    if (!userId) return false;
    args.create = {
      ...args.create,
      User: {
        connect: {
          id: userId,
        },
      },
    };
    return true;
  }),
  interceptUserId: rule()((_parent, args, context: Context) => {
    const userId = getUserId(context);
    if (!userId) return false;
    args.where = { ...args.where, userId: { equals: userId } };
    return true;
  }),
};
