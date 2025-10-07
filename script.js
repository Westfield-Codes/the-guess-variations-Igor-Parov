function newGame() {
   let again = true;
   while (again) {
      guessGame();
      again = confirm("Play again??");
   }
}

function guessGame() {
   let answer = Math.floor(Math.random() * 100) + 1;
   alert(answer);

   let guess = 0;

   while (guess != answer && guess != "q") {
      guess = prompt("Guess a number, 1-100");

      if (guess == "q") {
         alert("Quitter!");
      } else if (guess == answer) {
         alert("Correct!");
      } else if (guess > answer) {
         alert("Too High!");
      } else if (guess < answer) {
         alert("Too Low!");
      } else {
         alert("Bad Input!");
      }
   }
}
