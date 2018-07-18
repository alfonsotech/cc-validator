var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var validator = require('./validator.js');

//Basic mocha test set-up
// describe('Basic Mocha String Test', function () {
//  it('should return number of charachters in a string', function () {
//         assert.equal("Hello".length, 5);
//     });
//  it('should return first charachter of the string', function () {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// });

//Basic Mocha/Chai set-up with external file
describe('Say Hello', function () {
 it('should say Hello!', function () {
        expect(validator.sayHello()).to.equal("Hello!")
    });
 
});