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

const randomX = Math.floor(Math.random() * options.length);
const pcOutput = options[randomX];

console.log(`You chose: ${userInput} and Computer chose: ${pcOutput}`);

if (userInput.toUpperCase() === pcOutput.toUpperCase()) {
  console.log("It's a tie!");
} else if (
  (userInput.toUpperCase() === "R" &&
    pcOutput.toUpperCase() === "S") ||
  (userInput.toUpperCase() === "P" &&
    pcOutput.toUpperCase() === "R") ||
  (userInput.toUpperCase() === "S" &&
    pcOutput.toUpperCase() === "P")
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}
