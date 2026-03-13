const Cart = require("./Cart");
const DashBoard = require("./Dashboard");
const Login = require("./login");
const ShippingDetails = require("./ShippingDetails");
const Summary = require("./Summary");



class PoManager{
    constructor(page){
        this.page=page;
        this.login=new Login(page);
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
    getCart()
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
module.exports=PoManager