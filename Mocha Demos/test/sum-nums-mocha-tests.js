
let expect = require("chai").expect;
let sumArray = require("../sumArray").sumArray;

describe("sumArray(arr) - sum array of numbers", function() {
    it("should return 3 for [1, 2]", function() {
        let expectedSum = 3;
        let actualSum = sumArray([1, 2]);
        expect(actualSum).equal(expectedSum);
    });

    it("should return 1 for [1]", function() {
        let expectedSum = 1;
        let actualSum = sumArray([1]);
        expect(actualSum).equal(expectedSum);
    });

    it("should return 0 for empty array", function() {
        let expectedSum = 0;
        let actualSum = sumArray([]);
        expect(actualSum).equal(expectedSum);
    });

    it("should return NaN for non-numeric input", function() {
        let actualSum = sumArray(['pesho', 'gosho']);
        expect(actualSum).to.be.NaN;
    });
});
