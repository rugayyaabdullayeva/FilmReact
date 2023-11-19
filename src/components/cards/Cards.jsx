import Card from "../card/index"
import React from 'react'

const Cards = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => {
        return <Card key={index} item={card} />;
      })}
    </div>
  )
}

export default Cards
