const args = process.argv.slice(2);

// determine users choice
if (!args[0]) {
  console.warn("You have passed nothing as parameter to the program. Please pass 'Rock', 'Paper' or 'Scissors'");
  console.warn("The programm works not case sensitive, so you can pass 'rock', 'paper' or 'scissors' as well");
  return;
}

const usersChoice = args[0].toLowerCase();
const possibleChoices = ["rock", "paper", "sissors"];

if (!possibleChoices.includes(usersChoice)) {
    console.warn("You have passed '"+usersChoice+"' as parameter to the programm. Please pass 'Rock', 'Paper' or 'Sissors'");    
    console.warn("The programm works not case sensitive, so you can pass 'rock', 'paper' or 'scissors' as well");
    return;
}

// determine computers choice algorithm by Claude
let computersChoice = Math.random() * 3;
computersChoice = Math.floor(computersChoice);
computersChoice++;

// we want to use the computersChoise (1,2,3) as index for our array (0,1,2), so we have to reduce it again by 1
computersChoice--;
computersChoiseAsString = possibleChoices[computersChoice];

// log the choices of the computer and the user
console.log('Computer chose: ' + computersChoiseAsString);
console.log("User chose: " + usersChoice);

if(usersChoice === computersChoiseAsString) {
    console.log("It's a tie!");
}  else if
(usersChoice === "rock" && computersChoiseAsString === "sissors") {
    console.log("User wins!");
} else if(usersChoice === "paper" && computersChoiseAsString === "rock") {
    console.log("User wins!");
} else if(usersChoice === "sissors" && computersChoiseAsString === "paper") {
    console.log("User wins!");
} else {
    console.log("Computer wins!");
}

// we can write this as following
if(usersChoice === computersChoiseAsString) {
    console.log("Algorithm 2: It's a tie!");
} else if(usersChoice === "rock" && computersChoiseAsString === "sissors"
||
usersChoice === "paper" && computersChoiseAsString === "rock"
||
usersChoice === "sissors" && computersChoiseAsString === "paper"
) {
    console.log("Algorithm 2: User wins!");
} else {
    console.log("Algorithm 2: Computer wins!");
}

// Another posible solution is
let possibleResults = ["It's a tie!", "User wins!", "Computer wins!"];
let result = undefined;

if(usersChoice === computersChoiseAsString) {
    result = possibleResults[0];
}  else if
(usersChoice === "rock" && computersChoiseAsString === "sissors") {
    result = possibleResults[1];
} else if(usersChoice === "paper" && computersChoiseAsString === "rock") {
    result = possibleResults[1];
} else if(usersChoice === "sissors" && computersChoiseAsString === "paper") {
    result = possibleResults[1];
} else {
    result = possibleResults[2];
}

console.log("Algorithm 3: " + result);

// now some intelligent algorithm should be follow!
console.log("No intelligent algorithm found!");
// thats it for me :p
