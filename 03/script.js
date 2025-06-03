// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const diviso = (a, b) => a % b
const moltiplica = (a, b) => a * b

function eseguiOperazione(a, b, operazione) {
  return operazione(a, b)
}

console.log(eseguiOperazione(2, 5, moltiplica));//10
