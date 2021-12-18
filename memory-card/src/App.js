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
  const [opponentsCard1, setOpponentsCard1] = useState({
    life: 8,
    attack: 2
  });
  const [opponentsCard2, setOpponentsCard2] = useState({
    life: 7,
    attack: 6
  });
  const [opponentsCard3, setOpponentsCard3] = useState({
    life: 8,
    attack: 5
  });
  const [opponentsCard4, setOpponentsCard4] = useState({
    life: 4,
    attack: 1
  });
  const [opponentsCard5, setOpponentsCard5] = useState({
    life: 5,
    attack: 2
  });
  const [myScore, setMyScore] = useState(0);
  const [opponentsScore, setOpponentsScore] = useState(0);
  const [winner, setWinner] = useState("");
  useEffect(() => {
    const myTable = document.getElementsByClassName("MyCardsOnTable")[0];
    const opponentsTable = document.getElementsByClassName("OpponentsCardsOnTable")[0];

    function insertCardOnTable(e) {
      checkForCards();
      const opponentsCards = document.getElementsByClassName("OpponentsCards")[0].children;
      const randomCardNum = Math.floor(Math.random() * opponentsCards.length);
      const getOpponentsAttack = opponentsCards[randomCardNum].parentNode.firstChild.firstChild.children[1].textContent.split('')[6];
      setOpponentsAttack(getOpponentsAttack);
      console.log(`OpponentsAttack=${getOpponentsAttack}`);
      const getOpponentsLife = opponentsCards[randomCardNum].parentNode.firstChild.firstChild.children[0].textContent.split('')[4];
      const getOpponentsCardClassId = opponentsCards[randomCardNum].lastChild.className;

      function setCard(cardClass, setCardNum) {
        if (e.target.className === cardClass) {
          const getMyAttack = e.target.parentNode.firstChild.children[1].textContent.split('')[6];
          setMyAttack(getMyAttack);
          console.log(`MyAttack=${getMyAttack}`);
          const getMyLife = e.target.parentNode.firstChild.children[0].textContent.split('')[4];
          const parent = e.target.parentNode.parentNode.className;
          console.log(`Card's parent: ${parent}`);
          const myNewLife = getMyLife - getOpponentsAttack;
          if (parent === "MyCards") {
            setCardNum(prevState => ({
              ...prevState,
              life: myNewLife
            }));
          }
          setScore(myScore, myNewLife, setMyScore);
          myTable.appendChild(e.target.parentNode);
          opponentsTable.appendChild(opponentsCards[randomCardNum]);


          function setOpponentsCard(setCardNr) {
            const opponentsNewLife = getOpponentsLife - myAttack;
            setCardNr(prev => ({
              ...prev,
              life: opponentsNewLife
            }));
            setScore(opponentsScore, opponentsNewLife, setOpponentsScore);
          }
          if (getOpponentsCardClassId === "CardMask OpponentsCard1") {
            setOpponentsCard(setOpponentsCard1);
          } else if (getOpponentsCardClassId === "CardMask OpponentsCard2") {
            setOpponentsCard(setOpponentsCard2);
          } else if (getOpponentsCardClassId === "CardMask OpponentsCard3") {
            setOpponentsCard(setOpponentsCard3);
          } else if (getOpponentsCardClassId === "CardMask OpponentsCard4") {
            setOpponentsCard(setOpponentsCard4);
          } else if (getOpponentsCardClassId === "CardMask OpponentsCard5") {
            setOpponentsCard(setOpponentsCard5);
          }
        }
      }

      function setScore(prevScore, playersLife, setPlayersScore) {
        setPlayersScore(prevScore + playersLife);
      }
      setCard("CardMask MyCard1", setMyCard1);
      setCard("CardMask MyCard2", setMyCard2);
      setCard("CardMask MyCard3", setMyCard3);
      setCard("CardMask MyCard4", setMyCard4);
      setCard("CardMask MyCard5", setMyCard5);
    };

    function checkForCards() {
      const myCards = document.getElementsByClassName("MyCards")[0].children;
      if (myCards.length === 1) {
        if (myScore > opponentsScore) {
          setWinner("Ducks win!");
        } else if (myScore < opponentsScore) {
          setWinner("Trucks win!");
        } else {
          setWinner("Draw");
        }
      }
    }
    document.addEventListener("click", insertCardOnTable);

    return () => {
      document.removeEventListener("click", insertCardOnTable);
    };
  });

  return (
    <React.Fragment>
      <header>
        <div className='Winner'>
          {winner}
        </div>
      </header>
      <main>
        <div className='OpponentsCards'>
          <Card
            cardLife={opponentsCard1.life}
            cardAttack={opponentsCard1.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard1"}
          />
          <Card
            cardLife={opponentsCard2.life}
            cardAttack={opponentsCard2.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard2"}
          />
          <Card
            cardLife={opponentsCard3.life}
            cardAttack={opponentsCard3.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard3"}
          />
          <Card
            cardLife={opponentsCard4.life}
            cardAttack={opponentsCard4.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard4"}
          />
          <Card
            cardLife={opponentsCard5.life}
            cardAttack={opponentsCard5.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardName={"Demo card"}
            cardImage={""}
            imageDesc={"Img"}
            id={"OpponentsCard5"}
          />
        </div>
        <div className='Table'>
          <div className='CardsOnTable'>
            <div className='OpponentsCardsOnTable'></div>
            <div className='MyCardsOnTable'></div>
          </div>
          <div className='ScoreArea'>

            <div className='OpponentsScore'>
              {opponentsScore}
            </div>
            <div className='MyScore'>
              {myScore}
            </div>
          </div>
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
            cardLife={myCard2.life}
            cardAttack={myCard2.attack}
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
