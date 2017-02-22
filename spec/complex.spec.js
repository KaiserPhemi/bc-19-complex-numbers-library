(function(){
	'use strict';

	var Complex = require("../app/complex");

	describe("Solve complex numbers", function(){

		describe("Cases for addittion of complex numbers", function(){

			it("should return `{8, 6i}` for (3 + 2i) + (5 + 4i)",function(){
				var arg1 = new Complex(3, 2),
					arg2 = new Complex(5, 4);
				expect(Complex.add(arg1, arg2)).toBe('{8, 6i}');
			});

			it("should return `{5, 8i}` for (3 + 2i)+(2 + 6i)", function(){
				var arg1 = new Complex(3, 2),
					arg2 = new Complex(2, 6);
				expect(Complex.add(arg1, arg2)).toBe('{5, 8i}');
			});

			it("should return `{5, -2i}` for (3 + 2i)+(2 - 4i)", function(){
				var arg1 = new Complex(3, 2),
					arg2 = new Complex(2, -4);
				expect(Complex.add(arg1, arg2)).toBe('{5, -2i}');
			});
		});

		describe("Case for multiplication of complex numbers", function(){

			it("should return `{26, 12i}` for (5 + 4i)*(2 - 4i)", function(){
				var arg1 = new Complex(5, 4),
					arg2 = new Complex(2, -4);
				expect(Complex.multiply(arg1, arg2)).toBe('{26, -12i}');
			});
		});

		describe("Case for zero real or zero imaginary", function(){

			it("should return `{1}` for (1 + 0i)", function(){
				var args = new Complex(1, 0).toString();
				expect(args).toBe('{1}');
			});

			it("should return `{i}` for (0 + i)", function(){
				var args = new Complex(0, 1).toString();
				expect(args).toBe('{i}');
			});
		});

		describe("Case for division of complex numbers", function(){

			it("should return `{-0.3, 1.4i}` for (5 + 4i)/(2 - 4i)",function(){
				var arg1 =	new Complex(5, 4),
					arg2 =	new Complex(2, -4);
				expect(Complex.divide(arg1, arg2)).toBe('{-0.3, 1.4i}');
			});
		});

		describe("Case for conjugate of complex numbers", function(){

			it("should return `{3, -2i}` for conjugate of `(3 + 2i)`", function(){
				var args = new Complex(3, 2);
				expect(Complex.conjugate(args)).toBe('{3, -2i}');
			});
			
		});
	});
})();