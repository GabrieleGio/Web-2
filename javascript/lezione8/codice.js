console.log("Riccardo");


let a = () => {
    console.log("sono A");
}

let b = () => {
    console.log("sono B");

    // delega al browser
    let x = new Promise( (res,rej) => {

        setTimeout( () => { // delega
            res("tutto ok");
            console.log("sono nel settimeout ... recupero gli utenti dal db");
        } , 5000 ); 

    } );

    return x;
}

let c = () => {
    console.log("sono C calcola il codice fiscale");
}

let d = () => {
    console.log("sono D");
}

let calcola = () => {
    a();
    // b(); // recupero gli utenti
    b()
    .then( (x) => {
        console.log(x); // tutto ok

        c(); // calcolo il CF
        d(); // calcolo busta paga

    })
    .catch( (y) => {
        console.log(y); 
    });


}

calcola();
// A B C D ... "Procedurale" ... "SINCRONO"

// JAVASCRIPT ... SFRUTTANO LE FUNZIONI DELL'AMBIENTE 90%

// JAVASCRIPT (ambiente)
// BROWSER

// setTimeout() ... BROWSER ... 
// fetch()      ... BROWSER

// setTimeout() // funzione del browser ... eseguire un codice dopo N millisecondi

// Promise

console.log("Fine programma");

// Riccardo A B Fine del proghramma   ... sono .... tutto ok .. C D