// fetch() funzione BROWSER chiamata http (WS) ... asincrona
// http :
// Request ... OGGETTI
// Response ... OGGETTI
// in http i dati NON HANNO UN FORMATO ...

let utenti = fetch('https://jsonplaceholder.typicode.com/users') // REQUEST ... fetch()

console.log(utenti)

// in REALTA' non si scrive mai il codice produttore
utenti.then( (response) => {
    console.log(response); // json() ... estrapola i dati dalla response
    let utenti = response.json();
    utenti.then((x) => {
        // qui ci sarà il dom
        console.log(x);
    });
});