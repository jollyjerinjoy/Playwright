const { Given, When, Then } = require("@cucumber/cucumber");
const PoManager = require("../../page-objects/PoManager");

        Given('Enter the username {string} and password {string} and cick on login button', async function (string, string2) {
        const pomanager=new PoManager(page);  //calling obj from PoManager
        //const login=new Login(page);
        const login=pomanager.getLogin();   //PoManager returns
        await login.goto();
        await login.validLogin(data.username, data.password);  //using json data for login

         });
         When('the dashboard is visible and  the product {string} is added to cart', async function (string) {
        const dash=pomanager.getDashBoard();   //PoManager returns
        const productname='Sauce Labs Backpack';
        await dash.selectProduct(productname);
        await dash.moveToCarts();
         });
          Then('the cart is visible and click on checkout button', async function () {
        //const cartobj=new Cart(page);
        const cartobj=pomanager.getCart(); //PoManager returns
        await cartobj.getChecked();
        //expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
        await cartobj.checkOut();
         });
          When('the shipping details are entered and click on continue button', async function () {
            //const shippingdetailsobj=new ShippingDetails(page);
            const shippingdetailsobj=pomanager.getShippingDetails(); //PoManager returns
            const firstname='jol';
            const lastname='jk';
            const postalcode='2123';
            await shippingdetailsobj.ShipmentDetails();
            await shippingdetailsobj.ClickContinue();
         });
          Then('the order summary of the order is visible', async function () {
          const summaryobj=pomanager.getSummary(); //PoManager returns
            await summaryobj.FindTotal();
            // expect(itemTotal).toContain("Item total: $29.99");
         });
         When('click on finish button', async function () {
            await summaryobj.Finish();

         });
         Then('the order confirmation message is visible-Thank you for your order! is displayed', async function () {
            await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
         });

 