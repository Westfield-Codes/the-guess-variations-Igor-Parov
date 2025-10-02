var counter = 0;

function rollDice() { 

let roll = Math.floor(Math.random()*6)+1;
counter +=1

if( roll == 6) {
    alert("6! You won in " + counter + " turns!")
    counter = 0; 

  }

 else { 
     confirm("You rolled a " + roll);

    rollDice();

}


---------------------------------------------------------


  function guessGame () {
 let guess = 0;
 let answer = Math.floor(Math.random()*100)+1;
 alert(answer);
 while(guess != answer){ 
  guess = prompt("Guess a number, 1-100")
  if(guess == answer) alert ("Correct!")
  else if(guess>answer) alert("Too High!");
  else alert("Too Low!");
 }
}
===========================================



function guessGame (){

 let answer = Math.floor(Math.random()*100)+1;

 alert(answer)

 let guess=0;

while(guess!=answer) {

    guess = prompt("Guess a number, 1-100")

    if(guess==answer) alert("Correct!")

    else if(guess>answer) alert ("Too High!");

    else if (guess<answer) alert("Too Low!")

    else alert ("Bad Input!")

}

}
====================================

/* Simple Guess Program */

// define function guessGame
function guessGame() {
  // generate a random integer 1-100
 let answer = Math.floor(Math.random()*100)+1;
   // display the integer for testing purposes only
   alert(answer);
   // create guess and set equal to 0 
 let guess = 0;
   // loop while guess is not equal to answer and not equal to "q"
 while(guess != answer && guess != "q") {
      // set guess equal to asking user to "Guess a number, 1-100"
      guess = prompt("Guess a number, 1-100");
      // if guess equals "q" display "Quitter!"
      if (guess == "q") {
         alert("Quitter!");
      }
      // or if guess equals answer display "Correct!" 
      else if (Number(guess) == answer) {
         alert("Correct!");
      }
      // or if guess is greater than answer display "Too high!" 
      else if(Number(guess) > answer) {
         alert("Too High!");
      }
      // or if guess is less than answer display "Too low!" 
      else if(Number(guess) < answer) {
         alert("Too Low!");
      }
      // or say "Bad input"
      else {
         alert("Bad Input!");
      }
   }
// end the function
}

