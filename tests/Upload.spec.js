const {test } = require("@playwright/test");

test('Upload File test', async({page})=> {
    await page.goto("https://tiiny.host/");
   // await page.locator("#Upload file").setInputFiles("C:/Users/jkann/Downloads/Obsqura Testing.xlsx");

 //await page.locator('input[type="file"]').setInputFiles("C:/Users/jkann/Downloads/Obsqura Testing.xlsx");


    await page.setInputFiles('input[type="file"]',"C:/Users/jkann/Downloads/Obsqura Testing.xlsx"); 
    //input file locator and path of file to upload
    //await page.locator("text=Upload").click(); //click upload button
    //await page.waitForLoadState("networkidle");
    //const fileName=await page.locator("#file-name").textContent(); //get text of file name after upload
    //console.log(fileName);
    //expect(fileName).toBe("Obsqura Testing.xlsx");
    //await page.pause(); //to pause the test execution and see the browser

});