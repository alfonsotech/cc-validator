var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should;
var validator = require('./validator.js');


//**** SET UP TESTS ***//
//Basic mocha test set-up
describe.skip('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});


//Basic Mocha/Chai set-up with external file
describe.skip('Say Hello', function () {
    
 it('should say Hello!', function () {
        expect(validator.sayHello()).to.equal("Hello!");
    });
 
});



//**** LUHN TEST ***//
//Original Luhn algorithm Test
describe.skip('Original Luhn algorithm validation', function () {

//Validate true credit card test
 it('should validate valid credit card number', function () {
        expect(validator.validateCreditCardOriginal('4012888888881881')).to.equal(true);
    });

 //Fail to validate false credit card test
 it('should fail to validate incorrect number', function () {
        expect(validator.validateCreditCardOriginal('4012888888881882')).to.equal(false);
    });

 //Fail to validate credit card number with non-integer characters
 it('should fail to validate otherwise valid credit card number that contains non-integer charcters', function () {
        expect(validator.validateCreditCardOriginal('40128*&8888818Rr')).to.equal(false);
    });

 //Fail to validate false credit card number with non-integer characters
 it('should fail to validate invalid credit card number that contains non-integer charcters', function () {
        expect(validator.validateCreditCardOriginal('4rR2888*&8881882')).to.equal(false);
    });
 
});



//**** VALIDATOR TEST ***//
//Double Array Values Test
describe('Double values', function () {

    it('should output an array', function () {
        expect(validator.doubleValues('4012888888881881')).to.be.an('array');
    });


    it('should double values in original input', function () {
        expect(validator.doubleValues('5555')).to.deep.equal([10,5,10,5]);
    });

});


//Sum All Digits
describe('Sums all integers in array', function () {

 it('should return the sum of all integers', function () {
        expect(validator.sumAllDigits('5555')).to.equal(30);
    });

});


//Validate Credit Card
describe('Validates credit card number', function () {

//Validate true credit card test
 it('should validate valid credit card number', function () {
        expect(validator.validateCreditCard('5555')).to.equal(true);
    });
 it('should validate valid credit card number 2', function () {
        expect(validator.validateCreditCardOriginal('4012888888881881')).to.equal(true);
    });

 //Fail to validate false credit card test
 it('should fail to validate incorrect number', function () {
        expect(validator.validateCreditCard('4012888888881882')).to.equal(false);
    });

  //Fail to validate numbe containing non-integers
  it('should fail to validate number with non-integers', function () {
        expect(validator.validateCreditCard('4012Rr888&+81881')).to.equal(false);
    });
 
});

