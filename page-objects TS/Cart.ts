import { Locator, Page } from "@playwright/test";

export class Cart{
    page:Page;//declare variable  Page dataType//import Page from playwright
    cartname:Locator; //declare variable  Locator dataType//import Locator from playwright
    checkout:Locator; //declare variable  Locator dataType//import Locator from playwright
    constructor(page:Page)
    {
        this.page=page;  //assigning value to variable page
        this.cartname=page.locator(".inventory_item_name");
        this.checkout=page.locator("#checkout");
    }
    async getChecked(){
        await this.cartname.waitFor();
        const bool=await this.cartname.isVisible(); //assert , import expect 
        console.log(bool);
    }
    async checkOut()
    {
        //expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
        await this.checkout.click();
    }
}
//module.exports=Cart