const userInputPhrase = process.argv.slice(2);
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let translatedWord;
const translatedPhrase = [];

for (const word of userInputPhrase) {
  if (vowels.some((vowel) => word[0] === vowel)) {
    translatedWord = word + "way";
    translatedPhrase.push(translatedWord);
  } else if (
    !vowels.some((vowel) => word[0] === vowel) &&
    !vowels.some((vowel) => word[1] === vowel)
  ) {
    if (word[0] === word[0].toUpperCase()) {
      translatedWord = translateAndCapitalize(word, 2);
      +"ay";
    } else {
      translatedWord = word.slice(2) + word.slice(0, 2) + "ay";
    }
    translatedPhrase.push(translatedWord);
  } else {
    if (word[0] === word[0].toUpperCase()) {
      translatedWord = translateAndCapitalize(word, 1);
      +"ay";
    } else {
      translatedWord = word.slice(1) + word[0] + "ay";
    }
    translatedPhrase.push(translatedWord);
  }
}
console.log(`Pig Latin translated phrase is: ${translatedPhrase.join(" ")}`);

function translateAndCapitalize(word, indexToBeCorrected) {
  let translatedAndCapitalizedWord = "";
  const oldLowerCasedFirstLetter = word[0].toLowerCase();
  const newUpperCasedFirstLetter = word[indexToBeCorrected].toUpperCase();
  if (indexToBeCorrected == 2) {
    translatedAndCapitalizedWord =
      newUpperCasedFirstLetter +
      word.slice(3) +
      oldLowerCasedFirstLetter +
      word[1];
  } else {
    translatedAndCapitalizedWord =
      newUpperCasedFirstLetter + word.slice(2) + oldLowerCasedFirstLetter;
  }
  return translatedAndCapitalizedWord;
}
