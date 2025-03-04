document.addEventListener("DOMContentLoaded", () => {
    let funzione1 = (intero) => {
        return intero >= 1 && intero <= 7;
    }

    let funzione2 = (intero) => {
        if (funzione1(intero)) {
            switch (intero) {
                case 1:
                    return "Lunedì";
                case 2:
                    return "Martedì";
                case 3:
                    return "Mercoledì";
                case 4:
                    return "Giovedì";
                case 5:
                    return "Venerdì";
                case 6:
                    return "Sabato";
                case 7:
                    return "Domenica";
                default:
                    return 'Peccato, non posso indovinare il giorno';
            }
        } else {
            return 'Peccato, non posso indovinare il giorno';
        }
    }

    let testfunzione2 = funzione2(1);
    document.getElementById("mioesempio2").innerHTML = "Valore: " + testfunzione2;
});
