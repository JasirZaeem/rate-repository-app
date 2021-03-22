import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://192.168.100.18:5000/graphql",
});

const createApolloClient = () =>
  new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

export default createApolloClient;
