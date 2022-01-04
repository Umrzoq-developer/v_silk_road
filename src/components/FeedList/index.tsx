import React from "react";
import { GET_DOGS } from "@/graphql/feedQuery";
import { useQuery } from "@apollo/client";
import "./index.css";

interface IFeed {
  id: string;
  breed: string;
}

const FeedList = () => {
  const { data, loading } = useQuery(GET_DOGS);

  if (loading) return <div>loading.....</div>;
  return (
    <div className="feed_wrap">
      {data?.dogs?.map((item: IFeed) => {
        return <div key={item.id}>{item.breed}</div>;
      })}
    </div>
  );
};

export default React.memo(FeedList);
