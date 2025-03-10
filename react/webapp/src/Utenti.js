import React from 'react'

const Utenti = (props) => {
    //AREA 1
    console.log(props.ut);

    //AREA 2 ... html ... jsx ... no cicli for ma metodi map() e forEach()
    // map() ... torna una nuova lista
    // forEach() ... non torna nulla
    // jsx ... render html ... ciclo MAP ... id ... key
  return (
    <div>
        Utenti

        {
            // si usa map perchè con forEach non tornerebbe nulla (anche scrivendo return)
            props.ut.map((element,index) => {
                // sempre tutto in un unico blocco div
                return (
                <div key={index}>
                    <h1> Titolo </h1>
                    <h1>{element.nome} </h1>
                    <h1>{element.cognome} </h1>
                </div>
            )})
        }
        </div>
  )
}

export default Utenti