// OGGETTI ... retrocompatibile
// scatola ... contenitore
// attributi ( a = 1 )
// metodi (funzione nella classe)

// Sintassi :

// JSON (JavaScript Object Notation) ... sintassi universale

// Fase 1 (fino al 2009)

// sintassi di tipo literal ... forma abbreviata ... istanza e valorizzazione subito
var persona = {
    nome : "Mario",
    cognome : "Rossi",
    eta : 20,
};

// sintassi classica ... più leggibile
var persona2 = new Object(); // costruisco
persona2.nome = "Mario"; // valorizzo
persona2.cognome = "Rossi";
persona2.eta = 20;

// NON esiste il concetto di CLASSE (fino al 2009)
// esistono solo le funzioni costruttore ... Prototype ... simulano le classi
function Persona3(){
    this.nome = "Mario";
    this.cognome = "Rossi";
    this.eta = 20;
}
var px = new Persona3();
var px1 = new Persona3();

console.log(px);

// Prototype : posso aggiungere proprietà all'oggetto quando ne ho bisogno
px.indirizzo = "via del corso";
px1.civico = 30; //ora px e px1 sono diversi ... problema

// in questo modo invece aggiungo l'attributo a tutti gli oggetti
Persona3.prototype.materia = "informatica";
// ma è ancora un problema ... lo fa separatamente ... il costruttore iniziale
// continua ad avere sempre e solo 3 attributi ... non è intuitivo



// Fase 2 (dal 2009 in poi)

class Persona{
    nome = "Mario";
    cognome = "Rossi";
    eta = 30;

    constructor(x,y,z){
        this.nome = x;
        this.congome = y;
        this.eta = z;
    }

    stampa(){
        console.log("ciao");
    }
}

// (nella fase 2 si usa let)
let x = new Persona();
let y = new Persona();
let z = new Persona();

console.log(x);

// ATTENZIONE !!!
// si possono ancora fare errori gravi come nei prototipi
x.paperino = "ciao"; // facendo cosi si aggiunge un attributo all'istanza x
Persona.prototype.pippo = "arrivederci"; // cosi aggiungo un attributo a tutte le istanze

// può capitare di sbagliare il nome di un attributo, creando così un nuovo attributo per errore
x.nomee = "Luigi";

console.log(x);
console.log(y);
console.log(z);


// ereditarietà e super
class Dipendente extends Persona {
    constructor(){
        super();
    }

    // override
    stampa(){
        // puoi ancora usare il metodo del super prima di fare l'override
        super.stampa();
        console.log("arrivederci");
    }
}

let s = new Dipendente();
s.stampa();
