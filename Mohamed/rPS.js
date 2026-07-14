const args = process.argv.slice(2);

if (args[0] == null) {
  console.log("Empty! Please enter R,P,S for 'Rock' or 'Paper' or 'Scissors'");
  return;
}

// Rock = R , Paper = P , Scissors = S
const userInput = args[0];
const options = ["R", "P", "S"];

if (
  !options.some((option) => userInput.toUpperCase() === option.toUpperCase())
) {
  console.log(
    `You entered: ${userInput}. Please enter 'R' or 'P' or 'S'`,
  );
  return;
}

const randomIndex = Math.floor(Math.random() * options.length);
const computerChoice = options[randomIndex];

console.log(`You chose: ${userInput} and Computer chose: ${computerChoice}`);

if (userInput.toUpperCase() === computerChoice.toUpperCase()) {
  console.log("It's a tie!");
} else if (
  (userInput.toUpperCase() === "R" &&
    computerChoice.toUpperCase() === "S") ||
  (userInput.toUpperCase() === "P" &&
    computerChoice.toUpperCase() === "R") ||
  (userInput.toUpperCase() === "S" &&
    computerChoice.toUpperCase() === "P")
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}
