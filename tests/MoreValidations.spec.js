const {test, expect } = require("@playwright/test");
const { only } = require("node:test");

test('popup validations',async({page})=>{    //ctl space import and remove default  //test.only
    await page.goto("https://www.saucedemo.com/");
    //alert hidden message
    await expect(page.locator("h3[data-test='error']")).toBeHidden();  //import expect  //check to be hidden
    await page.locator("#login-button").click();
    await expect(page.locator("h3[data-test='error']")).toBeVisible();  //check visible message

    await page.goto("https://selenium.qabible.in/");
    await page.locator("#alert-modal").click();
    //alert ok button
    await page.locator("a[href='javascript-alert.php']").click();
    await page.locator(".btn.btn-warning").click();
    page.on("dialog",async dialog=>{
        //wait for function
        await page.waitForTimeout(3000);  //3seconds delay
        await dialog.accept();  //to click ok button from dialog
    })
    //alert cancel button
    await page.locator(".btn.btn-warning").click();
    page.on("dialog",async dialog=>{
        await page.waitForTimeout(3000);  //3seconds delay
        await dialog.dismiss();  //to click cancel button from dialog
    })
     //hover link
    await page.locator("#others").hover(); //hover link
    //framee click
    await page.goto("https://demoqa.com");

    await page.locator("//h5[normalize-space()='Alerts, Frame & Windows']").click();
    await page.locator("//span[normalize-space()='Frames']").click();
   const framepage=page.frameLocator("#frame1"); //before id use #
   console.log(await framepage.locator("#sampleHeading").textContent());  //before id use #
   await expect(framepage.locator("#sampleHeading")).toHaveText("This is a sample page");
  
await page.pause();

})
test.only('screenshot Operations',async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page.locator("h3[data-test='error']")).toBeHidden();
    await page.locator("#login-button").click();
    await page.locator("h3[data-test='error']").screenshot({
        path:'error.png'
    });
    await expect(page.locator("h3[data-test='error']")).toBeVisible();  
    await page.screenshot({
        path:'error1.png'
    });
})
