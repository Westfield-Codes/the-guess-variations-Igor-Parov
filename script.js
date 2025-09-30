// Create a global variable called turns, set it equal to 0
var counter = 0;
/* Define a function called rollDice */
function rollDice() { 
  

    // create a variable called roll, set it equal to random 1-6
  //let roll = Math.floor(Math.random()*6)+1;
let roll = Math.floor(Math.random()*6)+1;
counter +=1
  // add 1 to turns

  // if roll equals 6, display "6! You won in [turns] turns."
if( roll == 6) {
    alert("6! You won in " + counter + " turns!")
    counter = 0; 
   
  }
    // otherwise:

  // use a confirm and say: "You rolled a [roll]"
 else { 
     confirm("You rolled a " + roll);
  // then call rollDice again.
    rollDice();
  // close the else block
}
// close the function block
}
