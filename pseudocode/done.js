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

