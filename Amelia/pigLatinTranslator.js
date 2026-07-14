//read the words from the command line
let words = process.argv.slice(2);
console.log(words);

//define the vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

//write a function to translate a word into pig latin
function translateWord(word) {
  //check if the first letter is a vowel
  let firstLetter = word[0];
  let isVowel = false;
  
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === firstLetter) {
      isVowel = true;       
    }
  }

  if (isVowel === true) {
    return word + 'way';
  } else {
    let restOfWord = word.slice(1);
    return restOfWord + firstLetter + 'ay';
  }
}

//use the function on every word
let translatedWords = [];
for (let i = 0; i < words.length; i++) {
  translatedWords[i] = translateWord(words[i]);
}

//print the translated words
let result = '';
for (let i = 0; i < translatedWords.length; i++) {
    if (i === 0) {
        result = translatedWords[i];
    } else {
        result = result + ' ' + translatedWords[i];
    }
}

console.log(result);
