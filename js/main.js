// Il programma dovrà chiedere all'utente il numero di kilometri che intende percorrere e la sua età

// Successivamente dovrà calcolare il prezzo totale del viaggio dell'utente


// Il prezzo del biglietto è definito in base ai kilometri = 0.21 €

const kmPrice (0.21)

// Numero kilometri

let Journey = parseInt(prompt("Quanti kilometri vuoi percorrere?"));


// Qual è la tua età

let eta = parseInt(prompt("Quanti anni hai?"));

// Il prezzo del biglietto senza sconti, quindi per coloro tra i 19 e i 64 anni


let prezzoBigliettoIntero = kmPrice * Journey;


// Risultato del totale in base all'applicazione dello sconto o meno

let price = parseInt(prompt("Il totale è"))


// Se l'utente ha un'età minore di 18 anni avrà il 20%

if (eta <= 18) {
    document.getElementById("costo").innerHTML = price 
}



// Se l'utente ha un'età maggiore di 65 anni avrà il 40%