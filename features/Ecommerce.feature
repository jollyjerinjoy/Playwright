
Feature: Ecommerce Validation
@Regression
Scenario: placing order for a product in a Ecommerce website
Given Enter the username "standard_user" and password "secret_sauce" and cick on login button
When the dashboard is visible and  the product "Sauce Labs Backpack" is added to cart
Then the cart is visible and click on checkout button 
When the shipping details are entered and click on continue button
Then the order summary of the order is visible
When click on finish button
Then the order confirmation message is visible-Thank you for your order! is displayed

@Validation
Scenario: validating error message for invalid login
Given Enter "<username>" and "<password>" and cick on login button
Then the error message is visible and it contains - Username and password

Examples:
    | username       | password | 
    | standard_user  | secret  | 
