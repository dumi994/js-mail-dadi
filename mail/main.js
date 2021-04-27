//Chiedi all’utente la sua email, 
var userEmail = prompt('Inserisci qui la tua email');
console.log(userEmail);
var mailList = ['dumi.9944@gmail.com', 'marione@gmail.com', 'pinosilvestre@gmail.com'];
var invitato = false
var message;

 for (var i = 0; i < mailList.length; i++){
    var email = mailList[i];
    if (email == userEmail){   //mailList[0] = dumi.9944@gmail.com
        invitato = true;
    }
 }


// controlla che sia nella lista di chi può accedere,
console.log(invitato);

if (invitato == true){
    message = 'benvenuto alla festa'
}else{
    message = 'sorry, non puoi entrare'
}
//stampa un messaggio appropriato sull’esito del controllo.

document.getElementById("titolo").innerHTML = message;