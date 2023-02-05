import React, { useState } from "react";
// import Card from "../../components/cards-list/Card";
import Container from "../../components/dashboard/Container";
import Search from "../../components/search/Search";
import data from "../../cards-list-data";
import Print from "../../components/cards-list/Print";
import Card from "../../components/dashboard/Card";
import Link from "next/link";

const CardsList = () => {
  const [cards, setCards] = useState(data);
  const toggleCard = (id) =>
    setCards((cards) =>
      cards.map((card) => {
        return id === card.id
          ? {
              ...card,
              isChecked: !card.isChecked,
            }
          : card;
      })
    );

  const allChecked = () =>
    cards.filter((card) => card.isChecked).length === cards.length;

  const toggleAllCards = () =>
    setCards((cards) =>
      cards.map((card) =>
        !allChecked()
          ? {
              ...card,
              isChecked: true,
            }
          : {
              ...card,
              isChecked: false,
            }
      )
    );

  return (
    <Container title="Cards List">
      {() => (
        <>
          <div className="relative">
            <Search />
            <div
              style={{ height: "calc(100vh - 144.2px)" }}
              className="overflow-y-scroll my-[18px] bg-white rounded-xl relative p-7"
            >
              <div className="rounded flex bg-white h-fit flex-wrap gap-7 overflow-hidden">
                {cards.map((card) => (
                  // <Card key={card.id} card={card} toggleCard={toggleCard} />
                  <div className="flex gap-2">
                    <input
                      onChange={() => toggleCard(card.id)}
                      className="w-5 h-5"
                      type="checkbox"
                      checked={card.isChecked}
                    />
                    <div className="cursor-pointer">
                      <Card name="Obaleye Smit" href='/cards-list/customer_info' passHref/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="absolute bottom-0"
              style={{
                width: "calc(100% + 36px)",
                marginLeft: "-18px",
                marginBottom: "-18px",
              }}
            >
              <Print cards={cards} toggleAllCards={toggleAllCards} />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default CardsList;
