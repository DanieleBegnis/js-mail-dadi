//genero numero casuale per il giocatore
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

//genero numero casuale per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);

//controllo quale dei due numeri è maggiore
let gameResult
if (userNumber > computerNumber) {
    gameResult = 'Hai vinto!';
} else if (userNumber < computerNumber) {
    gameResult = 'hai perso! :(';
} else {
    gameResult = 'pareggio!'
}

//stampo il vincitore
console.log(gameResult)