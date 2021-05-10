// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

 
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift >= 25 || shift <= -25) {
      return false
    };
    if (encode === false) shift = shift * -1;
    let output = input;
    const shiftedArr = [];
    output = output.toLowerCase();
    output = output.split("");

    //shiftedArr use .map method
    output.forEach((character) => {
      let characterAscii = character.charCodeAt(0);
      if (characterAscii >= 97 && characterAscii <= 122) {
        characterAscii += shift;
        if (characterAscii < 97) characterAscii += 26;
        if (characterAscii > 122) characterAscii -= 26;
      }
      character = String.fromCharCode(characterAscii);
      shiftedArr.push(character)});
    output = shiftedArr.join("");
    console.log(output);
    return output;
  }

  console.log(caesar("HELLO THERE TRAVELER!", -1, false));

  return {
    caesar,
  };
  
})();



module.exports = { caesar: caesarModule.caesar };
