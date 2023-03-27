/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(10));
console.log(addIfEven(11));

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // [2,4,6,8]

// Questo codice inizializza una variabile "i" a 0 e ripete il blocco di istruzioni all'interno del ciclo "for" finché "i" è maggiore di 5, stampando il valore di "i" ad ogni iterazione. Tuttavia, il valore iniziale di "i" è già maggiore di 5, quindi il ciclo non viene eseguito.

// Sì, c'è un errore di sintassi. La condizione del ciclo "for" è sbagliata, poiché l'operatore di confronto dovrebbe essere "<" invece di ">". Inoltre, il punto e virgola dopo la condizione del ciclo deve essere sostituito da una virgola.

// Non ci sono errori logici, ma il codice non viene eseguito a causa dell'errore di sintassi.

// // Codice corretto:
// for (let i = 0; i < 5; i++) {
// console.log(i);
// }

    // ESERCIZIO 2 

// Questa funzione prende un numero come argomento e restituisce il numero stesso se è dispari e il numero più 5 se è pari.

// Sì, c'è un errore di sintassi. L'operatore di assegnazione deve essere sostituito dall'operatore di confronto nella condizione "if".

// Non ci sono errori logici.

// // Codice corretto:
// function addIfEven(num) {
// if (num % 2 === 0) {
// return num + 5;
// }
// return num;
// }

// ESERCIZIO 3

// Questa funzione stampa i numeri da 0 a 4 utilizzando un ciclo "for".

// Sì, c'è un errore di sintassi. La condizione del ciclo "for" ha bisogno di punti e virgola al posto delle virgole.

// Non ci sono errori logici.

// // Codice corretto:
// function loopToFive() {
// for (let i = 0; i < 5; i++) {
// console.log(i);
// }
// }
