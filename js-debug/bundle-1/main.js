/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();



// RISPOSTE
// ESERCIZIO 1

// Il codice definisce una funzione "checkAge" che confronta una costante "myAge" (impostata a 32) con il valore numerico 18. Se myAge è inferiore a 18, la funzione stampa un messaggio che indica che sei troppo giovane e mostra l'età, altrimenti stampa un messaggio che indica che hai più di 18 anni.
// Non ci sono errori di sintassi.
// Non ci sono errori logici, ma il messaggio nella variabile "message" non viene mai stampato.
// ESERCIZIO 2

// La funzione "printColorsNumber" definisce un array di stringhe "colors" e mostra il numero di elementi dell'array in una stringa di console.
// C'è un errore di sintassi, "length" è scritto erroneamente come "lenght".
// Non ci sono errori logici.
// ESERCIZIO 3

// La funzione "addNumbers" richiede all'utente di inserire un numero tramite la funzione "prompt" e poi somma 12 al numero inserito dall'utente. Il risultato viene mostrato in una stringa di console.
// Non ci sono errori di sintassi.
// Non ci sono errori logici.
// ESERCIZIO 4

// La funzione "checkAccess" definisce un array di stringhe "addresses" e richiede all'utente di inserire un indirizzo email tramite la funzione "prompt". Quindi controlla se l'indirizzo email inserito dall'utente è presente nell'array "addresses". Se l'indirizzo email è presente, la variabile "grantAccess" viene impostata su "true", altrimenti resta su "false". Infine, la funzione stampa un messaggio di console che indica se l'accesso è stato consentito o negato.
// Non ci sono errori di sintassi.
// C'è un errore logico: la variabile "grantAccess" viene impostata su una stringa invece che su un valore booleano, quindi la seconda condizione "if (grantAccess === true)" non viene mai soddisfatta e il messaggio di console di "Accesso negato!" viene sempre visualizzato. La variabile "grantAccess" dovrebbe essere impostata su "true" o "false" senza virgolette.


// esercizio 1 
// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }

//     console.log(message);
// }

// checkAge();

// ESERCIZIO 2 
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }

// printColorsNumber();

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = parseInt(userNumber) + 12;

//     console.log(`Il risultato finale è ${total}`);
// }

// addNumbers();

// ESERCIZIO 4 
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }

// checkAccess();
