import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const cache = new InMemoryCache({});

let GRAPHQL_HTTP_ENDPOINT =
  process.env["NEXT_PUBLIC_GRAPHQL_ENDPOINT"] ||
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
apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink.concat(httpLink)]),
  cache,
});

export { apolloClient };
