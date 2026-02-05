let humanScore = 0;
let computerScore = 0;

function getComputerChoise() {
   let randNum = Math.floor(Math.random()*3+1)

   if(randNum === 1){
      return "rock"
   }else if(randNum === 2){
      return "paper"
   }else if(randNum === 3){
      return "scissors"
   }
}

function getHumanChoise(){
   let UserChoise = prompt("Enter your choice(Rock/Paper/Scissors)")
   UserChoise = UserChoise.toLowerCase()
   return UserChoise
}

function playRound(humanChoise, computerChoise) {
   if(humanChoise === "rock" && computerChoise === "rock"){
      console.log("Its a tie!")
   } else if(humanChoise === "paper" && computerChoise === "paper") {
      console.log("Its a tie!")
   } else if(humanChoise === "scissors" && computerChoise === "scissors") {
      console.log("Its a tie!")
   }
   
   else if(humanChoise === "rock" && computerChoise === "scissors") {
      console.log(`You Win ${humanChoise} beats ${computerChoise}`);
      humanScore = humanScore + 1;
      console.log("Your Score is ", humanScore)
      console.log("Computer score is ", computerScore)
   } else if(humanChoise === "scissors" && computerChoise === "paper") {
      console.log(`You Win ${humanChoise} beats ${computerChoise}`);
      humanScore = humanScore + 1;
      console.log("Your Score is ", humanScore)
      console.log("Computer score is ", computerScore)
   } else if(humanChoise === "paper" && computerChoise === "rock") {
      console.log(`You Win ${humanChoise} beats ${computerChoise}`);
      humanScore = humanScore + 1;
      console.log("Your Score is ", humanScore)
      console.log("Computer score is ", computerScore)
   }
   
   else if(humanChoise === "rock" && computerChoise === "paper") {
      console.log(`You Lose ${computerChoise} beats ${humanChoise}`);
      computerScore = computerScore + 1;
      console.log("Your Score is ", humanScore)
      console.log("Computer score is ", computerScore)
   }else if(humanChoise === "paper" && computerChoise === "scissors") {
      console.log(`You Lose ${computerChoise} beats ${humanChoise}`);
      computerScore = computerScore + 1;
      console.log("Your Score is ", humanScore)
      console.log("Computer score is ", computerScore)
   }else if(humanChoise === "scissors" && computerChoise === "rock") {
      console.log(`You Lose ${computerChoise} beats ${humanChoise}`);
      computerScore = computerScore + 1;
      console.log("Your Score is ", humanScore)
      console.log("Computer score is ", computerScore)
   }
}

let computerChoise = getComputerChoise();
let humanChoise = getHumanChoise();

playRound(humanChoise, computerChoise)

