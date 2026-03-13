class DashBoard{
    constructor(page){
        this.page=page;
        this.product=page.locator(".inventory_item_name");
        this.productName=page.locator(".inventory_item");
        this.moveToCart=page.locator(".shopping_cart_link")
    }
    async selectProduct(productname)  //"Sauce Labs Backpack"
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
            console.log(productname);
            console.log(await this.product.nth(i).textContent());
        if (await this.product.nth(i).textContent()===productname)
                    {
            console.log(productname);
            await this.productName.nth(i).locator("text=Add to cart").click();
            break;
        }
          //break;
        }
    }


    async moveToCarts()
    {
        await this.moveToCart.click();
    }
}
module.exports=DashBoard