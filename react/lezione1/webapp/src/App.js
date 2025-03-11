import './App.css';
import Menu from './Menu';
import Utenti from './Utenti';

function App() {
  // JS (JavaScript)
  let persona = {
    nome : "Anna",
    cognome : "Verdi"
  }

  let lista = [{
    nome : "Luca",
    cognome : "Verdi"
  },{
    nome : "Mario",
    cognome : "Rossi"
  }];



  // JSX (JavaScript Extension) libreria
  // utilizzare html, css e js insieme
  return (
    <div className="App">
  
      <Menu {...persona} />

      <Utenti ut = {lista}/>

      <Menu nome = "Mario" cognome = "Rossi"/>

      <h1>Componente Radice</h1>

      <Menu nome = "Luigi" cognome = "Bianchi"/>

    </div>
  );
}

export default App;
