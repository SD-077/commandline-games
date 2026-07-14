//playerMove
let playerMove = process.argv[2];
console.log(playerMove);

//define the valid moves
const validMoves = ['rock', 'paper', 'scissors'];

//check input is valid
let isvalid = false;
for (let i = 0; i < validMoves.length; i = i + 1) {
  if (validMoves[i] === playerMove) {
    isvalid = true;
  }
}

if (isvalid === false) {
  console.log('Invalid move. Please choose: rock, paper, or scissors.');
  process.exit(1);
}

//computerMove
let computerMove = validMoves[Math.floor(Math.random() * validMoves.length)];
console.log(computerMove);

//determine winner
if (playerMove === computerMove) {
  console.log('draw!');
} else if (
  (playerMove === 'rock' && computerMove === 'scissors') ||
  (playerMove === 'paper' && computerMove === 'rock') ||
  (playerMove === 'scissors' && computerMove === 'paper')
) {
  console.log('win!');
} else {
  console.log('lose!');
}   

