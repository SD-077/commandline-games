const args = process.argv.slice(2);

const vocalic = ["a", "e", "i", "o", "u"];

const silentHWords = new Set([
  "honor",
  "honest",
  "honour",
  "hour",
  "heir",
  "herb", // "herb" is silent in US English
]);

const textSuffix = "ay";

// we can imediately take the needed text from the possibly passed arguments. Checks on it are following.
let userText = args[0];

console.log("");

// check if the passed user text could make problems
if (!userText) {
  console.warn(
    "You have passed nothing as a parameter to the program. Please pass something intelligent, like 'To be or not to be, blabla...'",
  );
  console.warn(
    "Please be aware that you have to use '' or \"\" to wrap your text, in case it contians spaces. Otherwise, the program will only take the first word of your text.",
  );
  return;
}

if (args.length > 1) {
  console.warn(
    "You have passed more than one parameters to the program. Only the first one will be considered: '" +
      userText +
      "'",
  );
  console.warn(
    "Please be aware that you have to use '' or \"\" to wrap your text in case it contians spaces. Otherwise, the program will only take the first word of your text, as shown above.",
  );
}

console.log("");
console.log("Your text is: '" + userText + "'");

// ok let's start
// make an array of words out of the text
let userTextAsArray = userText.split(" ");
console.log("The words of your text are: ", userTextAsArray);

console.log(
  "The text will be iterated word by word. Each of the words will be logged as 'local word'",
);
console.log("--------------------------------------------");
console.log("--------------------------------------------");

for (let i = 0; i < userTextAsArray.length; i++) {
  let localWord = userTextAsArray[i];

  console.log("");

  let localWordAsArray = localWord.toLowerCase().split("");

  console.log(
    "The letters of the local word '" + localWord + "' are: ",
    localWordAsArray,
  );
  console.log("--------------------------------------------");

  if (
    vocalic.includes(localWordAsArray[0]) ||
    silentHWords.has(localWord.toLowerCase())
  ) {

    console.log(
      "the current word '" +
        localWord +
        "' start with a vocalic letter. So we will just add the suffix '" +
        textSuffix +
        "' to the word.",
    );

    localWordAsArray.push(textSuffix);
    localWord = localWordAsArray.join("");
    console.log("Now the local word will be '" + localWord + "'");
    userTextAsArray[i] = localWord;

  } else {
    console.log(
      "The first letter of the local word '" +
        localWord +
        "' is a consonantic letter. So we will move it to the end of the local word and add the suffix '" +
        textSuffix +
        "' to it.",
    );

    let letterToMove = localWordAsArray.shift();
    localWordAsArray.push(letterToMove);
    localWordAsArray.push(textSuffix);
    localWord = localWordAsArray.join("");
    console.log("Now the local word will be '" + localWord + "'");
    userTextAsArray[i] = localWord;
  }

  // finaly log the result
  console.log("");
  console.log("The final result is: '" + userTextAsArray.join(" ") + "'");
  console.log("--------------------------------------------");
  console.log("--------------------------------------------");

}
