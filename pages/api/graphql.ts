import { startServerAndCreateNextHandler } from "@/apolloServerHandler/nextServerHandler";
import { createContext } from "@/schema/context";
import { permissions } from "@/schema/permissions";
import { schema } from "@/schema/schema";
import { ApolloServer } from "@apollo/server";
import { applyMiddleware } from "graphql-middleware";

const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  introspection: true,
  persistedQueries: false,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => createContext({ req, res }),
});
