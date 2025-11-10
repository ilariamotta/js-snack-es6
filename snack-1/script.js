// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

// 1. creo array di oggetti
// 2. creo un ciclo for dove scorro le bici e verifico SE quella attuale è più leggera della precedente, SALVO la bici che pesa meno
// 3. stampo in pagina o console la bici con peso minore


//1. ARRAY DI OGGETTI
const biciDaCorsa = [
  
  { nome: "Canyon Aeroad CF SLX", peso: 7.2 },
  { nome: "Specialized Tarmac SL8", peso: 6.7 },
  { nome: "Trek Émonda SLR", peso: 6.9 },
  { nome: "Giant Propel Advanced", peso: 7.4 },
  { nome: "Bianchi Oltre RC", peso: 7.1 },
  { nome: "Cervélo R5", peso: 6.8 },
  { nome: "Pinarello Dogma F", peso: 6.8 },
  { nome: "Scott Addict RC", peso: 7.0 }
];

//2. CICLO FOR

let biciLeggera = biciDaCorsa[0];
let result;

for (let i = 1; i < biciDaCorsa.length; i++) {
    const curBici = biciDaCorsa[i];
    if (curBici.peso < biciLeggera.peso) {
    biciLeggera = curBici;
    }

}
    
//3. OUTPUT
console.log(biciLeggera);
console.log(`La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg`);