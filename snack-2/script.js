// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//1. creo un array di oggetti di squadre di calcio, con proprietà: nome, punti fatti, falli subiti. Le ultime due proprietà saranno 0
//2. all'interno di un ciclo for scorro tutte le squadre e assegno a punti e falli la generazione di un numero random.
//  POI aggiorno l'array di oggetti con i nuovi valori e costruisco un nuovo array che contenga solo le chiavi "nome" e "falli"
//3. stampo in console il nuovo array


//1. creo array di oggetti di squadre di calcio

const squadreCalcio = [
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
];

//2. CICLO FOR

let squadreNuove = [];

for (let i = 0; i < squadreCalcio.length; i++) {
    const curSquadra = squadreCalcio[i];
    curSquadra.puntiFatti = Math.floor(Math.random() * 100) + 1;
    curSquadra.falliSubiti = Math.floor(Math.random() * 100) + 1;
     let squadra = {
        nome: curSquadra.nome,
        falliSubiti: curSquadra.falliSubiti
    };
    squadreNuove.push(squadra);
    console.log(`La squadra ${squadra.nome} ha subito ${squadra.falliSubiti} falli`);
}

console.log(squadreNuove);