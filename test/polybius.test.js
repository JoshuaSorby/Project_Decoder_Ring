const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("There should be a function called polybius", () => {
        expect(polybius).to.exist;
    });
    it("A string should be converted into a series of numbers in accoradance to a Polybius Square", () => {
        const actual = polybius("Hello");
        const expected = "3251131343";
        expect(expected).to.equal(actual);
    });
    it("The function should work with capital letters", () => {
        const actual = polybius("A");
        const expected = "11";
        expect(expected).to.equal(actual);
    });
})