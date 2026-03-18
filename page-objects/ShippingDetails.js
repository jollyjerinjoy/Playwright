class ShippingDetails{
    constructor(page)
    {
        this.page=page;
        this.firstname=page.locator("#first-name");
        this.lastname=page.locator("#last-name");
        this.postalcode=page.locator("#postal-code");
        this.continuebutton=page.locator("#continue");
    }
    async ShipmentDetails(fname, lname,pcode)
    {
       //await (this.firstname.fill("jk")); //id
        //await (this.lastname.fill("joy"));
        //await (this.postalcode.fill("12345"));
        await (this.firstname.fill(fname)); //id
        await (this.lastname.fill(lname));
        await (this.postalcode.fill(pcode));//using parameters for data driven testing
        
    }
    async ClickContinue(){
        await (this.continuebutton.click());

    }

}
module.exports=ShippingDetails