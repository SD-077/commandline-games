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
if (playerChoice === computerChoice) {
    console.log("It's a tie!");
    }
    else {
        switch (playerChoice) {
            case "paper":
                if (computerChoice === "rock") {
                    console.log("You win!");
                }
                else { 
                    console.log("Computer wins!");
                }
                break;
            case "rock":
                if (computerChoice === "scissors"){
                    console.log("You win!");
                }
                else {
                    console.log("Computer wins!");
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    console.log("You win!");
                }
                else {
                    console.log("Computer wins!");
                }
                break;
        }
    }

