outter : while (true) {
	var input = prompt('Prime Number Finder. Put your positive integer.');
	var numinteger = parseInt(input);
	var	numfloat = parseFloat(input);
	var	number = Number(input);
	var flag = false;
	if  (numinteger-numfloat !== 0) {
		alert('1 is not a prime number.');
	} else if  {
		alert('Enter a positive integer!');
	} else if (number == 2) {
		alert('2 is a prime number.')
		break outter;
	} else if (number > 1){
		var result = [];
inner : 	for (let i = 2; i < number;i++) {
				for (let j = 2;j < i;j++) {
					if (i % j == 0) {
						continue inner;
					}
				}
				result.push(i);
			}
			alert('For n = '+ number + ' prime numbers are ' + result);
			break outter;
	} else {
		alert('Enter a positive integer!');
	}
	
}
