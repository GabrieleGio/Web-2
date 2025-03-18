import logo from './logo.svg';
import './App.css';
import './Tabellina.js';
import Tabellina from './Tabellina.js';
import Stampa from './Stampa.js';

function App() {



  return (
    <div className="App">
      <h1>Esercizio 1 : Tabellina</h1>
      <Tabellina number = '5'/>
      <h1>Esercizio 2 : Stampa</h1>
      <Stampa/>

    </div>
  );
}

export default App;
