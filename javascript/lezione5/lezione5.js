// Fase 1 ... HOISTING ... le variabili (SOLO LE DICHIARAZIONI) e le funzioni

// la differenza è che se chiamo le funzioni prima della loro dichiarazione
// usando function la funzione viene eseguita, usando var no
test(); // OK
test2(); // undefined
function test(){

};

// le funzioni sono variabili
// le funzioni sopra e sotto sono equivalenti, ma
// l'unica differenza è (vedi riga 3)

var test2 = function(){
    console.log("test");
};

test();
test2();

// test è un oggetto ... eseguibile ...
// test è una variabile

console.log(test);

test();

// override
var test = 10;

// fase 2 ... (2009/2015)
// viene introdotto "let"
let test3 = function(){
    console.log("test 3")
};

// ARROW FUNCTION ... funzione anonima
let test4 = () => {
    console.log("test 4")
};

test4();