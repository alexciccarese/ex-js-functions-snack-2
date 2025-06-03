// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(ms) {
    return function() {
        setTimeout(function() {
            console.log("Tempo scaduto!");
        }, ms);
    }
}


const timer = creaTimer(3000)
timer()