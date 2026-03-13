import { Locator, Page } from "@playwright/test";

export class Login{//captital letter for classnamme
    page:Page; //declare variable  Page dataType//import Page from playwright
    username:Locator; //declare variable  any dataType
    password:Locator; //declare variable  any dataType
    login:Locator; //declare variable  any dataType

    constructor(page:Page){
        this.page=page;
        this.username= page.locator("#user-name"); //declare variable
        this.password= page.locator("#password");
        this.login=page.locator("#login-button");

    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com");
    }
    async validLogin(userName:string,passWord:string){
      //  await this.username.fill("standard_user"); //copy css selector for username field
       // await this.password.fill("secret_sauce");
       await this.username.fill(userName); //copy css selector for username field
       await this.password.fill(passWord);
        await this.login.click();
    }

}
//module.exports=Login