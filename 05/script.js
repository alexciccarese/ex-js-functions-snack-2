// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function startMessaggio(msg) {
    return function() {

        const id = setInterval(function() {
            console.log(msg);
            
        }, 1000)


        setTimeout(function() {
            clearInterval(id)
            console.log("Stop timer");
            
        }, 6000)
    }
}

const stampa = startMessaggio("ciao")
stampa()