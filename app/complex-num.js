(function(){
	'use strict';

	/*Dependencies declared*/
	var mainApp	= require('complexnum'),
		figlet 	= require('figlet'),
		clear	= require('clear'),
		chalk	= require('chalk'),
		readInput = require('readline-sync');

	/*Clears console and prints app description to screen*/
	clear();
	console.log(chalk.white.bold(figlet.textSync('complexnum', {font:'Banner', horizontalLayout: 'full' })));
	console.log(chalk.white.bgMagenta.bold("A console app that performs basic arithmetic operation on complex numbers."));
	console.log(chalk.magenta.bold("\n Please read the instruction and choose an option below.\n"));

	/*Displays options to user*/
	var getUserChoice = function(){

		/*Display menu*/
		console.log(chalk.blue.bold("1 : Add complex numbers.\n"));
		console.log(chalk.blue.bold("2 : Subtract complex numbers.\n"));
		console.log(chalk.blue.bold("3 : Multiply complex numbers.\n"));
		console.log(chalk.blue.bold("4 : Perform division with two complex numbers.\n"));
		console.log(chalk.blue.bold("5 : Get the conjugate of a complex number.\n"));
		console.log(chalk.blue.bold("0 : Exit the console app\n"));
		var option = readInput.question(chalk.magenta.bold("Your input: "));
		return option;
	};

	/*Evaluates user's choice*/
	var evaluateOption = function(input){

		while(Math.abs(input) >= 0 && Math.abs(input) < 6){

			var mainResult,
				compNumArray;

			/*Performs operation based on user's choice*/
			switch (input){
				
				case "1":
					console.log(chalk.green.bold("\n User Choice: 1..Addition of complex numbers"));
					compNumArray = getComplexNum();
					mainResult = mainApp.add(compNumArray[0], compNumArray[1]);
					console.log(chalk.green.bold("Addition of complex numbers "+compNumArray[0]+" and "+compNumArray[1]+" is "+ mainResult+"\n"));
				break;

				case "2":
					console.log(chalk.green.bold("\n User Choice: 2..Subtraction of complex numbers"));
					compNumArray = getComplexNum();
					mainResult = mainApp.subtract(compNumArray[0], compNumArray[1]);
					console.log(chalk.green.bold("Complex numbers "+compNumArray[0]+" minus complex number "+compNumArray[1]+" gives "+ mainResult+"\n"));
				break;

				case "3":
					console.log(chalk.green.bold("\n User Choice: 3..Multiplication of complex numbers"));
					compNumArray = getComplexNum();
					mainResult = mainApp.multiply(compNumArray[0], compNumArray[1]);
					console.log(chalk.green.bold("Complex numbers "+compNumArray[0]+" multiply by complex number "+compNumArray[1]+" gives "+ mainResult+"\n"));
				break;

				case "4":
					console.log(chalk.green.bold("\n User Choice: 4..Division of complex numbers"));
					compNumArray = getComplexNum();
					mainResult = mainApp.divide(compNumArray[0], compNumArray[1]);
					console.log(chalk.green.bold("Complex numbers "+compNumArray[0]+" divided by complex number "+compNumArray[1]+" gives "+ mainResult+"\n"));
				break;

				case "5":
					console.log(chalk.green.bold("\n User Choice: 5..Conjugate of a complex number"));
					compNumArray = getSingleCompNum();
					mainResult = mainApp.conjugate(compNumArray[0], compNumArray[1]);
					console.log(chalk.green.bold("Conjugate of complex number "+compNumArray[0]+"  is "+mainResult+"\n"));
				break;

				case "0":
					console.log(chalk.magenta.bold("Thank you for using the console app. Good bye!!\n"));
					var exitCode = 1;
					process.exit(exitCode);
				break;
					
				default:
					console.log(chalk.red("User input must be a number between 0 and 5. Please try again."));
				break;
			}
		break;
		}
		return evaluateOption(getUserChoice());
	};

	/*Get's complex number inputs from user*/
	var getComplexNum = function(){

		console.log(chalk.green("Please input real and imaginary parts of each complex number without the `i`\n"));
		var firstReal 	= readInput.question(chalk.white.bold("Enter the real part of first complex num: \n")),
			firstImag 	= readInput.question(chalk.white.bold("Enter the imaginary part of first complex num: \n")),
			secondReal 	= readInput.question(chalk.white.bold("Enter the real part of second complex num: \n")),
			secondImag	= readInput.question(chalk.white.bold("Enter the imaginary part of second complex num: \n")),
			firstCom 	= (typeof firstReal === "undefined")? new mainApp(0, firstImag):
						  (typeof firstImag === "undefined")? new mainApp(firstReal, 0): new mainApp(firstReal, firstImag),
			secondCom	= (typeof secondReal === "undefined")? new mainApp(0, secondImag):
						  (typeof secondImag === "undefined")? new mainApp(secondReal, 0): new mainApp(secondReal, secondImag);
		return [firstCom, secondCom];
	};

	/*Get's a single complex number from user*/
	var getSingleCompNum = function(){
		console.log(chalk.green("Please input real and imaginary parts of complex number without the `i`\n"));
		var real 		= readInput.question(chalk.white.bold("Enter the real part of complex num: \n")),
			imaginary	= readInput.question(chalk.white.bold("Enter the imaginary part complex num: \n")),
			complexNum 	= new mainApp(real, imaginary);
		return [complexNum];
	};	
	
	/*Starts application*/
	evaluateOption(getUserChoice());
})();