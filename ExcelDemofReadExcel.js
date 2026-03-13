//read data in jsfile from excelfile
//const exceljs=require('exceljs');  //import insatlled excel js
//read data in jsfile from excelfile
//install excel
const exceljs=require('exceljs');  //import insatlled excel js
async function readExcelfile() { //function
    const workbook=new exceljs.Workbook();  //call workbook
    await workbook.xlsx.readFile("C:/Users/jkann/Downloads/Obsqura Testing.xlsx"); //filename
    const worksheet= workbook.getWorksheet('Sheet1');  //sheet reterive
    worksheet.eachRow((row,rownumber)=>{   //row 
        row.eachCell((cell,colnumber)=>{   //cell
            console.log(cell.value)    //print cell.value
        })
    })

}
readExcelfile();  // CALL THE FUNCTION
