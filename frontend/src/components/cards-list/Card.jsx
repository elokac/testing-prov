import React from "react";
import Link from "next/link";
import Card from "../dashboard/Card";

function Card({ card, toggleCard }) {
  return (
    <div className="flex relative justify-between">
      <input
        onChange={() => toggleCard(card.id)}
        className="absolute -left-3 "
        type="checkbox"
        checked={card.isChecked}
      />
      <Link href="/cards/customer_info">
        <Card href="/cards-list/customer-info" passHref/>
      </Link>
    </div>
  );
}

export default Card;
