//chiedere i dati iniziano
const age = prompt("Inserisci la tua età");
Number(age);

const kilometres = prompt("Inserisci i chilometri che farai"); 
Number(kilometres);

let price = 0;



if (isNaN(age)||isNaN(kilometres) ) {
 alert("Il valore inserito non è corretto");
}
else {
    if ( age < 18) {
        
        price = ((kilometres * 0.21 )*(80/100));
        alert(price.toFixed(2));

    } else {
        if ( age >= 65) {
            price = ((kilometres * 0.21 )*(60/100));
            alert(price.toFixed(2));
        } else {
            price = (kilometres * 0.21 );
            alert(price.toFixed(2));
        }
    }
}

//verificare che i dati siano numeri (isNan)
//salvare i dati in due variabili age kilometres
//se l'età è minore di 18 anni allora (kilometres * 0.21)-20%
//se l'età è maggiore di 65 allora (kilometres * 0.21)-40%
//.toFixed(2);