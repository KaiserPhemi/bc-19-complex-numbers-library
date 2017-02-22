#!/usr/bin/env node
'use strict';

function Complex(real, imaginary){

	/*Checks if real and imaginary parts exist*/
	this.xAxis = (typeof real === 'undefined')? 0 : parseFloat(real);
	this.yAxis = (typeof imaginary === 'undefined')? 0 : parseFloat(imaginary);
}

/*Method for addition of complex numbers*/
Complex.add = function(operandA, operandB){

	return new Complex( (operandA.xAxis+operandB.xAxis), (operandA.yAxis+operandB.yAxis) ).toString();
};

/*Method for subtraction of complex numbers*/
Complex.subtract = function(operandA, operandB){

	return new Complex( (operandA.xAxis-operandB.xAxis), (operandA.yAxis-operandB.yAxis) ).toString();
};

/*Method to multiply two complex numbers*/
Complex.multiply = function(operandA, operandB){

	return new Complex( (operandA.xAxis * operandB.xAxis) - (operandA.yAxis * operandB.yAxis), (operandA.xAxis * operandB.yAxis) + (operandA.yAxis * operandB.xAxis) ).toString();
};

/*Method for division of complex numbers*/
Complex.divide = function(operandA, operandB){

	var divisor = Math.pow(operandB.xAxis, 2) + Math.pow(operandB.yAxis, 2);
	return new Complex( ((operandA.xAxis*operandB.xAxis) + (operandA.yAxis*operandB.yAxis))/divisor, ((operandA.yAxis*operandB.xAxis) - (operandA.xAxis*operandB.yAxis))/divisor ).toString();
};

/*Method to find the conugate of a complex number*/
Complex.conjugate = function(args){
	
	return new Complex(args.xAxis, -args.yAxis).toString();
};

/*This converts the output to string*/
Complex.prototype.toString = function() {

	return "{" + this.xAxis + ", " + this.yAxis + "i}";
};

module.exports = Complex;
