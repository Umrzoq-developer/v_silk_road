import { IRate } from "@/types/exchanges";
import React from "react";
import "./card.css";

const Card = ({ currency, rate }: IRate) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h3>{currency}</h3>
        <p>{rate}</p>
      </div>
    </div>
  );
};

export default React.memo(Card);
