//read data in jsfile from excelfile
//install excel
const exceljs=require('exceljs');  //import insatlled excel js
async function writeexcelfile(filepath,searchvalue,changevalue,change) {
    
    const workbook=new exceljs.Workbook();  //call workbook
    await workbook.xlsx.readFile(filepath); //filename
    const worksheet= workbook.getWorksheet("Sheet1");  //sheet reterive

    const output=await readExcelfile(worksheet,searchvalue); //gets row and col   //before function, deafalut methos we need to write await
    const cell=worksheet.getCell(output.row, output.col+change);
   // const cell=worksheet.getCell((await output).row,(await output).col)
    console.log(cell.value);
    cell.value=changevalue; //replcae
    await workbook.xlsx.writeFile(filepath);



}
async function readExcelfile(worksheet,searchvalue) { //function
   let output={row:-1, col:-1}  //decalring output

    worksheet.eachRow((row,rownumber)=>{   //row 
        row.eachCell((cell,colnumber)=>{   //cell
           // console.log(cell.value)    //print cell.value
           if (cell.value === searchvalue)
           {
            output.row=rownumber;
            output.col=colnumber;

           }

        })
    })
    return output;

}


writeexcelfile("C:/Users/jkann/Downloads/Obsqura Testing.xlsx","Bradley Greer","New York",2);  // CALL THE FUNCTION
