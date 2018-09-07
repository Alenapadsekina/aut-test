const Page = require('./page');
class BasePage extends Page{
    constructor() {
        super();
        this.url = urlContains('https://trade.loginandtrade.com/webtrader/beta/workspaces')
/* ;       this.data = {
            logo: element(by.id('logo')),
            steps: element(by.css('.steps-container')),
            'go button': element(by.id('goFoodsBtn'))
        }
*/    }
    
}

module.exports = BasePage;