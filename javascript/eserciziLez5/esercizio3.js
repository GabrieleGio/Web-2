let numeroRandom = Math.floor(Math.random() * 100) + 1;

let controllaNumero = () => {
    const numeroInserito = parseInt(document.getElementById('numeromesso').value);
    if (numeroInserito == numeroRandom){
        document.getElementById("risultato").textContent = "Hai indovinato!"
    }
    else if (numeroInserito > numeroRandom){
        document.getElementById("risultato").textContent = "Il numero da indovinare è più piccolo"
    }
    else if (numeroInserito < numeroRandom){
        document.getElementById("risultato").textContent = "Hai perso! Il numero da indovinare è più grande"
    }
}
