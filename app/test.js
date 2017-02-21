function Complex(real, imaginary){

		/*Checks if real and imaginary parts exist*/
		this.xAxis: (typeof real === 'undefined' || real == null)? 0 : parseFloat(real);
		this.yAxis = (typeof imaginary === 'undefined' || imaginary == null)? 0 : parseFloat(imaginary);
}

/*Methods declared on object's prototype*/
Complex.prototype = {

		addition:function(){

			for(var count = 0; count < arguments.length; count++){

				return new Complex((arguments[count].xAxis+arguments[count+1].xAxis), (arguments[count].yAxis+arguments[count+1].yAxis));
			}
		},
		subtraction:function(arg1, arg2){

			return new Complex((arg1.xAxis-arg2.xAxis), (arg1.yAxis-arg2.yAxis));
		},
		multiplication:function(arg1, arg2){

			return new new Complex(((arg1.xAxis*arg2.xAxis)-(arg1.yAxis*arg2.yAxis)), ((arg1.xAxis*arg2.yAxis)-(arg1.yAxis*arg2.xAxis)));
		},
		division:function(){},
		conjugate:function(){

			return new Complex(this.xAxis, -this.yAxis);
		}
};

var arg1 = new Complex(3, 2),
	arg2 = new Complex(5, 4),
	arg3 = new Complex(2, 6);

console.log(Complex.prototype.addition(arg1, arg2, arg3));
/*console.log(Complex.prototype.multiplication(arg1, arg2));*/
console.log(Complex.prototype.subtraction(arg1, arg2));
console.log(Complex.prototype.multiplication(arg1, arg3));