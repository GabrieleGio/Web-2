import React, { useState } from 'react'
//FORM
//NON SI USA PIU FORM ACTION
//I FORM LI GESTISCE JS
const Form = () => {

    let [nome, setnome] = useState("")

    //in automatico controlla prende l'evento submit, lo fa da solo
    let controlla = async (e) => {
        e.preventDefault();
        
    }

  return (

    <div>
        {/* HTML : <form> */}
        <h1>Contatti </h1>
        <form onSubmit={controlla}>
            Nome : <input type="text" id="nome" onChange={(e) => {setnome(e.target.value)}} value={nome}/><br/>
            Cognome : <input type="text" id="cognome"/><br/>
            Messaggio : <input type="text" id="messaggio"/><br/>
            <button type="submit">INVIA</button>
            <h1>{nome}</h1>
        </form>

    </div>
  )
}

export default Form