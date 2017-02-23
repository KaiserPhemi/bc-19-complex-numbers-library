#!/usr/bin/env node
(function(){
	'use strict';

	var complexSolver = require('complexnum');

	var arg1 = new complexSolver(2, 3),
		arg2 = new complexSolver(4, 5);
	
	console.log(complexSolver.add(arg1, arg2));
	console.log(complexSolver.subtract(arg1, arg2));
	console.log(complexSolver.multiply(arg1, arg2));
	console.log(complexSolver.conjugate(arg1));
})();