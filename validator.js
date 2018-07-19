var validator = {
    //Function to test set up of mocha/chai
	sayHello: function() {
		return "Hello!";
	},
    doubleValues: function(string) {
        //Double the value of every second digit beginning from the right
        var counter = 0;
        string = string.replace(/\D/g, '');
        var numArray = string.split('');
        var newArray = [];
        
        for (var i = 0; i < numArray.length; i++) {
            if(i===0 || i%2===0) {
                newArray.push(parseInt(numArray[i]) *2);
            }  else {
                newArray.push(parseInt(numArray[i]));
            } 
        }
        return newArray;
    },
    //Sum all the digits
    sumAllDigits(string) {
        var newArray = this.doubleValues(string);
        var cumulativeTotal = 0;
        for (var i = 0; i < newArray.length; i++) {
            cumulativeTotal += newArray[i]
        }
        return cumulativeTotal;
    },
    validateCreditCard: function(string) {
        var totalValue = this.sumAllDigits(string);
        return (totalValue % 10) === 0;
    },
	//Source of the Luhn algorithm: https://en.wikipedia.org/wiki/Luhn_algorithm
	validateCreditCardOriginal: function(value) {
        //Declare global variables
		var nCheck = 0, nDigit = 0, bEven = false;
        //Check value for non-integer characters and replace with empty string
        value = value.replace(/\D/g, '');
        //Iterate over value string from end to beginning
        for (var n = value.length - 1; n >= 0; n--) {
            //Store value of character at current index
            var cDigit = value.charAt(n);
            //parse character into a number with a base of ten
            nDigit = parseInt(cDigit, 10);
            //if bEven toggle is currenlty true
            if (bEven) {
                //and if current character doubled is greater than nine
                if ((nDigit *= 2) > 9) {
                    //take away 9 from number to return it to a single digit number
                    nDigit -= 9;
                }
            }
            //add current value to the number check value
            nCheck += nDigit;
            //toggle bEven switch
            bEven = !bEven;
        }

        //Return true if nCheck is divisible by ten with no remainder, else return false
        return (nCheck % 10) === 0;
	}
}

  module.exports = validator;
