let x = 10;

let y;

y = x;

let z = "Mario";

// dom
let stampa1 = x + "" + typeof(x) //classic string
let stampa1bis = `${x} ${typeof(x)}` //literal string
let stampa2 = y + "" + typeof(y) //classic string
let stampa2bis = `${y} ${typeof(y)}` //literal string
let stampa3 = z + "" + typeof(z) //classic string
let stampa3bis = `${z} ${typeof(z)}` //literal string

document.getElementById("ese3_1)").innerHTML = stampa1;
document.getElementById("ese3_2)").innerHTML = stampa2;
document.getElementById("ese3_3)").innerHTML = stampa3;