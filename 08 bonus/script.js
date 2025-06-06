// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer. 

function contoAllaRovescia(n) {

    return function() {
        const id = setInterval(function() {
            console.log(n);

            if(n===0) {
                clearInterval(id)
                console.log("Tempo scaduto");
                
            } else {
                n--
            }
            
        }, 1000)

        
}
}

const stampa = contoAllaRovescia(10)
stampa()