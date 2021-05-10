const {expect} = require("chai");
const {caesar} = require("../src/caesar");



describe("caesar", () => {
    it("There should a function called 'caesar'", () => {
        expect(caesar).to.exist;
    });
    it("A letter must be shifted by at least 1 value and less than 25 values", () => {
        expect(caesar("a", -25)).to.equal(false);
        expect(caesar("a", 25)).to.equal(false);
        expect(caesar("a", 0)).to.equal(false);
    });
    it("input must work with capital letters", () => {
        actual = caesar("Z", 1, true);
        const expected = "a";
        expect(expected).to.equal(actual);
    });
    it("Only letters should have their values shifted", () => {
        const expected = "!123 ?<>,.";
        const actual = caesar("!123 ?<>,.", 1, true);
        expect(expected).to.equal(actual);
    })
});
