import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header>
        <div className='Title'>
          Card game
        </div>
      </header>
      <body>
        <Card />
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
