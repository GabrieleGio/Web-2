// espressione ... operatori ... risultato BOOLEAN
// DEVE essere BOOLEAN

let a = 10;

if( a==10 ){
    console.log("Numero uguale a 10");
}else if( a < 10 ){
    console.log("Numero minore di 10");
}else if( a > 10 ){
    console.log("Numero maggiore di 10");
}else {
    console.log("Numero errato");
}

// lo switch controlla solo il valore esatto della variabile, non può fare confronti
switch(a) {
    case 10:
        //codice
        break;
    
    case 11:
        //codice
        break;

    case 12:
        //codice
        break;
}
// ripasso differenza tra while e for
// voglio contare da 10 a 0

let x = 10;

while(x >= 0){
    console.log(x);
    x--;
}

for(let y = 10; y >= 0; y--){
    console.log(y);
}

// REGOLA : Quando ciclo (quando scrivo il costrutto while o for)
// se conosco a PRIORI quante volte ciclare uso il FOR
// se non conosco quante volte ciclare uso il WHILE

let giorni = ['lun','mar','mer']

//Tipi di cicli FOR

//FOR CLASSICO
for(let y = 0; y < giorni.length; y++){
    console.log(giorni[y]);
}

//FOR IN
for(let x in giorni){
    console.log(giorni[i]);
}

//FOR OF
for(let i of giorni){
    console.log(i);
}

//Questi invece sono metodi dell'oggetto ARRAY

//Metodo 1, forEach()
giorni.forEach( function (x) {
    console.log(x);
}); // callback

//Metodo 2, map()
giorni.map(function (x){
    console.log(x);
});
