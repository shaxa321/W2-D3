
//DIFFICOLTA :
//1 HO CAMBIATO blue-gray con blue_gray
//Linea 265

//BUG FIXED DARTH VEDER HAIRS FROM NONE TO N/A
const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "n/a",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue_gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
console.log("Exercise 1");
let characters;
characters=[];
console.log("characters è un Array:",Array.isArray(characters));
console.log("\n");



/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

console.log("Exercise 2");
for(let i=0; i<starWarsCharacters.length; i++){
  characters.push(starWarsCharacters[i].name);
}
console.log(characters);
console.log("\n");
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci solo oggetti di personaggi femminili con questa struttura di esempio: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
console.log("Exercise 3");

let femaleCharacters=[
  {
      name:"Leia Organa",
      hair_color:"brown",
      eye_color:"brown",
  },
  {
    name:"Biggs Darkligther",
    hair_color:"yellow",
    eyeColor:"yellow",
  },
  {
      name:"Sofia Tech",
      hair_color:"yellow",
      eye_color:"blue",
  },
  {
      name:"Diana Brown",
      hair_color:"violet brown",
      eye_color:"brown",
  },
  {
    name:"Beru Whitesun lars",
    hair_color:"brown",
    eyeColor:"blue,"
  }
]
console.log(femaleCharacters);
console.log("\n");

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/
console.log("Exercise 4");
  const eyeColor={
    blue:[],
    yellow:[],
    brown:[],
    red:[],
    blue_gray:[],
  }
  console.log(eyeColor);
  console.log(" blue e un array?:",Array.isArray(eyeColor.blue));
  console.log("\n");
  

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato.
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
*/
console.log("Exercise 5");
for(let i=0;i<starWarsCharacters.length;i++){



starWarsCharacters[i].eye_color;
//console.log(starWarsCharacters[i].eye_color);

switch(starWarsCharacters[i].eye_color){
  case "blue":
  eyeColor.blue.push[starWarsCharacters[i]]; 
  break;
  case "blue_gray":
  eyeColor.blue_gray.push(starWarsCharacters[i]); 
  break;
  case "brown":
  eyeColor.brown.push(starWarsCharacters[i]); 
  break;
  case "red":
  eyeColor.red.push(starWarsCharacters[i]); 
  break;
  case "yellow":
  eyeColor.yellow.push(starWarsCharacters[i]); 
  break;
  default:
}
}

console.log("la matrice eyecolor:",eyeColor);
console.log("\n");

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/
console.log("Exercise 6");
console.log("\n");
let k=0;
let totalMass=0;
while(k<starWarsCharacters.length){
  console.log(starWarsCharacters[k].mass);
  totalMass=totalMass+Number(starWarsCharacters[k].mass);
  k=k+1;
}
console.log("la massa totale è: ", totalMass);
/* ESERCIZIO 7


Crea uno switch statement per rivelare la tipol di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
console.log("Exercise 7");
switch(true){
  case totalMass<500:
      console.log("Ship is under loaded");
    break;
  case totalMass===500:
      console.log("Ship is half loaded");
    break;
  case ((totalMass>700)&&(totalMass<=900)):
      console.log("Warning: Load is over 700");
    break;
  case ((totalMass>900)&&(totalMass<=1000)):
      console.log("Critical: Load is over 900");
    break;
  case totalMass>1000:
      console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
    break;  
    default:
      console.log("Mass in ship is good: between 500 and 700");

}
console.log("\n");
/* ESERCIZIO 8

Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
console.log("esercizio 8");
console.log("\n");
for(let i=0;i<starWarsCharacters.length;i++){
  if(starWarsCharacters[i].gender=="n/a"){
    starWarsCharacters[i].gender="robot"; // non so se è corretto!
  }

}
console.log(starWarsCharacters);
/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto, crea un console.log() per controllare la proprietà length di "characters" prima e dopo l'operazione
*/
console.log("esercizio 9");
console.log("All'inizio l' array characters è lungo ",characters.length);
for(let i=0;i<characters.length;i++){
  for(let j=0;j<femaleCharacters.length;j++){
  if(characters[i]==femaleCharacters[j].name){
  characters.splice(i,1);
  }
  }

}
console.log("Alla fine l'array characters è lungo",characters.length);
console.log("\n");
/* EXTRA ESERCIZIO 10

Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/
console.log("Exersice 10");
let randomNumer=Math.floor(Math.random() * starWarsCharacters.length);
console.log("array Numero:",randomNumer);
console.log(
  "\n Hello i am the " ,(randomNumer+1)," passenger \n",
  "My name is ",starWarsCharacters[randomNumer].name,
  "I am a ",starWarsCharacters[randomNumer].gender,

  "\n My eyes are ",starWarsCharacters[randomNumer].eye_color,
  "\n I was born in ",starWarsCharacters[randomNumer].birth_year,
  "\n my eight is",starWarsCharacters[randomNumer].height, " and my weight is ",starWarsCharacters[randomNumer].mass,
  "\n i love the",starWarsCharacters[randomNumer].skin_color," color"
)
{
  if(starWarsCharacters[randomNumer].hair_color=="n/a"){
    console.log(" I don't have hairs");
  }else
  {
    console.log(" I have ",starWarsCharacters[randomNumer].hair_color, " hairs ")
  }
}
