import React, { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card";

function App() {
  const [myAttack, setMyAttack] = useState(0);
  const [opponentsAttack, setOpponentsAttack] = useState(0);
  useEffect(() => {
    const myCards = document.getElementsByClassName("MyCard");
    console.log(myCards)
    const myTable = document.getElementsByClassName("MyCardsOnTable")[0];
    const opponentsTable = document.getElementsByClassName("OpponentsCardsOnTable")[0];

    const insertCardOnTable = (e) => {
      const opponentsCards = document.getElementsByClassName("OpponentsCards")[0].children;
      const randomCardNum = Math.floor(Math.random() * opponentsCards.length);
      const getOpponetsAttack = opponentsCards[randomCardNum].firstChild.firstChild.children[1].textContent.split('')[6];
      setOpponentsAttack(getOpponetsAttack);
      console.log(`OpponentsAttack=${getOpponetsAttack}`);
      if (e.target.className === "CardContainer") {
        myTable.appendChild(e.target);
        opponentsTable.appendChild(opponentsCards[randomCardNum]);
        const getMyAttack = e.target.firstChild.children[1].textContent.split('')[6];
        setMyAttack(getMyAttack);
        console.log(`MyAttack=${getMyAttack}`);
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
        <div className='OpponentsCards'>
          <div className='OpponentsCard'>
            <Card
              cardLife={10}
              cardAttack={5}
              enemyAttack={myAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
          <div className='OpponentsCard'>
            <Card
              cardLife={8}
              cardAttack={4}
              enemyAttack={myAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
          <div className='OpponentsCard'>
            <Card
              cardLife={12}
              cardAttack={5}
              enemyAttack={myAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
          <div className='OpponentsCard'>
            <Card
              cardLife={4}
              cardAttack={2}
              enemyAttack={myAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
          <div className='OpponentsCard'>
            <Card
              cardLife={2}
              cardAttack={1}
              enemyAttack={myAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
        </div>
        <div className='Table'>
          <div className='OpponentsCardsOnTable'></div>
          <div className='MyCardsOnTable'></div>
        </div>
        <div className='MyCards'>
          <div className='MyCard'>
            <Card
              cardLife={10}
              cardAttack={5}
              enemyAttack={opponentsAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
          <div className='MyCard'>
            <Card
              cardLife={8}
              cardAttack={4}
              enemyAttack={opponentsAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
          <div className='MyCard'>
            <Card
              cardLife={12}
              cardAttack={5}
              enemyAttack={opponentsAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
          <div className='MyCard'>
            <Card
              cardLife={4}
              cardAttack={2}
              enemyAttack={opponentsAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
          <div className='MyCard'>
            <Card
              cardLife={2}
              cardAttack={1}
              enemyAttack={opponentsAttack}
              effect={0}
              cardName={"Demo card"}
              cardImage={""}
              imageDesc={"Img"}
            />
          </div>
        </div>

      </main>
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
