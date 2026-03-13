import { Locator, Page } from "@playwright/test";

export class DashBoard{
    page:Page; //declare variable  Page dataType//import Page from playwright
    product:Locator; //declare variable  Locator dataType//import Locator from playwright
    productName:Locator; //declare variable  Locator dataType//import Locator from playwright
    moveToCart:Locator; //declare variable  Locator dataType//import Locator from playwright

    constructor(page:Page){
        this.page=page;
        this.product=page.locator(".inventory_item_name");
        this.productName=page.locator(".inventory_item");
        this.moveToCart=page.locator(".shopping_cart_link")
    }
    async selectProduct(productname:string)  //"Sauce Labs Backpack"
    {
    //idle time for login
        await this.page.waitForLoadState("networkidle");
        await this.product.first().waitFor(); //wait on first product
        console.log(await this.product.allTextContents());   //get text of first product
        //using nth of .inventory_item , first item to add cart -test('Client App Login'
       // const productName="Sauce Labs Backpack";
        const count=await this.product.count();
        console.log(count);
        for(let i=0;i<count;i++)
        {
        if (await this.product.nth(i).textContent()===productname)
        {
            await this.productName.nth(i).locator("text=Add to cart").click();
            break;
        }
         // break;
        }
    }

    async moveToCarts()
    {
        await this.moveToCart.click();
    }
}
//module.exports=DashBoard