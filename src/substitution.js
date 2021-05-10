// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  

  function substitution(input, alphabet, encode = true) {
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

    if (alphabet === undefined || alphabet.length !== 26) return false;

    let uniqueCharactersCheck = true;
    const alphabetArr = alphabet.split("");
    alphabetArr.forEach((character) => {
      for(let i = alphabetArr.indexOf(character) + 1; i < 26; i++)
      {
        if (character === alphabetArr[i]) {
          uniqueCharactersCheck = false;
        };
      } 
    })
    if (uniqueCharactersCheck === false) return false;

    let output = "";
    input = input.toLowerCase();
    input = input.split("");
    if (encode === false) [standardAlphabet, alphabet] = [alphabet, standardAlphabet];
    input.forEach((character) => {
      for(let i = 0; i < 26; i++){
        if (character.charCodeAt(0) === 32){
          output += character;
          break;
        }else if(standardAlphabet[i] === character) {
          output += alphabet[i];
        }
      }
    })
    return output;
  }


  return {
    substitution,
  };
})();



module.exports = { substitution: substitutionModule.substitution };
