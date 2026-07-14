const args = process.argv.slice(2);

if (args[0] == null) {
  console.log("Empty Input!. Please enter 'Rock' or 'Paper' or 'Scissors'");
  return;
}

const userInput = args[0];
const options = ["Rock", "Paper", "Scissors"];

if (
  !options.some((option) => userInput.toLowerCase() === option.toLowerCase())
) {
  console.log(
    `You entered: ${userInput}. Please enter 'Rock' or 'Paper' or 'Scissors'`,
  );
  return;
}

const randomIndex = Math.floor(Math.random() * options.length);
const computerChoice = options[randomIndex];

console.log(`You chose: ${userInput} and Computer chose: ${computerChoice}`);

if (userInput.toLowerCase() === computerChoice.toLowerCase()) {
  console.log("It's a tie!");
} else if (
  (userInput.toLowerCase() === "rock" &&
    computerChoice.toLowerCase() === "scissors") ||
  (userInput.toLowerCase() === "paper" &&
    computerChoice.toLowerCase() === "rock") ||
  (userInput.toLowerCase() === "scissors" &&
    computerChoice.toLowerCase() === "paper")
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}
