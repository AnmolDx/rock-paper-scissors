function getComputerChoise() {
   let randNum = Math.floor(Math.random() * 3 + 1)

   if (randNum === 1) {
      return "rock"
   } else if (randNum === 2) {
      return "paper"
   } else if (randNum === 3) {
      return "scissors"
   }
}

function getHumanChoise() {
   let UserChoise = prompt("Enter your choice(Rock/Paper/Scissors)")
   UserChoise = UserChoise.toLowerCase()
   return UserChoise
}

function playGame() {
   let humanScore = 0;
   let computerScore = 0;


   function playRound(humanChoise, computerChoise) {

      if ((humanChoise === "rock" && computerChoise === "scissors") ||
         (humanChoise === "scissors" && computerChoise === "paper") ||
         (humanChoise === "paper" && computerChoise === "rock")) {
         console.log(`You Win ${humanChoise} beats ${computerChoise}`);
         humanScore++;
      }

      else if ((humanChoise === "rock" && computerChoise === "paper") ||
         (humanChoise === "paper" && computerChoise === "scissors") ||
         (humanChoise === "scissors" && computerChoise === "rock")) {
         console.log(`You Lose ${computerChoise} beats ${humanChoise}`);
         computerScore++;
      }

      else {
         console.log("Its a Tie! both have selected", humanChoise)
      }
   }

   let computerChoise = getComputerChoise();
   let humanChoise = getHumanChoise();
   playRound(humanChoise, computerChoise)
   computerChoise = getComputerChoise();
   humanChoise = getHumanChoise();
   playRound(humanChoise, computerChoise)
   computerChoise = getComputerChoise();
   humanChoise = getHumanChoise();
   playRound(humanChoise, computerChoise)
   computerChoise = getComputerChoise();
   humanChoise = getHumanChoise();
   playRound(humanChoise, computerChoise)
   computerChoise = getComputerChoise();
   humanChoise = getHumanChoise();
   playRound(humanChoise, computerChoise)

   console.log("----------------------------------------------------")
   if(humanScore > computerScore){
      console.log("You Won the game")
   }else if (humanScore < computerScore) {
      console.log("Computer won the game")
   }else{
      console.log("Its a Tie! No one won the game")
   }

   console.log("Your score is ", humanScore)
   console.log("Computer score is ", computerScore)
}

playGame()