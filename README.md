Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



chiedere i dati iniziano
verificare che i dati siano numeri !(isNan)
salvare i dati in due variabili age kilometres
se l'età è minore di 18 anni allora (kilometres * 0.21)-20%
se l'età è maggiore di 65 allora (kilometres * 0.21)-40%
parseFloat(num).toFixed(2);
