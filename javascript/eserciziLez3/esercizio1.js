let a = 2;
let b = 3;
let c = 4;
let d = 5;
let e = 6;

let somma = a+b+c+d+e;
let media = somma / 5;


// dom
let box = document.createElement("h1");
box.setAttribute("id","risultato1)");
document.body.appendChild(box);

let box2 = document.createElement("h1");
box.setAttribute("id","risultato2)");
document.body.appendChild(box2);


document.getElementById("risultato1").innerHTML = somma;
document.getElementById("risulato2").innerHTML = media;