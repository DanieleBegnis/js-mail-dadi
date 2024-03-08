//chiedo all'utente la mail
const userEmail = prompt('Inserire la propria email');
//controllo il mio fake database e la mail inserita
const loggedMail = ['carcarlo.pravattoni@gmail.com' , 'max.power@gmail.com' , 'alberto.rossi@gmail.com' , 'ajeje.brazorf@gmail.com' , 'daniele.begnis@hotmail.com' , 'boolean.rubberduck@gmail.com' , 'riccio.ricci@gmail.com' , 'van.gogh@gmail.com' , 'sabrina.rossi@gmail.com' , 'roberto.verdi@gmail.com' , 'giuseppe.bianchi@gmail.com'];
let promptEmail = userEmail;    
let emailfound = false;

//controllo ogni singola mail rispetto a quella inserita
for(let i = 0; i < loggedMail.length; i++) {
    const thisMail = loggedMail[i];
    if (thisMail === promptEmail) {
        emailfound = true;
    }
}

//stampo messaggio di successo se può accedere, altresì di fallimento
if (emailfound === true) {
    alert('mail inserita correttamente!');
} else {
    alert('mail errata :(')
}