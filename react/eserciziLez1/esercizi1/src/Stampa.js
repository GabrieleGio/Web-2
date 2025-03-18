import React from 'react'

const Stampa = () => {
    let lista = []
    for(let i=0;i<11;i++){
        lista.push(i)
        lista.push(" ")
    }
    let lista4 = []
    for(let z=5;z<16;z++){
        lista4.push(z)
        lista4.push(" ")
    }
    let lista2 = []
    for(let x=0;x<21;x+=2){
        lista2.push(x)
        lista2.push(" ")
    }
    let lista3 = []
    for(let y=0;y<21;y+=2){
        lista3.push(y*2)
        lista3.push(" ")
    }
  return (
    <div>
        <h2>Stampa da 0 a 10<br></br>
            {lista}<br></br>
            <br></br>
            Stampa da 5 a 15<br></br>
            {lista4}<br></br>
            <br></br>
            Stampa da 0 a 20 con passo di 2 <br></br>
            {lista2}<br></br>
            <br></br>
            Stampa da 0 a 20 con passo di 2 ma è il doppio <br></br>
            {lista3}
        </h2>

    </div>
  )
}

export default Stampa