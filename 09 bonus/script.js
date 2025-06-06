// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

function sequenzaOperazioni(operazioni, ritardo) {

    return function() {
        operazioni.forEach((operazione, i) => {
            setTimeout(() => {
                operazione()
            }, i * ritardo);
        });

    }
}

function op1() {
  console.log("Operazione 1");
}

function op2() {
  console.log("Operazione 2");
}

function op3() {
  console.log("Operazione 3");
}

const stampa = sequenzaOperazioni([op1, op2, op3], 2000)
stampa()