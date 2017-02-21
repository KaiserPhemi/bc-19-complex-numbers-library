#!/usr/bin/env node

'use strict';

function Complex(real, imaginary){

	/*Checks if real and imaginary parts exist*/
	this.xAxis = (real == null)? 0 : parseFloat(real);
	this.yAxis = (imaginary == null)? 0 : parseFloat(imaginary);
}

/*Method for addition of complex numbers*/
Complex.add = function(arg1, arg2){
	
	return new Complex(arg1.xAxis+arg2.xAxis, arg1.yAxis+arg2.yAxis);
};

/*Method for subtraction of complex numbers*/
Complex.subtract = function(arg1, arg2){

	return new Complex((arg1.xAxis-arg2.xAxis), (arg1.yAxis-arg2.yAxis));
};

/*Method to multiply two complex numbers*/
Complex.multiply = function(arg1, arg2){

	return new Complex( (arg1.xAxis * arg2.xAxis) - (arg1.yAxis * arg2.yAxis), (arg1.xAxis * arg2.yAxis) + (arg1.yAxis * arg2.xAxis) );
};

/*Method for division of complex numbers*/
Complex.divide = function(arg1, arg2){

	var divisor = Math.pow(arg2.xAxis, 2) + Math.pow(arg2.yAxis, 2);
	return new Complex( ((arg1.xAxis*arg2.xAxis) + (arg1.yAxis*arg2.yAxis))/divisor, ((arg1.yAxis*arg2.xAxis) - (arg1.xAxis*arg2.yAxis))/divisor ).toString();
};

/*Method to find the conugate of a complex number*/
Complex.conjugate = function(args){
	
	return new Complex(args.xAxis, -args.yAxis);
};

/*This converts the output to string*/
Complex.prototype.toString = function() {

	return "{" + this.xAxis + "," + this.yAxis + "i}";
};

module.exports = Complex;
