import { Locator, Page } from "@playwright/test";
import { Login } from "./Login";
import { DashBoard } from "./DashBoard";
//import { Cart } from "./Cart";
import { ShippingDetails } from "./ShippingDetails";
import { Summary } from "./Summary";
import { Cart } from "./Cart";

//const Cart = require("./Cart");
//const DashBoard = require("./Dashboard");
//const Login = require("./login");
//const ShippingDetails = require("./ShippingDetails");
//const Summary = require("./Summary");



export class PoManager{
        page:Page; //declare variable  Page dataType//import Page from playwright
        login:Login; //type of login is Login class<defined>, import Login class
        dash:DashBoard; 
        cart:Cart;
        shipping:ShippingDetails;
        summary:Summary;


    constructor(page:Page){
        this.page=page; //assigning value to variable page
        this.login=new Login(page); //creating object of Login class and passing page as argument to constructor of Login class
        this.dash=new DashBoard(page);
        this.cart=new Cart(page);
        this.shipping=new ShippingDetails(page);
        this.summary=new Summary(page);
        
    }
    getLogin() //async not used
    {
        return this.login;   //only return stmt in function, hence async not added
    
    }

    getDashBoard()
    {
        return this.dash;
    }
    getCart()//
    {
        return this.cart;
    }
    getShippingDetails()
    {
        return this.shipping;

    }
    getSummary()
    {
        return this.summary;
    }
}
//module.exports=PoManager