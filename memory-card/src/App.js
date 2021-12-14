import React, { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const insertCardOnTable = (e) => {
      const myTable = document.getElementsByClassName("MyCardsOnTable")[0];
      const opponentsTable = document.getElementsByClassName("OpponentsCardsOnTable")[0];
      const opponentsCards = document.getElementsByClassName("OpponetsCards")[0].children;
      const randomCardNum = Math.floor(Math.random() * opponentsCards.length);
      if (e.target.className === "CardContainer") {
        myTable.appendChild(e.target);
        opponentsTable.appendChild(opponentsCards[randomCardNum]);
      }

    };
    document.addEventListener("click", insertCardOnTable);

    return () => {
      document.removeEventListener("click", insertCardOnTable);
    };
  });

  return (
    <React.Fragment>
      <header>
        <div className="Title">
          Ducks vs trucks
        </div>
      </header>
      <main>
        <div className='OpponetsCards'>
          <Card
            cardLife={10}
            cardAttack={5}
            enemyAttack={5}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
          <Card
            cardLife={8}
            cardAttack={4}
            enemyAttack={2}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
          <Card
            cardLife={12}
            cardAttack={5}
            enemyAttack={3}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
          <Card
            cardLife={4}
            cardAttack={2}
            enemyAttack={5}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
          <Card
            cardLife={2}
            cardAttack={1}
            enemyAttack={1}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
        </div>
        <div className='Table'>
          <div className='OpponentsCardsOnTable'></div>
          <div className='MyCardsOnTable'></div>
        </div>
        <div className='MyCards'>
          <Card
            cardLife={10}
            cardAttack={5}
            enemyAttack={5}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
          <Card
            cardLife={8}
            cardAttack={4}
            enemyAttack={2}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
          <Card
            cardLife={12}
            cardAttack={5}
            enemyAttack={3}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
          <Card
            cardLife={4}
            cardAttack={2}
            enemyAttack={5}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
          <Card
            cardLife={2}
            cardAttack={1}
            enemyAttack={1}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
          />
        </div>

      </main>
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
