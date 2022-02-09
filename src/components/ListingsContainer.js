import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  //sets current card data
  const [cards, setCards] = useState([])

  //fetches current card data
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(
        (result) => {
          setCards(result)
        },

      )
  }, [])
  

  //re-renders results on search
  useEffect(()=>{
    setCards(cards.filter((card)=>{return card.description.toLowerCase().includes(search.toLowerCase())}))
    if(search === ""){
      fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(
        (result) => {
          setCards(result)
        },

      )
    }
  }, [search])
  
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {cards.map((card)=>{
          return <ListingCard cards = {cards} card = {card} setCards = {setCards} key = {card.id}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
