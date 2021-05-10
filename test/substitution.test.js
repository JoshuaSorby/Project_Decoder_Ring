const {expect} = require("chai");
const {substitution} = require("../src/substitution");
const alphabet = ".waeszrdxtfcygvuhbijnokmpl";

describe("substitution", () => {
    it("There is a function called substitution", () => {
        expect(substitution).to.exist;
    });
    it("Typing in one letter will substitute it for another", () => {
        const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
        const actual = substitution(standardAlphabet, alphabet, true);
        expect(actual).to.equal(alphabet);
    })
    it("The function should ignore spaces", () => {
        const actual = substitution("a b", alphabet)
        expect(actual).to.equal(". w");
    })
    it("When decoding, the function should convert messages using the standadrd alphabet", () => {
        const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
        const actual = substitution(alphabet, alphabet, false);
        expect(actual).to.equal(standardAlphabet);
    })
});
