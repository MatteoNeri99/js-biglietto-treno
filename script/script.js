// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.276 € al km)
// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]


const kmUtente=prompt("quanti km vuoi percorrere in treno?")

const etaUtente=parseInt( prompt("età del passegero"),10);

let costoUtente = 0.276;


if (etaUtente < 18){
    let costoUtente =parseFloat (costUtente - (0.276 / 100 * 21) * kmUtente).toFixed(2); 

    document .getElementById("km").innerHTML= "km percorsi dall\'utente: " +  kmUtente;

    document .getElementById("eta").innerHTML= "eta del passeggero: " + etaUtente;

    document .getElementById("costo").innerHTML= "costo del biglietto: " + costoUtente;

}else if (etaUtente > 65 ){
    let costoUtente =parseFloat(costoUtente - (0.276 / 100 * 42) * kmUtente).toFixed(2); 

    document .getElementById("km").innerHTML= "km percorsi dall\'utente: " +  kmUtente;

    document .getElementById("eta").innerHTML= "eta del passeggero: " + etaUtente;

    document .getElementById("costo").innerHTML= "costo del biglietto: " + costoUtente;

}else {
    let costoUtente =parseFloat(kmUtente * 0.276).toFixed(2); 

    document .getElementById("km").innerHTML= "km percorsi dall\'utente: " +  kmUtente;

    document .getElementById("eta").innerHTML= "eta del passeggero: " + etaUtente;

    document .getElementById("costo").innerHTML= "costo del biglietto: " + costoUtente;

}

