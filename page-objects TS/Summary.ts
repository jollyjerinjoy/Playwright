import { Locator, Page } from "@playwright/test";

export class Summary{
    page:Page;//declare variable  Page dataType//import Page from playwright
    finishbutton:Locator; //declare variable  Locator dataType//import Locator from playwright
    subtotallabel:Locator; //declare variable  Locator dataType//import Locator from playwright
    summary:Locator; //declare variable  Locator dataType//import Locator from playwright
    constructor(page:Page)
    {
        this.page=page;
        this.finishbutton=page.locator("#finish");
        this.subtotallabel=page.locator(".summary_subtotal_label");
        this.summary=page.locator(".summary_info");

    }
    async FindTotal()
    {
        await (this.summary.waitFor());
        const itemTotal=await this.subtotallabel.textContent();
        console.log(itemTotal);
       // expect(itemTotal).toContain("Item total: $29.99");

    }
    async Finish()
    {
        await this.finishbutton.click();
      //  const headertext=await page.locator(".complete-header").textContent();
       // console.log(headertext);
       // expect(await page.locator(".complete-header")).toHaveText("Thank you for your order!");
                //await page.pause(); //to pause the test execution and see the browser
    }

}
//module.exports=Summary