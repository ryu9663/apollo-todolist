import { ApolloClient, InMemoryCache } from "@apollo/client";
import todoVar from "./stores/todo";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getTodos: {
          read() {
            return todoVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  cache,
});

export default client;
