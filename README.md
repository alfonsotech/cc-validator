# cc-validator
A credit card validator using the Luhn algorithm in Node.js with testing in Mocha/Chai built in about 3 hours.


#### How To Run Tests
- Clone this repository onto local machine (i.e., copy the clone link and run ``` git clone <clone url>```).
- If Mocha is not installed on local machine, run ```npm install -g mocha``` to install Mocha globally on your machine. You can check to see mocha is correctly inistalled on your machine by running ```which mocha``` and you should get a path to mocha on you machine: e.g., ```./node_modules/.bin/mocha```.
- Run ```npm i``` to install dependencies.
- Run ```npm test``` to run tests in the terminal.


#### Technologies Used
- [node.js](https://nodejs.org/)

- [mocha](https://mochajs.org/)

- [chai](http://www.chaijs.com/)


#### Acknowlegements
I refered to this tutorial to refresh my memory: [JavaScript — Unit Testing using Mocha and Chai](https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71)

I used the javascript version of the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) provided on the Wikepedia page sent with the instructions.


----
##### Instructions Provided For Test

Using the programming language that you feel most proficient with and following TDD, you will implement the validation algorithm for credit cards. For this, please send us a Github repository.


Introduction

In this exercise, you should implement a validation algorithm for a 16 digit number simulating a credit card number.


Please follow these steps:

1. Double the value of every second digit beginning from the right. For example [1,2,7,4] becomes [2,2,14,4].

2. Sum all the digits.

For example, [2,2,14,4] becomes 2+2+1+4+4 = 13

3. Calculate the remainder when the sum is divided by 10.

For the above example, the remainder would be 3.

4. If the result equals 0, the credit card number is valid.


Input Format

4012888888881881


Output Format

Credit Card 4012888888881881 is valid.

Credit Card 4012888888881882 is not valid.

More details about the Luhn algorithm: https://en.wikipedia.org/wiki/Luhn_algorithm


Please solve the exercise and send us the Github link within 72hrs.​

```
function validateLuhn(value) {
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, '');

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n);
        nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) {
                nDigit -= 9;
            }
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) === 0;
}
```
