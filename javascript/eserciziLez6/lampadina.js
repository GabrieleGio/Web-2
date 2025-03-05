class Lampadina{
    constructor(maxclick){
        this._stato = 'spenta';
        this.contatore = 0;
        this.maxclick = maxclick;
    }

    click(){

        if (this.contatore >= this.maxclick) {
            if (this._stato !== 'rotta') { 
                this._stato = 'rotta';
                this.stato();
                document.getElementById("immagineLampadina").src = "https://static.vecteezy.com/ti/foto-gratuito/p2/8574066-sfondo-bianco-isolato-lampadina-rotta-foto.jpg";
                return "La lampadina è rotta";
            } else {  // Se è già rotta, esplode
                document.getElementById("immagineLampadina").src = "https://healthy.thewom.it/wp-content/uploads/2022/03/esplosione-nucleare.jpg?imbypass=true";
                return "La lampadina è esplosa!";
            }
        }

        if (this._stato === 'accesa'){
            this._stato = 'spenta';
            this.contatore++;
            this.stato();
            document.getElementById("immagineLampadina").src ="https://www.lucidinatale.com/media/catalog/product/cache/3b308f51c854b13eae1233abff59b24f/5/6/56077-lampada-vetro-party-light-bianco-freddo-1.jpg"
            return "La lampadina è spenta";
        }

        if (this._stato === 'spenta'){
            this._stato = 'accesa';
            this.contatore++;
            this.stato();
            document.getElementById("immagineLampadina").src = "https://img.freepik.com/vettori-gratuito/lampadina-accesa-realistica-isolata_1284-41774.jpg?semt=ais_hybrid"
            return "La lampadina è accesa";
        }
    }

    stato(){
        document.getElementById('statoLampadina').textContent = `Lo stato attuale è: ${this._stato}`;
    }


}
let setMaxClicks = () => {
    const maxClicks = document.getElementById('maxClicks').value;

    if (maxClicks && maxClicks > 0) {
        lampadina = new Lampadina(parseInt(maxClicks));
        document.getElementById('lampadinaBottone').disabled = false;
    }
}

