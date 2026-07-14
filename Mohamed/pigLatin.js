const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log('Usage: node pigLatin.js "your phrase here"');
  process.exit(1);
}

const VOWELS = /^[^aeiou]+/i; // matches the leading consonant cluster, if any

function isCapitalized(word) {
  return word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase();
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function toPigLatin(word) {
  const wasCapitalized = isCapitalized(word);
  const lower = word.toLowerCase();

  const match = lower.match(VOWELS);

  let result;
  if (match === null) {
    // starts with a vowel
    result = lower + "way";
  } else {
    const cluster = match[0];
    result = lower.slice(cluster.length) + cluster + "ay";
  }

  return wasCapitalized ? capitalize(result) : result;
}

const output = input.split(/\s+/).map(toPigLatin).join(" ");
console.log(output);