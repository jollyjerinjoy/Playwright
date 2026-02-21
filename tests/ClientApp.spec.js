//const test = require("@playwright/test"); //import from playwright test package

const {test, expect } = require("@playwright/test");

test('Client App Login',async({page})=>{   //import test
await page.goto("https://www.saucedemo.com");
await page.locator("#user-name").fill("standard_user"); //copy css selector for username field
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
//idle time for login
await page.waitForLoadState("networkidle");
await page.locator(".inventory_item_name").first().waitFor(); //wait on first product
console.log(await page.locator(".inventory_item_name").allTextContents());   //get text of first product
//using nth of .inventory_item , first item to add cart -test('Client App Login'
const productName="Sauce Labs Backpack";
const count=await page.locator(".inventory_item_name").count();
console.log(count);
for(let i=0;i<count;i++)
{
    if (await page.locator(".inventory_item_name").nth(i).textContent()===productName)
    {
        await page.locator(".inventory_item").nth(i).locator("text=Add to cart").click();
    }
    break;
}
//click cart
await page.locator(".shopping_cart_link").click();
await page.locator(".inventory_item_name").waitFor();
expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
await page.locator("#checkout").click();

await(page.locator("#first-name").fill("jk")); //id
await (page.locator("#last-name").fill("joy"));
await (page.locator("#postal-code").fill("12345"));
await (page.locator("#continue").click());
await (page.locator(".summary_info").waitFor());
const itemTotal=await page.locator(".summary_subtotal_label").textContent();
console.log(itemTotal);
expect(itemTotal).toContain("Item total: $29.99");
await page.locator("#finish").click();
expect(await page.locator(".complete-header")).toHaveText("Thank you for your order!");
await page.pause(); //to pause the test execution and see the browser
})
