import React, { useState, useEffect } from "react";
import "./Card.css";

export default function Card(enemyAttack, effect, cardImage, imageDesc) {
  const [life, setLife] = useState(10);
  const [attack, setAttack] = useState(5);

  useEffect(() => {
    const setLifeAfterReceiveingDamage = () => {
      setLife(life = life - enemyAttack);
    }
    const setAttackAfterEffect = () => {
      setAttack(attack = attack + effect);
    }
  }, [life, attack]);

  return (
    <div className="CardContainer">
      <div className="CardProperties">
        <div className="CardsLife"></div>
        <div className="CardsAttack"></div>
      </div>
      <div className="CardName"></div>
      <img src={cardImage} alt={imageDesc} />
    </div>
  );
}