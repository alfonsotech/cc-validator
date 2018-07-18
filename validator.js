var validator = {
	sayHello: function() {
		return "Hello!";
	},
	//Source of the Luhn algorithm: https://en.wikipedia.org/wiki/Luhn_algorithm
	validateCreditCard: function(value) {
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
}

  module.exports = validator;
