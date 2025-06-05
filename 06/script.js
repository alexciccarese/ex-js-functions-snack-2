// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
    let contatore = 0

    return function avviaContatore() {
        setInterval(function() {
            contatore++
            console.log(contatore);
            
        }, intervallo);
    }
}


const start = creaContatoreAutomatico(2000)
start()