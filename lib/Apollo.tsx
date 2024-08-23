import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useAuth } from "@clerk/nextjs";
import { PropsWithChildren, useMemo } from "react";

const cache = new InMemoryCache({});

const GRAPHQL_HTTP_ENDPOINT =
  process.env["NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT"] ||
  "http://localhost:3000/api/graphql";

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

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
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: ApolloLink.from([errorLink, authMiddleware.concat(httpLink)]),
      cache: new InMemoryCache(),
    });
  }, [getToken]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { apolloClient, QuestifyApolloProvider };
