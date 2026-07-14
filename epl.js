const vowels = ['a', 'e', 'i', 'o', 'u'];

// Get the phrase and split it into words
const phrase = process.argv[2];
const words = phrase.split(' ');

const translatedWords = [];

for (let i = 0; i < words.length; i++) {
  const word = words[i].toLowerCase();
  const firstLetter = word[0];

  // Check if the first letter is a vowel
  let startsWithVowel = false;
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === firstLetter) {
      startsWithVowel = true;
    }
  }

  let translatedWord;

  if (startsWithVowel) {
    // Rule 3: starts with a vowel
    translatedWord = word + 'way';
  } else {
    // Walk through the word to find how many consonants come before the first vowel
    let consonantCount = 0;

    for (let k = 0; k < word.length; k++) {
      const letter = word[k];

      let isVowel = false;
      for (let j = 0; j < vowels.length; j++) {
        if (vowels[j] === letter) {
          isVowel = true;
        }
      }

      if (isVowel) {
        break;
      } else {
        consonantCount++;
      }
    }

    const consonantChunk = word.slice(0, consonantCount);
    const remainingWord = word.slice(consonantCount);

    translatedWord = remainingWord + consonantChunk + 'ay';
  }

  translatedWords.push(translatedWord);
}

const translatedPhrase = translatedWords.join(' ');
console.log(translatedPhrase);