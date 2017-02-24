# complexnum
[![Build Status](https://travis-ci.org/KaiserPhemi/bc-19-complex-numbers-library.svg?branch=master)](https://travis-ci.org/KaiserPhemi/bc-19-complex-numbers-library)
[![Code Issues](https://www.quantifiedcode.com/api/v1/project/ccf9fa49e50943cdbec61d2143977ff6/badge.svg)](https://www.quantifiedcode.com/app/project/ccf9fa49e50943cdbec61d2143977ff6)

## Introduction
* **`complexnum`** is a Javascript complex number solving app.
* It has the following features;
	* Add two complex numbers and return the result.
	* Multiply two complex numbers and return the result.
	* Perform division operation on two complex numbers and return the result.
	* Perform subtraction operation on two complex numbers
	* Return the conjugate of a complex number.

## Dependencies
* This is a library thus, requires minimal dependencies.

* For testing purposes the following would be required
	* **[jasmine-node](https://www.npmjs.com/package/jasmine-node)**-Simple JavaScript BDD testing framework for Node.
	
* For the console app, the following would be required
	* **[figlet](https://www.npmjs.com/package/figlet)**-Creates ASCII Art from text.
	* **[chalk](https://www.npmjs.com/package/chalk)**- String styling for the terminal.
	* **[readline-sync](https://www.npmjs.com/package/readline-sync)**- Synchronously read users terminal input.
	* **[clear](https://www.npmjs.com/package/clear)**- Clears the terminal screen.


## Installation
* Navigate to directory of choice on `terminal`.

	`npm install complexnum`

## Usage

	var yourObject = require("complexnum");
	var arg1 = new yourObject(2, 3),
		arg2 = new yourObject(4, 5);
	
	console.log(yourObject.add(arg1, arg2));

Output should be `{6, 8i}`

## Test

	npm test

## Contributing
Contributions encouraged but please take note to adhere to existing coding style. Unit tests can be added for any new or changed functionality
