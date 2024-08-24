Feature: E2E Recommernce validation

  Apllication regression 
  Scenario: Recommernce products delivery 
  Given I open Recommernce page
  When I add item to cart
  When validate the total prices 
  Then select the country submit and verify thankyou

  Scenario: Filling the form to shop
  Given I open Recommernce page
  When I fill the form details
        |Cname |gender  |
        |praveen |Male |
  Then validate the form behaviour
  When select the shop page
