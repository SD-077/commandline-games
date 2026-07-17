//Get the phrase from the terminal
const phrase = process.argv[2];

//Get the shift number from the terminal
const shift = Number(process.argv[3]);

//Convert the phrase to lowercase
const lowerPhrase = phrase.toLowerCase();

//Create alphabets array
const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create the end result var
let result = "";

//Create a loop
for (let i = 0; i < lowerPhrase.length; i++) { 
  const letter = lowerPhrase[i]; //Break the phrase into letters
  const letterPosition = alphabets.indexOf(letter) //Find the index of each letter
  const positionShift = letterPosition + shift; //Add the shift to new position
  const wrappedPosition = (positionShift + 26) % 26; //Handle wrapping past Z
  const newLetter = alphabets[wrappedPosition]; //Grab the letter at the new position
  result += newLetter; //Add to the a result string
}

//Print the result
console.log(result)