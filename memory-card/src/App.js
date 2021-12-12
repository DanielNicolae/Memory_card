import React, { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card";

function App() {


  return (
    <React.Fragment>
      <header>
        <div className="Title">
          Card game
        </div>
      </header>
      <body>
        <Card cardLife={10} cardAttack={5} enemyAttack={5} effect={0} cardName={"Demo card"} cardImage={""} imageDesc={"Img"} />
      </body>
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
