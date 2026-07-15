//structure 
//link node js to what the user inputs - figure out how that can be a varied length this time
//create loop to loop through every word user enters 
//create 3 versions which apply the rules of consonant+vowel, 2consonants and vowel to each word entered by user
// have a console.log output for the results

let userInput = process.argv[2].split(" ");
let pigLatinWord;
let pigLatinPhrase = []

function isVowel (letter) {
    return letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u"
}

for (let i = 0; i < userInput.length; i++) {
    let currentWord = userInput[i];
    if (isVowel(currentWord[0])){
        pigLatinWord = `${currentWord}way`;
        pigLatinPhrase.push(pigLatinWord);
    }
   else if (!isVowel(currentWord[0]) && isVowel(currentWord[1])) {
        pigLatinWord = `${currentWord.slice(1)}${currentWord[0]}ay` ;
        pigLatinPhrase.push(pigLatinWord);
}
    else if (!isVowel(currentWord[0]) && !isVowel(currentWord[1])) {
        pigLatinWord = `${currentWord.slice(2)}${currentWord.slice(0, 2)}ay` ;
        pigLatinPhrase.push(pigLatinWord);
    }
}
console.log(pigLatinPhrase.join(" "));