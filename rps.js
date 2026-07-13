const moves = ['rock','paper','scissors'];
const playerMove = process.argv[2];
// Validate input using loop
let isValid = false;
for (let i = 0; i < moves.length; i++){
    if (moves [i] === playerMove) {
        isValid = true;
    }
}
if (!isValid) {
    console.log ('invalid move. Please choose rock, paper, or scissors.');
    process.exit(1);
}
// Randomly generate the computer's move
const randomIndex = Math.floor(Math.random () * moves.length);
const computerMove = moves[randonIndex];
//Object storing what each move beats
const beats ={
    rock : 'scissors',
    paper : 'rock',
    scissors: 'paper'
};
// Determine the results
let result;
if (playerMove === computerMove) {
    result = "It's a tie!";
} else if (beats[playerMove] === computerMove){
result = 'You win!';
}
else{
result = 'You lose!';
}
console.log('you chose ${playerMove}. computer chose ${computerMove. ${result}');