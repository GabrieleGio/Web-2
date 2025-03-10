import React from 'react'
//Per richiamare questo componente nell'app basta fare <Menu>

const Menu = (props) => {
    // AREA 1 : JAVASCRIPT
    // props è un oggetto

    // un oggetto si può destrutturare:
    let {nome, cognome} = props;






    // AREA 2 : JSX ... fusione tra html/css/js ... 3 conflitti però: class
    // REGOLA 1 : tutto deve stare dentro ad 1 solo tag (div)
    // REGOLA 2 : al posto di 'class' si usa 'className'
    // REGOLA 3 : per usare il CSS bisogna usare le DOPPIE GRAFFE
  return (
    <div>
        <h1 classname="colorerosso">Titolo Menu di {nome} {cognome} </h1>
        <h2 style={{color : "green"}}>Home Page - Chi Siamo - Contatti</h2>
    </div>
  )
}

export default Menu