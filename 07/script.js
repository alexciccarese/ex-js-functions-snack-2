// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(intervallo, stop) {

    return function () {
        const id = setInterval(() => {
            let messaggio = "Ciao"
            console.log(messaggio);

        }, intervallo)

        setTimeout(() => {
            clearInterval(id) 
                console.log("stop");
                
            
        }, stop);
    }
} 

const stampa = eseguiEferma(2000, 10000)
stampa()