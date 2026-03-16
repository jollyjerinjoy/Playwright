
import{ test as baseTest} from "@playwright/test"; //import test as basetest from playwright test package

interface TestDataForOrder{
    username:string;
    password:string;
    productname:string;
}; //interface for test data from json file
export const customtest=baseTest.extend<{ testDataForOrder: TestDataForOrder }>({ 
    //customtest, custom fixtures, extend test from basetest
    //custom fixtures
    //login
    //dashboard
    testDataForOrder:{ //variable name for test data from json file , one of paramater of test
            username:"standard_user",
            password:"secret_sauce",
            productname:"Sauce Labs Backpack"

    }
})
