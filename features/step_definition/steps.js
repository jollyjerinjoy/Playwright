const { Given, When, Then } = require("@cucumber/cucumber");
const PoManager = require("../../page-objects/PoManager");
const { chromium, expect } = require("@playwright/test");

        Given('Enter the username {string} and password {string} and cick on login button', async function (username, password) {
         //const browser=await chromium.launch({headless:false}); //to launch the browser in headed mode, by default it is headless mode
       //  const context=await browser.newContext(); //to create a new browser context, it is like a new incognito window, it helps to isolate the tests and run them in parallel
       //  this.page=await context.newPage(); //to create a new page in the browser context, it is like a new tab in the browser   

         this.pomanager=new PoManager(this.page);  //calling obj from PoManager

        //const login=new Login(page);
        const login=this.pomanager.getLogin();   //PoManager returns  //world scope variable for login obj
        await login.goto();
        await login.validLogin(username, password);  //using json data for login

         });
         When('the dashboard is visible and  the product {string} is added to cart', async function (productname) {
        const dash=this.pomanager.getDashBoard();   //PoManager returns
        //const productname='Sauce Labs Backpack';
        await dash.selectProduct(productname);
        await dash.moveToCarts();
         });
          Then('the cart is visible and click on checkout button', async function () {
        //const cartobj=new Cart(page);
        const cartobj=this.pomanager.getCart(); //PoManager returns
        await cartobj.getChecked();
        //expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
        await cartobj.checkOut();
         });
          When('the shipping details are entered and click on continue button', async function () {
            //const shippingdetailsobj=new ShippingDetails(page);
            const shippingdetailsobj=this.pomanager.getShippingDetails(); //PoManager returns
            //const firstname='jol';
            //const lastname='jk';
            //const postalcode='2123';
            await shippingdetailsobj.ShipmentDetails("jol", "jk", "2123"); //using parameters for data driven testing
            await shippingdetailsobj.ClickContinue();
         });
          Then('the order summary of the order is visible', async function () {
          this.summaryobj=this.pomanager.getSummary(); //PoManager returns
            await this.summaryobj.FindTotal();
            // expect(itemTotal).toContain("Item total: $29.99");
         });
         When('click on finish button', async function () {
            await this.summaryobj.Finish();

         });
         Then('the order confirmation message is visible-Thank you for your order! is displayed', async function () {
            await expect(this.page.locator(".complete-header")).toHaveText("Thank you for your order!");  //assert, import expect
         });
//scenario2

          Given('Enter {string} and {string} and cick on login button', async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
             await this.page.goto("https://www.saucedemo.com"); //uibasic
             await this.page.locator("#user-name").fill(username);  //uibasics
             await this.page.locator("#password").fill(password);//uibasic
             await this.page.locator("#login-button").click();//uibasic
           
         });
         Then('the error message is visible and it contains - Username and password do not match',async function () {
            console.log(await this.page.locator("h3[data-test='error']").textContent()); //for error message)
            await expect(this.page.locator("h3[data-test='error']")).toContainText("Epic sadface"); //assertion for error message
         });
 