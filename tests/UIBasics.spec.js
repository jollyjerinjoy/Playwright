const {test,expect} = require("@playwright/test"); //import from playwright test package
//old method
test('first playwright test',async function(){

})
//browser context - new method
test('browser context playwright test',async({browser})=>
{
const context = await browser.newContext();
const page= await context.newPage();
await page.goto("https://www.google.com/");
console.log(await page.title()); 
await page.goto("https://www.saucedemo.com");
await page.locator("#user-name").fill("standarduser"); //copy css selector for username field
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
//await expect(page.locator(".title")).toHaveText("Products");
console.log(await page.locator("h3[data-test='error']").textContent()); //for error message)
await expect(page.locator("h3[data-test='error']")).toContainText("Epic sadface"); //assertion for error message
//await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service"); //assertion for error message

//logion for login with valid credentials
await page.locator("#user-name").fill(""); //copy css selector for username field
await page.locator("#user-name").fill("standard_user");
//await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();

//get first product name and print it in console
const cardTitles=page.locator(".inventory_item_name"); //css class name for product names
console.log(await cardTitles.first().textContent()); //to get text of first product
console.log(await cardTitles.nth(1).textContent()); //to get text of second product
//print all product names using loop
console.log(await cardTitles.allTextContents()); //to get text of all products in array format
await page.pause(); //to pause the test execution and see the browser
})
//using page context test
//test.only for running only this test, it will ignore other tests in the file
test('Page context test',async({page})=>   //no need to create browser and context, it is already created by playwright
{
await page.goto("https://www.google.com/");
console.log(await page.title());
//assertion - keyword used exp
await expect(page).toHaveTitle("Google");

})
test('UI Controls',async({page})=>
{
 await page.goto("https://selenium.qabible.in/index.php");   
//checkbox
await page.locator("//a[normalize-space()='Input Form']").click();
await page.locator("a[href='check-box-demo.php']").click(); 
await page.locator("#gridCheck").check(); //to check the checkbox
//method 1 for asserting 
await expect(page.locator("#gridCheck")).toBeChecked(); //assertion for checkbox toBeChecked()
//radio button
await page.locator("a[href='radio-button-demo.php']").click();
await page.locator("#inlineRadio1").check(); //to check the radio button")))
//method 2 for asserting 
expect(await page.locator("#inlineRadio1").isChecked()).toBeTruthy(); //assertion for radio button)) .isChecked()).toBeTruthy()
await page.locator("#inlineRadio24").click();  //check or click
//dropdown
await page.locator("a[href='select-input.php']").click();
await page.locator("#single-input-field").selectOption("Yellow"); //to select option from dropdown
await expect(page.locator("#single-input-field")).toHaveValue("Yellow"); //assertion for dropdown selection) .toHaveValue
//form submit

await page.locator("a[href='form-submit.php']").click();
await page.locator("#validationCustom01").fill("John"); //to fill first name
await page.locator("#validationCustom02").fill("Doe"); //to fill last name
await page.locator("#validationCustomUsername").fill("johndoe"); //to fill username
await page.locator("#validationCustom03").fill("jolly"); //to fill city
await page.locator("#validationCustom04").fill("texas"); //to fill state
await page.locator("#validationCustom05").fill("75001"); //to fill zip
await page.locator("#invalidCheck").check();     //to check the checkbox
await page.locator("button[type='submit']").click();
await page.locator("//a[normalize-space()='Simple Form Demo']").click();
//simple form input
await page.locator("#single-input-field").fill("Hello World"); //to fill message in input field
await page.locator("#button-one").click(); //to click on show message button
await expect(page.locator("#message-one")).toHaveText("Your Message : Hello World"); //assertion for displayed message .toHaveText)

await page.pause(); //to pause the test execution and see the browser
});

//child window handling an dnew tab
test('child window handling',async({browser})=>{
    const context= await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://google.com");

    const [childpage]=await Promise.all([
        context.waitForEvent('page'),
        page.evaluate(()=>window.open("https://www.saucedemo.com"))
    
    ]);
    //new tab
    const newTab= await context.newPage();
    newTab.goto('https://google.com')
    console.log('child windows and nee tab opened successfully ')
    await page.pause();
})

test.only('Special locators', async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php"); //selectors hub. R.xpath
   //via locator// await page.locator("//a[normalize-space()='Input Form']").click();// selectors hub. R.xpath
   await page.getByRole("link",{name:"Input Form"} ).click();  //via link
 //   await page.locator("//a[normalize-space()='Checkbox Demo']").click();//selectors hub. R.xpath
    //write with max special locator in playweight, as we can use labels
    await page.getByRole('link',{name:'Checkbox Demo'}).click();
    
    
    await page.getByLabel("Click on this check box").check();  //using by copying text from UI

   // await page.locator("a[href='radio-button-demo.php']").click();

    await page.getByRole('link',{name:'Radio Buttons Demo'}).click();
    await page.getByLabel("45 to 60").check();
    await page.getByRole("link",{name:'Select Input'}).click();
  //  await page.locator("a[href='select-input.php']").click();


    await page.getByLabel("Select Color").selectOption("Red");

   // await page.locator("a[href='form-submit.php']").click();
    await page.getByRole('link',{name:'Form Submit',exact: true}).click();
    await page.getByPlaceholder("First name").fill("jolly");
    await page.getByPlaceholder("Last name").fill("joy");
    await page.getByPlaceholder("Username").fill("jjoy");
    await page.getByPlaceholder("City").fill("tvm");
    await page.getByPlaceholder("State").fill("Kerala");
    await page.getByPlaceholder("Zip").fill("123345");
    await page.getByLabel("Agree to terms and conditions").check();
    await page.getByRole('button',{name:"Submit form"}).click();  
  
    await page.getByRole('link',{name:'Simple Form Demo'}).click();
    await page.getByPlaceholder('Message').fill("Hi");
    await page.getByRole('button',{name:'Show Message'}).click();
    await page.getByText('Your Message : hi').isVisible();  //get label value


    

    await page.pause();
})
