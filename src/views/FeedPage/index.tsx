import React from "react";
import { feedClient } from "@/graphql/feedQuery";
import { ApolloProvider } from "@apollo/client";
import FeedList from "@/components/FeedList";
import "./index.css";

const FeedPage = () => {
  return (
    <div className="feed_container">
      <h3>Feed Page</h3>
      <ApolloProvider client={feedClient}>
        <FeedList />
      </ApolloProvider>
    </div>
  );
};

export default React.memo(FeedPage);
