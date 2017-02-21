#!/usr/bin/env node
(function(){
	
	'use strict';

	function Complex(real, imaginary){

		/*Checks if real and imaginary parts exist*/
		this.xAxis = (real == null)? 0 : parseFloat(real);
		this.yAxis = (imaginary == null)? 0 : parseFloat(imaginary);
	}

	Complex = {

		addition:function(){

			for(var count = 0; count < arguments.length; count++){

				return new Complex((arguments[count].xAxis+arguments[count+1].xAxis), (arguments[count].yAxis+arguments[count+1].yAxis));
			}
		},
		subtraction:function(complexArg1, complexArg2){

			return new Complex((complexArg1.xAxis-complexArg2.xAxis), (complexArg1.yAxis-complexArg2.yAxis));
		},
		multiplication:function(){},
		division:function(){},
		conjugate:function(){

			return new Complex(this.xAxis, -this.yAxis);
		}

		
	};

	module.exports = Complex;
})();