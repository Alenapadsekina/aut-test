class Page {
    constructor() {}
    getUrl() {
        return browser.getCurrentUrl();
    }

    goToPage(){
        return browser.get(this.url);
    }

}
module.exports = Page;