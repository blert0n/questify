import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useAuth } from "@clerk/nextjs";
import { GetTokenOptions } from "@clerk/types";
import { PropsWithChildren, useMemo } from "react";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { OperationDefinitionNode } from "graphql";

type WindowWithClerk = Window & {
  Clerk?: {
    session?: {
      getToken(options?: GetTokenOptions): Promise<string | null>;
    };
  };
};

export const getSessionToken = async () => {
  if (!(window as WindowWithClerk).Clerk?.session) return null;
  return (
    (await (window as WindowWithClerk)?.Clerk?.session?.getToken({
      template: "questify-hasura",
    })) ?? null
  );
};

const cache = new InMemoryCache({
  // typePolicies: {
  //   Query: {
  //     fields: {
  //       Form: {
  //         merge: (_existing, _incoming = []) => {
  //           return _incoming;
  //         },
  //       },
  //     },
  //   },
  // },
});

const GRAPHQL_WS_ENDPOINT =
  process.env["NEXT_PUBLIC_HASURA_WS_ENDPOINT"] ??
  "ws://localhost:8080/v1/graphql";

const GRAPHQL_HTTP_ENDPOINT =
  process.env["NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT"] ||
  "http://localhost:3000/api/graphql";

const authLink = setContext(async (_, { headers }) => {
  const token = await getSessionToken();
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  };
});

const webSocketClient =
  typeof window === "undefined"
    ? null
    : new SubscriptionClient(GRAPHQL_WS_ENDPOINT, {
        lazy: true,
        reconnect: true,
      });

const wsLink = webSocketClient ? new WebSocketLink(webSocketClient) : null;

const httpLink = new HttpLink({
  uri: GRAPHQL_HTTP_ENDPOINT,
  credentials: "same-origin",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const error of graphQLErrors) {
      if (typeof window !== "undefined") {
        console.log(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`
        );
      }
    }
  }
  if (networkError) {
    console.log(
      `[Network error]: ${networkError.message} ${networkError.stack}`
    );
  }
});

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink.concat(httpLink)]),
  cache,
});

const QuestifyApolloProvider = ({ children }: PropsWithChildren) => {
  const { getToken } = useAuth();

  const client = useMemo(() => {
    const authMiddleware = setContext(async (_, { headers }) => {
      const token = await getToken({ template: "questify-hasura" });

      return {
        headers: {
          ...headers,
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
      };
    });

    const terminatingLink = wsLink
      ? split(
          ({ query }) => {
            const { kind, operation } = getMainDefinition(
              query
            ) as OperationDefinitionNode;
            return (
              kind === "OperationDefinition" &&
              operation === "subscription" &&
              typeof window !== "undefined"
            );
          },
          wsLink,
          authMiddleware.concat(httpLink)
        )
      : httpLink;

    return new ApolloClient({
      link: ApolloLink.from([errorLink, terminatingLink]),
      cache,
    });
  }, [getToken]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { apolloClient, QuestifyApolloProvider };
