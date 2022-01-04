import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const feedClient = new ApolloClient({
  uri: "https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
