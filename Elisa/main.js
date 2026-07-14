//what is needed: 
// need logic for entering a correct word and an else if wrong 
// need option for player to select one of the three words
// need computer random choose one of three - assign word to numbers 1-3?
// use switch statements for matching players choice and computer choice to get results for each combination

//allowing use of node js for entering the players choice 
let playerChoice = process.argv[2].toLowerCase();

//computer random word generator 
let options = ["rock", "paper", "scissors"];

let randomNumber = Math.floor(Math.random() * 3);

let computerChoice = options[randomNumber];

//switch statement with if/else to compare player and computer input 
let result; 
if (playerChoice === computerChoice) {
    result = ("It's a tie!");
    }
    else {
        switch (playerChoice) {
            case "paper":
                if (computerChoice === "rock") {
                    result = "You win!";
                }
                else { 
                    result = "Computer wins!";
                }
                break;
            case "rock":
                if (computerChoice === "scissors"){
                    result = "You win!";
                }
                else {
                    result = "Computer wins!";
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    result = "You win!";
                }
                else {
                    result = "Computer wins!";
                }
                break;
            default:
                result = "Invalid word entered - please type rock, paper or scissors.";
                break
        }
    }

        console.log(`You chose ${process.argv[2].toLowerCase()} and Computer chose ${computerChoice}. The result is: ${result}`) 

