import React, { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card";

function App() {
  const [opponentsAttack, setOpponentsAttack] = useState(0);
  const [myAttack, setMyAttack] = useState(0);
  const [myCard1, setMyCard1] = useState({
    life: 10,
    attack: 5
  });
  const [myCard2, setMyCard2] = useState({
    life: 8,
    attack: 4
  });
  const [myCard3, setMyCard3] = useState({
    life: 12,
    attack: 5
  });
  const [myCard4, setMyCard4] = useState({
    life: 4,
    attack: 2
  });
  const [myCard5, setMyCard5] = useState({
    life: 2,
    attack: 1
  });

  useEffect(() => {
    const myTable = document.getElementsByClassName("MyCardsOnTable")[0];
    const opponentsTable = document.getElementsByClassName("OpponentsCardsOnTable")[0];

    const insertCardOnTable = (e) => {
      const opponentsCards = document.getElementsByClassName("OpponentsCards")[0].children;
      const randomCardNum = Math.floor(Math.random() * opponentsCards.length);
      const getOpponentsAttack = opponentsCards[randomCardNum].parentNode.firstChild.firstChild.children[1].textContent.split('')[6];
      setOpponentsAttack(getOpponentsAttack);
      console.log(`OpponentsAttack=${getOpponentsAttack}`);
      const getOpponentsLife = opponentsCards[randomCardNum].parentNode.firstChild.firstChild.children[0].textContent.split('')[4];

      function setMyCard(cardClass, setMyCardNum) {
        if (e.target.className === cardClass) {
          const getMyAttack = e.target.parentNode.firstChild.children[1].textContent.split('')[6];
          setMyAttack(getMyAttack);
          console.log(`MyAttack=${getMyAttack}`);
          const getMyLife = e.target.parentNode.firstChild.children[0].textContent.split('')[4];
          const parent = e.target.parentNode.parentNode.className;
          console.log(`Card's parent: ${parent}`);
          if (parent === "MyCards") {
            setMyCardNum(prevState => ({
              ...prevState,
              life: getMyLife - getOpponentsAttack
            }));
          }
          myTable.appendChild(e.target.parentNode);
          opponentsTable.appendChild(opponentsCards[randomCardNum]);
        }
      }
      setMyCard("CardMask MyCard1", setMyCard1);
      setMyCard("CardMask MyCard2", setMyCard2);
      setMyCard("CardMask MyCard3", setMyCard3);
      setMyCard("CardMask MyCard4", setMyCard4);
      setMyCard("CardMask MyCard5", setMyCard5);
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
        <div className='OpponentsCards'>
          <Card
            cardLife={10}
            cardAttack={5}
            enemyAttack={myAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard1"}
          />
          <Card
            cardLife={8}
            cardAttack={4}
            enemyAttack={myAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard2"}
          />
          <Card
            cardLife={12}
            cardAttack={5}
            enemyAttack={myAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard3"}
          />
          <Card
            cardLife={4}
            cardAttack={2}
            enemyAttack={myAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard4"}
          />
          <Card
            cardLife={2}
            cardAttack={1}
            enemyAttack={myAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard5"}
          />
        </div>
        <div className='Table'>
          <div className='OpponentsCardsOnTable'></div>
          <div className='MyCardsOnTable'></div>
        </div>
        <div className='MyCards'>
          <Card
            cardLife={myCard1.life}
            cardAttack={myCard1.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"MyCard1"}
          />
          <Card
            cardLife={myCard1.life}
            cardAttack={myCard1.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"MyCard2"}
          />
          <Card
            cardLife={myCard3.life}
            cardAttack={myCard3.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"MyCard3"}
          />
          <Card
            cardLife={myCard4.life}
            cardAttack={myCard4.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"MyCard4"}
          />
          <Card
            cardLife={myCard5.life}
            cardAttack={myCard5.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"MyCard5"}
          />
        </div>

      </main>
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
