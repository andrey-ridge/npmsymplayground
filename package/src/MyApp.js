const reduce = require("lodash/reduce");

class MyApp {
	doSomethingWithLodash() {
		return reduce([1,2,3], (acc, x) => {
			return acc + x;
		});
	}
}

module.exports = MyApp;