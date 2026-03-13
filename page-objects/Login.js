class Login{//captital letter for classnamme
    constructor(page){
        this.page=page;
        this.username= page.locator("#user-name"); //declare variable
        this.password= page.locator("#password");
        this.login=page.locator("#login-button");

    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com");
    }
    async validLogin(userName,passWord){
      //  await this.username.fill("standard_user"); //copy css selector for username field
       // await this.password.fill("secret_sauce");
       await this.username.fill(userName); //copy css selector for username field
       await this.password.fill(passWord);
        await this.login.click();
    }

}
module.exports=Login