const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should give fizz/buzz string or number', function() {

        const normalCases = [
            { num: 6, expected: "fizz" },
            { num: 10, expected: "buzz" },
            { num: 30, expected: "fizz-buzz" },
            { num: 0, expected: "fizz-buzz" },
            { num: -8, expected: -8 }
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            answer.should.equal(input.expected);
        });
    });
    it('should raise error with bad input', function() {

        const badInputs = ["2", false, null, NaN, "bad"];

        badInputs.forEach(function(input) {
            (function() {
          		adder(input)
      		}).should.throw(Error);
        })

        //why is this not okay?
        // const answer = fizzBuzzer(input);
		// answer.should.throw(Error);
    })


});
