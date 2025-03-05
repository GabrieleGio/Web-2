
// Promise è un oggetto javascript
// costruttore prende come parametro una funzione vuole come parametri 2 funzioni
// js : primo parametro è una funzione con esito positivo
// js : secondo parametro è una funzione di errore
// SINONIMO di resolve e reject ....  return
// CODICE PRODUTTORE ... produce dati
let x = new Promise( (resolve,reject) => {

    console.log("paperino");

    let x = 10;
    // DEVE esserci una chiamata asincrone
    // recupera gli utenti dal DB ... 5 minuti
    if(x == 10){

        setTimeout( () => { // delega
            console.log("pluto");
            resolve(x);
        } , 3000);
        
    }else{
        reject("mio errore");
    } 
});

console.log("codice del mio software");

// promette chi mi restituisce qualcosa ... 
// COMPLETA (OK)
// ERRORE (KO)
// ATTESA

// CODICE CONSUMATORE
// stampo nell'html ... 
// then ci va se la promise è andata bene
// catch ci va se la promise è andata in errore
x
.then( (z) => { // Nel then entra SOLO se la promise è stata risolta
    console.log(z); // 10
})
.catch( (s) => {
    console.log(s); // mio errore
});

// paperino ... codice del mio .... pluto ... 10