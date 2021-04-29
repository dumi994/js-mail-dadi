var player_number = Math.ceil(Math.random() * 6);

var pc_number = Math.ceil(Math.random() * 6);

var message;

if (player_number === pc_number){
    message = 'Hai pareggiato, riprova ' +  ' il tuo numero è ' + player_number + ' mentre il numero del pc è ' + pc_number;
 
} else if (player_number > pc_number){
    message = 'Hai vinto'  + ' il tuo numero è ' + player_number + ' mentre il numero del pc è ' + pc_number;

} else {
    message = 'Hai perso, riprova' + ' il tuo numero è ' + player_number + ' mentre il numero del pc è ' + pc_number;
}

document.getElementById('message').innerHTML = message;