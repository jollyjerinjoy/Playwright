const {test, expect} = require("@playwright/test");
const Login = require("../page-objects/login");
const DashBoard = require("../page-objects/Dashboard");
const Cart = require("../page-objects/Cart");
const ShippingDetails = require("../page-objects/ShippingDetails");
const Summary = require("../page-objects/Summary");
const PoManager = require("../page-objects/PoManager");
const { customtest } = require("../Util/test-base");
const TestData=JSON.parse(JSON.stringify(require("../Util/placeOrderTestData.json"))); //importing json data and parsing it to js object
//forlloop to run test for each data in json file
for(const data of TestData) //set of data in TestData from json file
    {
test.only(`@web Client Page Object Model-shoppingcart Application-${data.productname}`,async({page})=>{ //use backticks for template literal and ${} for variable in test name
 //const username='standard_user'; //json data
 //const password='secret_sauce'; //json data
 const pomanager=new PoManager(page);  //calling obj from PoManager
 //const login=new Login(page);
 const login=pomanager.getLogin();   //PoManager returns
 await login.goto();
 await login.validLogin(data.username, data.password);  //using json data for login

 //const dash=new DashBoard(page);
 const dash=pomanager.getDashBoard();   //PoManager returns
 //const productname='Sauce Labs Backpack';
 console.log(data.productname);
 await dash.selectProduct(data.productname);
 await dash.moveToCarts();

//const cartobj=new Cart(page);
const cartobj=pomanager.getCart(); //PoManager returns
await cartobj.getChecked();
//expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
await cartobj.checkOut();

//const shippingdetailsobj=new ShippingDetails(page);
const shippingdetailsobj=pomanager.getShippingDetails(); //PoManager returns
const firstname='jol';
const lastname='jk';
const postalcode='2123';
//await shippingdetailsobj.ShipmentDetails("jol", "jk", "2123"); //using parameters for data driven testing
await shippingdetailsobj.ShipmentDetails(firstname, lastname, postalcode); //using parameters for data driven testing
await shippingdetailsobj.ClickContinue();

//const summaryobj=new Summary(page); //commenting for PoManager
const summaryobj=pomanager.getSummary(); //PoManager returns
await summaryobj.FindTotal();
// expect(itemTotal).toContain("Item total: $29.99");
await summaryobj.Finish();
await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
//await page.pause(); //to pause the test execution and see the browser

})
}
customtest('playwright -Client App Login with Customised Test Data',async({page,testDataForOrder})=>{ //reading custom test data from test-base.js file, use backticks for template literal and ${} for variable in test name
       //import test
       const pomanager=new PoManager(page);  //calling obj from PoManager
 //const login=new Login(page);
 const login=pomanager.getLogin();   //PoManager returns
 await login.goto();
 await login.validLogin(testDataForOrder.username, testDataForOrder.password);  //using custom test data for login

 //const dash=new DashBoard(page);
 const dash=pomanager.getDashBoard();   //PoManager returns
 //const productname='Sauce Labs Backpack';
 console.log(testDataForOrder.productname);
 await dash.selectProduct(testDataForOrder.productname);
 await dash.moveToCarts();

//const cartobj=new Cart(page);
const cartobj=pomanager.getCart(); //PoManager returns
await cartobj.getChecked();
//expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
await cartobj.checkOut();
})