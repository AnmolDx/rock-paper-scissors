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

// function getHumanChoise() {
//    let UserChoise = prompt("Enter your choice(Rock/Paper/Scissors)")
//    UserChoise = UserChoise.toLowerCase()
//    return UserChoise
// }  

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoise, computerChoise) {

   if ((humanChoise === "rock" && computerChoise === "scissors") ||
      (humanChoise === "scissors" && computerChoise === "paper") ||
      (humanChoise === "paper" && computerChoise === "rock")) {
      results.textContent = `You Win ${humanChoise} beats ${computerChoise}`;
      humanScore++;
   }

   else if ((humanChoise === "rock" && computerChoise === "paper") ||
      (humanChoise === "paper" && computerChoise === "scissors") ||
      (humanChoise === "scissors" && computerChoise === "rock")) {
      results.textContent = `You Lose ${computerChoise} beats ${humanChoise}`;
      computerScore++;
   }

   else {
      results.textContent = `Its a Tie! both have selected ${humanChoise}`
   }


   if (humanScore === 5) {
      results.style.color = "green"
      results.textContent = "You Won the game"
      humanScore = 0
   } else if (computerScore === 5) {
      results.style.color = "red"
      results.textContent = "Computer won the game"
      computerScore = 0
   }
}
function playGame() {
   //    playRound(humanChoise, computerChoise)
   //    computerChoise = getComputerChoise();
   //    humanChoise = getHumanChoise();
   //    playRound(humanChoise, computerChoise)
   //    computerChoise = getComputerChoise();
   //    humanChoise = getHumanChoise();
   //    playRound(humanChoise, computerChoise)
   //    computerChoise = getComputerChoise();
   //    humanChoise = getHumanChoise();
   //    playRound(humanChoise, computerChoise)
   //    computerChoise = getComputerChoise();
   //    humanChoise = getHumanChoise();
   //    playRound(humanChoise, computerChoise)

}

// playGame()

const results = document.getElementById("results")
const buttons = document.querySelectorAll("button")
buttons.forEach(btn => {
   btn.addEventListener("click", (e) => {
      let playerSelection = e.target.textContent.toLowerCase()
      let computerChoise = getComputerChoise();
      playRound(playerSelection, computerChoise)


   })
})

