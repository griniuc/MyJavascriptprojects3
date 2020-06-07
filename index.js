// Crează un joc de rock - paper - scissors
// Primul jucător vei fi tu, al doilea calculatorul

// Part.1
// 1. Adăugăm event listener pentru butoane, câte unul pentru fiecare buton
// 2. Creăm funcția ce ne va returna alegerea calculatorului
// 3. Comparăm alegerea calculatorului cu a user-ului
// 4. Anunțăm câștigătorul rundei(cine și ce variantă a ales)
// 5. Creăm o funcție ce primește ca parametru numărul opțiunei,
//    și returnează numele opțiunii

// Part.2
// 1. Variabile pentru număurl total de runde și runda curentă
// 2. Când se joacă o rundă, să modificăm runda curentă
// 3. După ultima rundă, anunțăm câștigătorul pe general, cu scorul pentru fiecare
// 4. Afișăm la ecran progresul rundelor
// 5. După ultima rundă, resetăm scorul și runda curentă

// Part.3 Optional
// Afișăm în pagină scorul curent a calculatorului și utilizatorului

// Part.4 Optional
// O variantă de joc nelimitată în variante

let pc; 
let scorUser = 0;
let scorPC = 0;
let round = 0; 

function pcChoice() { 
  pc = Math.round(Math.round()*2);
  }

function roundNumber (){
round = round + 1;
document.getElementById("round").innerHTML= round;
}

window.rockClick = function (){
  roundNumber ();
  pcChoice();
  
  if (pc === 0){
    window.alert("It is a tie. PC choose rock. You choose rock.")
  } else if (pc === 1) {
      window.alert("You lost. PC choose paper. You choose rock.")
      scorPC=scorPC+1;
  } else {
      window.alert("You won. PC choose scissors. You choose rock.")
      scorUser=scorUser+1;
  }
  if (round === 3) {
    window.alert("Done!");
    scor();
    scorUser = 0; scorPC = 0; round = 0;

}
}

window.paperClick = function (){
  roundNumber ();
  pcChoice();
  
  if (pc === 0){
    window.alert("You won. PC choose rock. You choose paper.")
    scorUser=scorUser+1;
  } else if (pc === 1) {
      window.alert("It is a tie. PC choose paper. You choose paper.")
  } else {
      window.alert("You lost. PC choose scissors. You choose paper.")
      scorPC=scorPC+1;
}
  if (round === 3){
    window.alert("Done");
    scor();
    scorUser = 0; scorPC = 0; round = 0;
}
}

window.scissorsClick = function (){
  roundNumber ();
  pcChoice();
  
  if (pc === 0){
    window.alert("You lost. PC choose rock. You choose scissors.")
    scorPC=scorPC+1;
    } else if (pc === 1) {
      window.alert("You won. PC choose paper. You choose scissors.")
      scorUser=scorUser+1;
    } else {
      window.alert("It is a tie. PC choose scissors. You choose scissors.")
}
  if (round === 3){
    window.alert("Done");
    scor();
    scorUser = 0; scorPC = 0; round = 0;
}

}
function scor () {
if (scorUser > scorPC){
  window.alert("You won! Scor " + scorUser + ": " + scorPC)
}
  else if (scorUser < scorPC) {
    window.alert("You lost! Scor " + scorPC + ": " + scorUser)
}
  else {
    window.alert("It is a tie " + scorPC + ": " + scorUser)
  }
}
 
