//TEST 1

var validSearch = async function() {
	
	await this.enterPartialName = function(partialName) {
		element(by.class('market-search__search-input')).sendKeys(partialName);
	};

	await this.getSearchResult = function(value) {
		let result = element.all(by.class("table__td-body name")).(0);
		expect(result.getText()).toBe(value)
	};

};
module.exports = new validSearch();
/*

*/

// TEST 2 

var invalidSearch = async function() {
	
	await this.enterPartialName = function(partialName) {
		element(by.class('market-search__search-input')).sendKeys(partialName);
	};

	await this.message = function() {
		let result = element(by.class("empty-result"));
		expect(result.getText()).toBe('No matches found. Please try again or browse markets.')
	};

};
module.exports = new invalidSearch();
