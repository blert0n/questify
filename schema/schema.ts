import { makeSchema } from "nexus";
import * as types from "./types";
import * as customTypes from "./customTypes";
import { paljs } from "@paljs/nexus";
import { join } from "path";
import { permissions } from "./permissions";
import { applyMiddleware } from "graphql-middleware";

const schemaDefinition = makeSchema({
  types: [types, customTypes],
  plugins: [paljs()],
  outputs: {
    schema: join(process.cwd(), "/schema/generated/schema.graphql"),
    typegen: join(process.cwd(), "/schema/generated/nexus.ts"),
  },
  contextType: {
    module: join(
      process.cwd(),
      process.env.NODE_ENVIRONTMENT !== "development"
        ? "/schema/context.ts"
        : "/dist/context.js"
    ),
    export: "Context",
  },
});

export const schema = applyMiddleware(schemaDefinition, permissions);
