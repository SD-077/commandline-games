//determine which index position to use
const playerChoice = process.argv[2];

//create an array of possible choices
const choices = ['rock', 'paper', 'scissors'];

//create a randomised computer's choice
const computerChoice = choices[Math.floor(Math.random() * 3)];
console.log(`Computer chose: ${computerChoice}`);

//use if to rule out invalid choice
if (!choices.includes(playerChoice)) {
    console.log("Invalid input");
    process.exit()
}

//use if, else if to determine the win/lose/tie logic
if (playerChoice === computerChoice) { 
  console.log("It's a tie!"); 
}

else if (
    (playerChoice === "rock" && computerChoice === "scissors") || 
    (playerChoice === "paper" && computerChoiceChoice === "rock") || 
    (playerChoice === "scissors" && computerChoice === "paper")
)
{
    console.log("You win!") 
} 

else if (
    (playerChoice === "scissors" && computerChoice === "rock") || 
    (playerChoice === "paper" && computerChoice === "scissors") || 
    (playerChoice === "rock" && computerChoice === "paper")
) 
{ 
    console.log("You lose!") 
}



// if (
//   (playerChoice === "rock" && randomChoice === "scissors") ||
//   (playerChoice === "paper" && randomChoice === "rock") ||
//   (playerChoice === "scissors" && randomChoice === "paper")
// ) {
//   console.log("You win!");
// }