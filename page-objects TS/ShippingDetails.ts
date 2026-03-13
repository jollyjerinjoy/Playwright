import { Locator, Page } from "@playwright/test";

export class ShippingDetails{
    page:Page;//declare variable  Page dataType//import Page from playwright
    firstname:Locator; //declare variable  Locator dataType//import Locator from playwright
    lastname:Locator; //declare variable  Locator dataType//import Locator from playwright
    postalcode:Locator; //declare variable  Locator dataType//import Locator from playwright
    continuebutton:Locator; //declare variable  Locator dataType//import Locator from playwright
    constructor(page:Page)
    {
        this.page=page;
        this.firstname=page.locator("#first-name");
        this.lastname=page.locator("#last-name");
        this.postalcode=page.locator("#postal-code");
        this.continuebutton=page.locator("#continue");
    }
    async ShipmentDetails()
    {
        await (this.firstname.fill("jk")); //id
        await (this.lastname.fill("joy"));
        await (this.postalcode.fill("12345"));
        
    }
    async ClickContinue(){
        await (this.continuebutton.click());

    }

}
//module.exports=ShippingDetails