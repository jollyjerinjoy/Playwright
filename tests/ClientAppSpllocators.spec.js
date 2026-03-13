//activity , convert locators to spl.locators
//const test = require("@playwright/test"); //import from playwright test package

const {test, expect } = require("@playwright/test");

test('Client App Login',async({page})=>{   //import test
await page.goto("https://www.saucedemo.com");

//used special locators
await page.getByPlaceholder("Username").fill('standard_user');     //await page.locator("#user-name").fill("standard_user"); //copy css selector for username field
await page.getByPlaceholder('Password').fill('secret_sauce');  //await page.locator("#password").fill("secret_sauce"); //copy css selector for username field
await page.getByRole('button',{name:'Login'}).click();    //await page.locator("#login-button").click();
//idle time for login
await page.waitForLoadState("networkidle");
//await page.getByPlaceholder('Sauce Labs Backpack').click();
await page.locator(".inventory_item_name").first().waitFor(); //wait on first product
console.log(await page.locator(".inventory_item_name").allTextContents()); 

//using nth of .inventory_item , first item to add cart -test('Client App Login'
const productName="Sauce Labs Backpack";
const count=await page.locator(".inventory_item_name").count();
console.log(count);
for(let i=0;i<count;i++)
{
    if (await page.locator(".inventory_item_name").nth(i).textContent()===productName)
    {
        await page.locator(".inventory_item").nth(i).locator("text=Add to cart").click();
        break;
    }
   // break;
}
//click cart
    await page.locator(".shopping_cart_link").click();
    await page.getByText('$29.99').waitFor();  //await page.locator(".inventory_item_name").waitFor();
    expect(await page.getByText('$29.99').isVisible()).toBeTruthy();  //expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
    await page.getByRole('button',{name:'Checkout'}).click(); //await page.locator("#checkout").click();
    await page.getByPlaceholder("First Name").fill('jk');   //await (page.locator("#first-name").fill("jk")); //id
    await page.getByPlaceholder("Last Name").fill('jk');    //await (page.locator("#last-name").fill("joy"));
    await page.getByPlaceholder("Zip/Postal Code").fill('12345');  //await (page.locator("#postal-code").fill("12345"));
    await page.getByRole('button',{name:'Continue'}).click();   //await (page.locator("#continue").click());
    await page.getByText("Item total: $29.99").isVisible();
    await page.getByRole('button',{name:"Finish"}).click(); //await page.locator("#finish").click();
    expect(await page.getByText("Thank you for your order!").isVisible()).toBeTruthy(); //expect(await page.locator(".complete-header")).toHaveText("Thank you for your order!");
    await page.get
    await page.getByRole('button',{name:"Back Home"}).click();
})

/*
await (page.locator(".summary_info").waitFor());
const itemTotal=await page.locator(".summary_subtotal_label").textContent();
console.log(itemTotal);
expect(itemTotal).toContain("Item total: $29.99");
//await page.locator("#finish").click();
await page.getByRole('button',{name:'Finish'}).click(); 
expect(await page.locator(".complete-header")).toHaveText("Thank you for your order!");
await page.pause(); //to pause the test execution and see the browser  */