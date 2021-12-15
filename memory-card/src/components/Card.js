import React from "react";
import "./Card.css";

export default function Card(props) {

  return (
    <div className="CardContainer">
      <div className="CardProperties">
        <div className="CardsLife">
          <div>Life</div>
          {props.cardLife}
        </div>
        <div className="CardsAttack">
          <div>Attack</div>
          {props.cardAttack}
        </div>
      </div>
      <div className="CardName">
        {props.cardName}
      </div>
      <img src={props.cardImage} alt={props.imageDesc} />
      <div className={`CardMask ${props.id}`}></div>
    </div>
  );
}