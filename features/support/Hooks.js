const { Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

Before(async function () {  //before each senario, you can also use BeforeAll for before all scenarios and After or AfterAll for after each scenario or after all scenarios
    console.log("Iam first.This will run before each scenario");
     const browser=await chromium.launch({headless:false}); //to launch the browser in headed mode, by default it is headless mode
         const context=await browser.newContext(); //to create a new browser context, it is like a new incognito window, it helps to isolate the tests and run them in parallel
         this.page=await context.newPage(); //to create a new page in the browser context, it is like a new tab in the browser   

    //you can also do some setup here, like launching the browser or creating a new page, and assign it to this.page for use in step definitions
    //const browser=await chromium.launch({headless:false}); //to launch the browser in headed mode, by default it is headless mode
    //const context=await browser.newContext(); //to create a new browser context, it is like a new incognito window, it helps to isolate the tests and run them in parallel
    //this.page=await context.newPage(); //to create a new page in the browser context, it is like a new tab in the browser   
});

After(async function () {  //after each senario, you can also use AfterAll for after all scenarios
    console.log("Iam last. This will run after each scenario");
   // await this.page.close(); //to close the page after each scenario, you can also close the browser if you want
    //you can also do some teardown here, like closing the browser or cleaning up any data, using this.page for any actions needed
    //await this.page.close(); //to close the page after each scenario, you can also close the browser if you want
});
//after given, then, when steps, you can use AfterStep to perform some actions after each step, like taking a screenshot for failed steps, logging some information, etc.
AfterStep(async function ({ result }) { //after each step, you can also use BeforeStep for before each step
    console.log("This will run after each step"); 
    if (result.status===Status.FAILED) { //to check if the step has failed, you can also check for other statuses like PASSED, SKIPPED, etc.
        const buffer=await this.page.screenshot(); //to take a screenshot of the page, you can also save it to a file if you want
       await this.page.screenshot({ path: `screenshot1.png` }); //to save the screenshot to a file with a unique name based on timestamp
      // await this.page.screenshot({ path: `screenshot
       this.attach(buffer.toString('base64'), 'base64:image/png'); //to attach the screenshot to the report, you can also specify the content type if needed
       console.log("Screenshot logged for failed step"); //to log a message indicating that a screenshot was taken for a failed step

    }
});