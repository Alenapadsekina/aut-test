
const Page = require('./page');
class LoginPage extends Page{
    constructor() {
        super();
        this.url = 'https://trade.loginandtrade.com/webtrader/beta/login';
        this.data = {
            login: element(by.id('login-username')),
            password: element(by.id('login-password')),
            login_button: element(by.id('login-submit'))
        }
    }
    async login(name,pass){
        await this.data.login.sendKeys(name);
        await this.data.password.sendKeys(pass);
        await this.data.login_button.click();
    }
}
module.exports = LoginPage;