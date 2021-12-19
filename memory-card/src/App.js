import React, { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card";

function App() {
  const [round, setRound] = useState(0);
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
    attack: 6
  });
  const [myCard5, setMyCard5] = useState({
    life: 2,
    attack: 5
  });
  const [opponentsCard1, setOpponentsCard1] = useState({
    life: 8,
    attack: 4
  });
  const [opponentsCard2, setOpponentsCard2] = useState({
    life: 7,
    attack: 3
  });
  const [opponentsCard3, setOpponentsCard3] = useState({
    life: 8,
    attack: 2
  });
  const [opponentsCard4, setOpponentsCard4] = useState({
    life: 4,
    attack: 4
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
      const nameOfClass = e.target.className;
      console.log(`nameOfClass: ${nameOfClass}`);
      if (e.target.parentNode.parentNode !== null) {
        if (e.target.parentNode.parentNode.className === "MyCards") {
          const opponentsCards = document.getElementsByClassName("OpponentsCards")[0].children;
          const randomCardNum = Math.floor(Math.random() * opponentsCards.length);
          const getOpponentsAttack = opponentsCards[randomCardNum].parentNode.firstChild.firstChild.children[1].textContent.split('')[6];
          setOpponentsAttack(getOpponentsAttack);
          // console.log(`OpponentsAttack=${getOpponentsAttack}`);
          const getOpponentsLife = opponentsCards[randomCardNum].parentNode.firstChild.firstChild.children[0].textContent.split('')[4];
          const getOpponentsCardClassId = opponentsCards[randomCardNum].lastChild.className;
          console.log(`getOpponentsCardClassId ${getOpponentsCardClassId}`);
          function setCard(cardClass1, cardClass2, cardClass3, cardClass4, cardClass5, cardClass6, cardClass7, setCardNum) {
            setRound(round => round + 1);
            let getMyAttack = 0;
            let getMyLife = 0;
            let parent = "";
            console.log(`cardClass1: [${cardClass1}]`)
            if (e.target.className === cardClass1) {
              console.log("~~~CardContainer~~~");
              // CardContainer
              getMyAttack = e.target.firstChild.children[1].textContent.split('')[6];
              setMyAttack(getMyAttack);
              // console.log(`MyAttack=${getMyAttack}`);
              if (e.target.firstChild.children[0].textContent.length === 5) {
                getMyLife = e.target.firstChild.children[0].textContent.split('')[4];
              } else {
                getMyLife = e.target.firstChild.children[0].textContent.split('')[4] + "" + e.target.firstChild.children[0].textContent.split('')[5];
              }
              console.log(`My old life: ${getMyLife}`);
              parent = e.target.parentNode.className;
            } else if (e.target.className === cardClass2) {
              console.log("~~~CardProperties~~~");
              // CardProperties
              getMyAttack = e.target.children[1].textContent.split('')[6];
              setMyAttack(getMyAttack);
              // console.log(`MyAttack=${getMyAttack}`);
              if (e.target.children[0].textContent.length === 5) {
                getMyLife = e.target.children[0].textContent.split('')[4];
              } else {
                getMyLife = e.target.children[0].textContent.split('')[4] + "" + e.target.children[0].textContent.split('')[5];
              }
              console.log(`My old life: ${getMyLife}`);
              parent = e.target.parentNode.parentNode.className;
            } else if (e.target.className === cardClass3) {
              console.log("~~~CardsLife~~~");
              // CardsLife
              getMyAttack = e.target.nextElementSibling.textContent.split('')[6];
              setMyAttack(getMyAttack);
              // console.log(`MyAttack=${getMyAttack}`);
              if (e.target.textContent.length === 5) {
                getMyLife = e.target.textContent.split('')[4];
              } else {
                getMyLife = e.target.textContent.split('')[4] + "" + e.target.textContent.split('')[5];
              }
              console.log(`My old life: ${getMyLife}`);
              parent = e.target.parentNode.parentNode.parentNode.className;
            } else if (e.target.className === cardClass4) {
              console.log("~~~Life~~~");
              // Life
              getMyAttack = e.target.parentNode.nextElementSibling.textContent.split('')[6];
              setMyAttack(getMyAttack);
              // console.log(`MyAttack=${getMyAttack}`);
              if (e.target.parentNode.textContent.length === 5) {
                getMyLife = e.target.parentNode.textContent.split('')[4];
              } else {
                getMyLife = e.target.parentNode.textContent.split('')[4] + "" + e.target.parentNode.textContent.split('')[5];
              }
              console.log(`My old life: ${getMyLife}`);
              parent = e.target.parentNode.parentNode.parentNode.parentNode.className;
            } else if (e.target.className === cardClass5) {
              console.log("~~~CardsAttack~~~");
              // CardsAttack
              getMyAttack = e.target.textContent.split('')[6];
              setMyAttack(getMyAttack);
              console.log(`MyAttack=${getMyAttack}`);
              if (e.target.parentNode.textContent.length === 5) {
                getMyLife = e.target.previousElementSibling.textContent.split('')[4];
              } else {
                getMyLife = e.target.previousElementSibling.textContent.split('')[4] + "" + e.target.previousElementSibling.textContent.split('')[5];
              }
              console.log(`My old life: ${getMyLife}`);
              parent = e.target.parentNode.parentNode.parentNode.className;
            } else if (e.target.className === cardClass6) {
              console.log("~~~Attack~~~");
              // Attack
              getMyAttack = e.target.parentNode.textContent.split('')[6];
              setMyAttack(getMyAttack);
              // console.log(`MyAttack=${getMyAttack}`);
              if (e.target.parentNode.textContent.length === 5) {
                getMyLife = e.target.parentNode.textContent.split('')[4];
              } else {
                getMyLife = e.target.parentNode.textContent.split('')[4] + "" + e.target.parentNode.textContent.split('')[5];
              }
              console.log(`My old life: ${getMyLife}`);
              parent = e.target.parentNode.parentNode.parentNode.parentNode.className;
            } else if (e.target.className === cardClass7) {
              console.log("~~~Image~~~");
              // Image
              getMyAttack = e.target.previousElementSibling.children[1].textContent.split('')[6];
              setMyAttack(getMyAttack);
              // console.log(`MyAttack=${getMyAttack}`);
              if (e.target.previousElementSibling.children[0].textContent.length === 5) {
                getMyLife = e.target.previousElementSibling.children[0].textContent.split('')[4];
              } else {
                getMyLife = e.target.previousElementSibling.children[0].textContent.split('')[4] + "" + e.target.previousElementSibling.children[0].textContent.split('')[5];
              }
              console.log(`My old life: ${getMyLife}`);
              parent = e.target.parentNode.parentNode.className;
            }
            // console.log(`Card's parent: ${parent}`);
            let myNewLife = getMyLife - getOpponentsAttack;
            console.log(`My new life: ${myNewLife}`);
            if (myNewLife < 0) {
              myNewLife = 0;
            }
            if (parent === "MyCards") {
              setCardNum(prevState => ({
                ...prevState,
                life: myNewLife
              }));
            }
            setScore(myNewLife, setMyScore);
            myTable.appendChild(e.target.parentNode);
            opponentsTable.appendChild(opponentsCards[randomCardNum]);

            function setOpponentsCard(setCardNr) {
              let opponentsNewLife = getOpponentsLife - myAttack;
              if (opponentsNewLife < 0) {
                opponentsNewLife = 0;
              }
              setCardNr(prev => ({
                ...prev,
                life: opponentsNewLife
              }));
              setScore(opponentsNewLife, setOpponentsScore);
            }
            if (getOpponentsCardClassId === "Image OpponentsCard1") {
              setOpponentsCard(setOpponentsCard1);
            } else if (getOpponentsCardClassId === "Image OpponentsCard2") {
              setOpponentsCard(setOpponentsCard2);
            } else if (getOpponentsCardClassId === "Image OpponentsCard3") {
              setOpponentsCard(setOpponentsCard3);
            } else if (getOpponentsCardClassId === "Image OpponentsCard4") {
              setOpponentsCard(setOpponentsCard4);
            } else if (getOpponentsCardClassId === "Image OpponentsCard5") {
              setOpponentsCard(setOpponentsCard5);
            }

          }

          function setScore(playersLife, setPlayersScore) {
            setPlayersScore((prevScore) => prevScore + playersLife);
          }

          if (nameOfClass === "CardContainer MyCard1" ||
            nameOfClass === "CardProperties MyCard1" ||
            nameOfClass === "CardsLife MyCard1" ||
            nameOfClass === "Life MyCard1" ||
            nameOfClass === "CardsAttack MyCard1" ||
            nameOfClass === "Attack MyCard1" ||
            nameOfClass === "Image MyCard1"
          ) {
            console.log("Set card 1");
            setCard("CardContainer MyCard1", "CardProperties MyCard1", "CardsLife MyCard1", "Life MyCard1", "CardsAttack MyCard1", "Attack MyCard1", "Image MyCard1", setMyCard1);
          } else if (
            nameOfClass === "CardContainer MyCard2" ||
            nameOfClass === "CardProperties MyCard2" ||
            nameOfClass === "CardsLife MyCard2" ||
            nameOfClass === "Life MyCard2" ||
            nameOfClass === "CardsAttack MyCard2" ||
            nameOfClass === "Attack MyCard2" ||
            nameOfClass === "Image MyCard2"
          ) {
            console.log("Set card 2");
            setCard("CardContainer MyCard2", "CardProperties MyCard2", "CardsLife MyCard2", "Life MyCard2", "CardsAttack MyCard2", "Attack MyCard2", "Image MyCard2", setMyCard2);
          } else if (
            nameOfClass === "CardContainer MyCard3" ||
            nameOfClass === "CardProperties MyCard3" ||
            nameOfClass === "CardsLife MyCard3" ||
            nameOfClass === "Life MyCard3" ||
            nameOfClass === "CardsAttack MyCard3" ||
            nameOfClass === "Attack MyCard3" ||
            nameOfClass === "Image MyCard3"
          ) {
            console.log("Set card 3");
            setCard("CardContainer MyCard3", "CardProperties MyCard3", "CardsLife MyCard3", "Life MyCard3", "CardsAttack MyCard3", "Attack MyCard3", "Image MyCard3", setMyCard3);
          } else if (
            nameOfClass === "CardContainer MyCard4" ||
            nameOfClass === "CardProperties MyCard4" ||
            nameOfClass === "CardsLife MyCard4" ||
            nameOfClass === "Life MyCard4" ||
            nameOfClass === "CardsAttack MyCard4" ||
            nameOfClass === "Attack MyCard4" ||
            nameOfClass === "Image MyCard4"
          ) {
            console.log("Set card 4");
            setCard("CardContainer MyCard4", "CardProperties MyCard4", "CardsLife MyCard4", "Life MyCard4", "CardsAttack MyCard4", "Attack MyCard4", "Image MyCard4", setMyCard4);
          } else if (
            nameOfClass === "CardContainer MyCard5" ||
            nameOfClass === "CardProperties MyCard5" ||
            nameOfClass === "CardsLife MyCard5" ||
            nameOfClass === "Life MyCard5" ||
            nameOfClass === "CardsAttack MyCard5" ||
            nameOfClass === "Attack MyCard5" ||
            nameOfClass === "Image MyCard5"
          ) {
            console.log("Set card 5");
            setCard("CardContainer MyCard5", "CardProperties MyCard5", "CardsLife MyCard5", "Life MyCard5", "CardsAttack MyCard5", "Attack MyCard5", "Image MyCard5", setMyCard5);
          }
        }
      }
    };
    console.log(`my score ${myScore}`);
    console.log(`opponent's score:${opponentsScore}`);
    checkForCards();
    function checkForCards() {
      if (round === 5) {
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

      <div className='Winner'>
        {winner}
      </div>

      <main>
        <div className='OpponentsCards'>
          <Card
            cardLife={opponentsCard1.life}
            cardAttack={opponentsCard1.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/trucks/truck1.webp"}
            imageDesc={"Picture of truck 1"}
            id={"OpponentsCard1"}
          />
          <Card
            cardLife={opponentsCard2.life}
            cardAttack={opponentsCard2.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/trucks/truck2.webp"}
            imageDesc={"Picture of truck 2"}
            id={"OpponentsCard2"}
          />
          <Card
            cardLife={opponentsCard3.life}
            cardAttack={opponentsCard3.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/trucks/truck3.webp"}
            imageDesc={"Picture of truck 3"}
            id={"OpponentsCard3"}
          />
          <Card
            cardLife={opponentsCard4.life}
            cardAttack={opponentsCard4.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/trucks/truck4.webp"}
            imageDesc={"Picture of truck 4"}
            id={"OpponentsCard4"}
          />
          <Card
            cardLife={opponentsCard5.life}
            cardAttack={opponentsCard5.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/trucks/truck5.webp"}
            imageDesc={"Picture of truck 5"}
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
          <Card className="MyCard"
            cardLife={myCard1.life}
            cardAttack={myCard1.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/ducks/duck1.webp"}
            imageDesc={"Picture of duck 1"}
            id={"MyCard1"}
          />
          <Card className="MyCard"
            cardLife={myCard2.life}
            cardAttack={myCard2.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/ducks/duck2.webp"}
            imageDesc={"Picture of duck 2"}
            id={"MyCard2"}
          />
          <Card className="MyCard"
            cardLife={myCard3.life}
            cardAttack={myCard3.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/ducks/duck3.webp"}
            imageDesc={"Picture of duck 3"}
            id={"MyCard3"}
          />
          <Card className="MyCard"
            cardLife={myCard4.life}
            cardAttack={myCard4.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/ducks/duck4.webp"}
            imageDesc={"Picture of duck 4"}
            id={"MyCard4"}
          />
          <Card className="MyCard"
            cardLife={myCard5.life}
            cardAttack={myCard5.attack}
            enemyAttack={opponentsAttack}
            effect={0}
            cardImage={"./images/ducks/duck5.webp"}
            imageDesc={"Picture of duck 5"}
            id={"MyCard5"}
          />
        </div>

      </main>

    </React.Fragment>
  );
}

export default App;
