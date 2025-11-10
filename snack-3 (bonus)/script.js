// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS 

//1. creo un array di partenza
//2. creo una funzione che scorre i numeri all'interno dell'array e identifica i numeri che hanno un indice compreso tra due numeri
//POI li inserisco in un nuovo array
//3.evoco la funzione che stamperà l'array nuovo

//1. creo un array di partenza

                // 0    1   2   3   4   5   6   7   8
let arrayNumeri = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//2. creo la funzione



function nuovoArray(array, a, b) {
    let arrayAggiornato = [];
    for (let i = a; i <= b; i++) {
        arrayAggiornato.push(array[i]);
    }

    return arrayAggiornato;
}


//3. invoco la funzione

let risultato = nuovoArray(arrayNumeri, 2, 6);
console.log(risultato);

