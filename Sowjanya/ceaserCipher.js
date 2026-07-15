const args = process.argv.slice(2);

const userInputPhrase = args[0].split(" ");
const noOfShifts = parseInt(args[1]) % 26;
const newPhrase = [];

for (const word of userInputPhrase) {
  let newWord = "";
  let newLetter;

  for (const letter of word) {
    let asciiCode = letter.charCodeAt(0);
    let newAsciiCode = asciiCode + noOfShifts;

    if (asciiCode >= 65 && asciiCode <= 90 && newAsciiCode > 90) {
      newAsciiCode = 64 + noOfShifts;
    } else if (asciiCode >= 97 && asciiCode <= 122 && newAsciiCode > 122) {
      newAsciiCode = 96 + noOfShifts;
    } else if (asciiCode >= 65 && asciiCode <= 90 && newAsciiCode < 65) {
      newAsciiCode = 91 + noOfShifts;
    } else if (asciiCode >= 97 && asciiCode <= 122 && newAsciiCode < 97) {
      newAsciiCode = 123 + noOfShifts;
    }

    newLetter = String.fromCharCode(newAsciiCode);

    newWord += newLetter;
  }

  newPhrase.push(newWord);
}
console.log("Ceaser cipher is", newPhrase.join(" "));
