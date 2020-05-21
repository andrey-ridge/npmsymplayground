const MyApp = require("./MyApp");

it("should work", () => {
	const app = new MyApp();
	expect(app.doSomethingWithLodash()).toEqual(6);
});
