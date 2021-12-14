import React, { useState, useEffect } from "react";
import "./Card.css";

export default function Card(props) {
  const [life, setLife] = useState(props.cardLife);
  const [attack, setAttack] = useState(props.cardAttack);

  useEffect(() => {
    const setLifeAfterReceivingDamage = (e) => {
      if (e.target.className === "CardContainer" ||
        e.target.className === "CardProperties" ||
        e.target.className === "CardsLife" ||
        e.target.className === "CardsAttack" ||
        e.target.className === "CardName") {
        setLife(life - props.enemyAttack);
      }
    }
    const setAttackAfterEffect = (e) => {
      if (e.target.className === "CardContainer" ||
        e.target.className === "CardProperties" ||
        e.target.className === "CardsLife" ||
        e.target.className === "CardsAttack" ||
        e.target.className === "CardName") {
        setAttack(attack + props.effect);
      }
    }
    document.addEventListener("click", setLifeAfterReceivingDamage);
    document.addEventListener("click", setAttackAfterEffect);
    return () => {
      document.removeEventListener("click", setAttackAfterEffect);
      document.removeEventListener("click", setLifeAfterReceivingDamage);
    };
  }, [life, attack, props.effect, props.enemyAttack]);

  return (
    <div className="CardContainer">
      <div className="CardProperties">
        <div className="CardsLife">
          <div>Life</div>
          {life}
        </div>
        <div className="CardsAttack">
          <div>Attack</div>
          {attack}
        </div>
      </div>
      <div className="CardName">
        {props.cardName}
      </div>
      <img src={props.cardImage} alt={props.imageDesc} />
    </div>
  );
}