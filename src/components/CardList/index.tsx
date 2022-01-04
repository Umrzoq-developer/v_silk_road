import Card from "@/components/Card";
import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "@/graphql/exchangeClient";
import { IRate } from "@/types/exchanges";
import "./index.css";

const CardList = () => {
  const { data, loading } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="wrapper">
      <h3 className="card_title">Graphql Card1s</h3>
      <div className="card__container">
        {data?.rates?.map((item: IRate) => {
          return <Card key={item.currency} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
