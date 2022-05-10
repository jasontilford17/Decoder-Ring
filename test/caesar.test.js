// Write your tests here!
const { expect } = require("chai")
const { caesar } = require("../src/caesar");

describe("caesar() passing error handling", () => {
it("should return false if its shift value is 0 or greater than 25", () => {
    const message = "zebra magazine";
    const shift = 0;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
})

it("should return false if shift is less than -25", () => {
    const message = "zebra magazine";
    const shift = -26;
    const actual = caesar(message, shift);
    expect(actual).to.be.false
})
})
