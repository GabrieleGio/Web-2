// isNaN() è una funzione che torna true se non è un numero
console.log(isNaN(miavariabile));
// true... non è un numero

// E INVECE NO

// JS ... cerca una soluzione ...

// ragiona ... isNaN() ... true ...

let xx = 10;
let yy = "10";


console.log(xx+yy); // 1010 il simbolo + fa sempre concatenazione tra stringhe e interi
console.log(xx*yy); // 100 il simbolo * può fare solo una moltplicazione e quindi la fa

// parseInt(): trasforma una stringa in un intero
// parseFloat(): trasforma una stringa in un numero decimale

console.log(xx + parseInt(yy)); // 20 ora il simbolo + fa la somma

consolel.log(true + 1); // 2 perché true viene visto come 1