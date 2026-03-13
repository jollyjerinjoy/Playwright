const base=require('@playwright/test'); //declare base extend test from playwright test package
exports.customtest=base.test.extend({ //customtest, custom fixtures, extend test from base
    //custom fixtures
    //login
    //dashboard
    testDataForOrder:{ //variable name for test data from json file , one of paramater of test
            username:"standard_user",
            password:"secret_sauce",
            productname:"Sauce Labs Backpack"

    }
})