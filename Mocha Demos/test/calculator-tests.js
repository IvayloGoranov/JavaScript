let expect = require("chai").expect;
let createCalculator = require("../calculator").createCalculator;

describe("createCalculator()", function() {
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });

    it("should return 5 after {add 3; add 2}", function() {
        calc.add(3);
        calc.add(2);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
});

