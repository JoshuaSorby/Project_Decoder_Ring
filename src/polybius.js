// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let output = "";
    polybiusArr = [
      ["a","f","l","q","v"], ["b","g","m","r","w"], ["c","h","n","s","x"],
      ["d", "i/j", "o", "t", "y"], ["e", "k", "p", "u", "z"]
    ];

    //For decoding messages
    if (encode === false) {
      if (input.replace(" ", "").length % 2 === 1) return false;
      for(let i = 1; i < input.length; i += 2){
        if (input[i-1] === " ") {
          i++;
          output += " ";
        };
        let j = i-1;
        output += polybiusArr[input[j]-1][input[i]-1];
      }
      return output;
    }

    //.findIndex might want to look into it

    //Inplement helper function
    //For encoding messages
    input = input.toLowerCase();
    input = input.split("");
    input.forEach((character) => {
      if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122){ 
        if (character === "i" || character === "j") character = "i/j";
        for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
          if (character === polybiusArr[i][j]) {
            output += `${i+1}${j+1}`;
            break;
          };
        }
      }
    }else {
      output += character;
    }
    })
    return output;
  }
  
  console.log(polybius("23",false));

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
