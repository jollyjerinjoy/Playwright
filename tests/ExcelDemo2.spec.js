// Download Excel file  //goto https://selenium.qabible.in/table-data-download.php
//click excel .dt-button.buttons-excel.buttons-html5 
// Save to folder
// Read Excel data
// Edit Excel cell  A[3][3] to 'JK' 
// Save edited file
// Upload file to https://tiiny.host/

const {test, expect} = require("@playwright/test");
const filePath="C:\\Users\\jkann\\Downloads\\";
const exceljs=require('exceljs');  //import insatlled excel js

// Verify upload
test.describe('Excel file download and read',()=>{
test('Excel file download and read and edit and upload',async({page})=>
{    //goto https://selenium.qabible.in/table-data-download.php       
    await page.goto("https://selenium.qabible.in/table-data-download.php");
    //click table-data-download.php link
    await page.locator("a[href='table-data-download.php']").click();
    // Wait for download and click Excel button
    const [download] = await Promise.all([
       page.waitForEvent("download"),
       await page.locator("button[class='dt-button buttons-excel buttons-html5'] span").click(),
    ]);
    await download.saveAs(filePath + download.suggestedFilename()); // Save to folder with suggested filename
    console.log("Excel file downloaded and saved successfully.");
    
    //read data from excel file and enable edit property of excel
    const workbook=new exceljs.Workbook();
    await workbook.xlsx.readFile(filePath + download.suggestedFilename()); //filename
    const worksheet= workbook.getWorksheet("Sheet1");
    const cell=worksheet.getCell("C3");
    console.log("Original value in cell C3:", cell.value);
    cell.value="JK";
    const editedfilePath=filePath + "Edited_" + download.suggestedFilename();
    await workbook.xlsx.writeFile(editedfilePath); // Save edited file
    console.log("Excel file edited and saved successfully.");

   //goto https://tiiny.host/ 
    await page.goto("https://tiiny.host/");
    //inpsect element for button 'Upload file' and get the css selector
    await page.setInputFiles('input[type="file"]',editedfilePath); // Upload the edited excel file
    console.log("Excel file uploaded successfully.");
    await page.pause(); //to pause the test execution and see the browser //

    //verify the file is uploaded successfully in https://tiiny.host/ with assertion
    await page.locator("div[class='selected-file-container p-4 ']").waitFor();
    const uploadedFileName = await page.locator("div[class='selected-file-container p-4 ']").textContent();
    console.log("Uploaded file name displayed on the website:", uploadedFileName);
    expect(uploadedFileName).toContain("Edited_" + download.suggestedFilename()); // Assertion to verify upload

}
)
})

