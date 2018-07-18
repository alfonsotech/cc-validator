var assert = require('assert');
var expect = require('chai').expect;
var validator = require('./validator.js');

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
        expect(validator.sayHello()).to.equal("Hello!")
    });
 
});

//Double Array Values Test
describe('Validates credit card number', function () {

//Validate true credit card test
 it('should validate valid credit card number', function () {
        expect(validator.validateCreditCard('4012888888881881')).to.equal(true);
    });

 //Fail to validate false credit card test
 it('should fail to validate incorrect number', function () {
        expect(validator.validateCreditCard('4012888888881882')).to.equal(false);
    });

 //Fail to validate credit card number with non-integer characters
 it('should fail to validate otehrwise valid credit card number that contains non-integer charcters', function () {
        expect(validator.validateCreditCard('40128*&8888818Rr')).to.equal(false);
    });

 //Fail to validate false credit card number with non-integer characters
 it('should fail to validate invalid credit card number that contains non-integer charcters', function () {
        expect(validator.validateCreditCard('4rR2888*&8881882')).to.equal(false);
    });
 
});


 


 



 








