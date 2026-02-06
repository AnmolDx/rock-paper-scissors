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
   let computerChoise = getComputerChoise();
   let humanChoise = getHumanChoise();

   function playRound(humanChoise, computerChoise) {

      if (humanChoise === "rock" && computerChoise === "scissors" || 
         humanChoise === "scissors" && computerChoise === "paper" || 
         humanChoise === "paper" && computerChoise === "rock") {
         console.log(`You Win ${humanChoise} beats ${computerChoise}`);
         humanScore++;
      }

      else if (humanChoise === "rock" && computerChoise === "paper" || 
         humanChoise === "paper" && computerChoise === "scissors" || 
         humanChoise === "scissors" && computerChoise === "rock") {
         console.log(`You Lose ${computerChoise} beats ${humanChoise}`);
         computerScore++;
      }

      else{
         console.log("Its a Tie! both have selected", humanChoise)
      }
   }
   
   playRound(humanChoise,computerChoise)
   playRound(humanChoise,computerChoise)
   playRound(humanChoise,computerChoise)
   playRound(humanChoise,computerChoise)
   playRound(humanChoise,computerChoise)
   
   console.log("Your score is ", humanScore)
   console.log("Computer score is ", computerScore)
}

playGame()