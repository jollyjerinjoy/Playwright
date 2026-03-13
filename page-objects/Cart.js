class Cart{
    constructor(page)
    {
        this.page=page;
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
module.exports=Cart