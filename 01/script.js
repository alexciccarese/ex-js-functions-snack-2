
/* 
- Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
- Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
- Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. 
*/

// - Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a, b) {
  return a + b
}

console.log(somma(5,6)); //11


// - Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const somma = function(a, b) {
  return a + b
}

console.log(somma(2,4)); //6


// - Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. 
const somma = (a, b) => {return a + b}

console.log(somma(5,9)); //14