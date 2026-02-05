let humanScore = 0;
let computerScore = 0;

function getComputerChoise() {
   let randNum = Math.floor(Math.random()*3+1)

   if(randNum === 1){
      console.log("Rock")
   }else if(randNum === 2){
      console.log("Paper")
   }else if(randNum === 3){
      console.log("Scissors")
   }
}

function getHumanChoise(){
   let UserChoise = prompt("Enter your choice(Rock/Paper/Scissors)")
   UserChoise = UserChoise.toLowerCase()
   console.log(UserChoise)
}

