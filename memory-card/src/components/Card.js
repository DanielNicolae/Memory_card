import React from "react";
import "./Card.css";

export default function Card(props) {

  return (
    <div className={`CardContainer ${props.id}`}>
      <div className={`CardProperties ${props.id}`}>
        <div className={`CardsLife ${props.id}`}>
          <div className={`Life ${props.id}`}>Life</div>
          {props.cardLife}
        </div>
        <div className={`CardsAttack ${props.id}`}>
          <div className={`Attack ${props.id}`}>Attack</div>
          {props.cardAttack}
        </div>
      </div>
      <img className={`Image ${props.id}`} src={props.cardImage} alt={props.imageDesc} width={"512"} height={"512"} />
    </div>
  );
}