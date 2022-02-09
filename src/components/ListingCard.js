import React, { useState } from "react";

function ListingCard({card, setCards, cards}) {
  //sets the state of the like button
  const [like, setLike] = useState(false)

  //changes like state on click
  const handleClick = ()=>{
    setLike(!like)
  }

  const removeLink = `http://localhost:6001/listings/${card.id}`
  //removes item from data on click
  const handleDelete = ()=>{
    fetch(removeLink, { method: 'DELETE' })
    setCards([...cards])
    }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {like ? (
          <button onClick = {handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.description}</span>
        <button onClick = {handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
