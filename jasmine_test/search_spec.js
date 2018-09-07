describe ("search for markets", () => {

	beforeEach(function() {
		browser.get("https://trade.loginandtrade.com/webtrader/beta/login");
		var successfulLogin = require("../support/login_page.js");
		LoginPage.login("DM942143", "password");
	});


	//Test 1
	var search = require("../jasmine_test/search.js");
	xit("search is successful", async () => {
		LoginPage.login("DM942143", "password");
		validSearch.enterPartialName('Germ');
		validSearch.getSearchResult('Germ')

	});

	//Test 2
	var search = require("../jasmine_test/search.js");
	it("search fails", async () => {
		LoginPage.login("DM942143", "password");
		invalidSearch.enterPartialName('hgfhgv');
		invalidSearch.message('No matches found. Please try again or browse markets.')

	});

});
