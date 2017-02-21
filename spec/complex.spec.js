'use strict';

var Complex = require("../app/complex").Complex;

describe("Solve complex numbers", function(){

	describe("Cases for addittion of complex numbers", function(){

		it("should return (8, 6) for (3+2i)+(5+4i)",function(){
			var arg1 = new Complex(3, 2),
				arg2 = new Complex(5, 4);
			expect(Complex.addittion(arg1, arg2)).toBe(8, 6);
		});
	});
/*
	describe("Cases for multiplication of complex numbers",function(){

		it("should return ",function(){

		});
	});

	describe("Cases for division of complex numbers",function(){

		it("",function(){

		});
	});

	describe("Cases for subtraction of complex numbers",function(){

		it("",function(){

		});

	});
*/
});