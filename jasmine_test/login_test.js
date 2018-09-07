describe ("Login page", () => {

	beforeEach(function() {
		browser.get("https://trade.loginandtrade.com/webtrader/beta/login");
	});


	//Test 1
	var successfulLogin = require("../support/login_page.js");
	it("login is successful", async () => {
		LoginPage.login("DM942143", "password");
		myNewTask.expectedTask('check something');

	});

	//Test 2
	var failedLogin = require("../support/login_page.js");
	it("login fails", async () => {
		LoginPage.login("DM943", "password");
		checkHeader.getHeader('faq', 'FAQ');

	});

});
