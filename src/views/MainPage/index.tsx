import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/exchangeClient";
import CardList from "@/components/CardList";

const MainPage = () => {
  return (
    <ApolloProvider client={client}>
      <CardList />
    </ApolloProvider>
  );
};

export default MainPage;
