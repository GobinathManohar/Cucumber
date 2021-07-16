$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature2.feature");
formatter.feature({
  "name": "Validating Booking Function of adactin Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@adactin1"
    },
    {
      "name": "@data\u003dTC_1"
    }
  ]
});
formatter.step({
  "name": "User is on adactin login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User entering the Username \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Location \"\u003cLocation\u003e\" and Hotel \"\u003cHotel\u003e\" and Room Type \"\u003cRoomType\u003e\" and Number of Rooms\"\u003cNoOfRooms\u003e\" and CheckIn \"\u003cCheckInDate\u003e\" and CheckOut\"\u003cCheckOutDate\u003e\" and Adult\"\u003cAdult\u003e\" and Child \"\u003cChild\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Radio button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters FirstName\"\u003cFirstName\u003e\" and LaseName\"\u003cLastName\u003e\" and Address\"\u003cAddress\u003e\" and CreditCardNum\"\u003cCreditCardNum\u003e\" and CreditCardType\"\u003cCreditCardType\u003e\" and ExpMnth\"\u003cExpMnth\u003e\" and ExpYear\"\u003cExpYear\u003e\" and Cvv\"\u003cCvv\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on BookNow button",
  "keyword": "And "
});
formatter.step({
  "name": "User need to validate the booking number",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Location",
        "Hotel",
        "RoomType",
        "NoOfRooms",
        "CheckInDate",
        "CheckOutDate",
        "Adult",
        "Child",
        "FirstName",
        "LastName",
        "Address",
        "CreditCardNum",
        "CreditCardType",
        "ExpMnth",
        "ExpYear",
        "Cvv"
      ]
    },
    {
      "cells": [
        "gobinathm",
        "@Gobi61995",
        "Paris",
        "Hotel Cornice",
        "Super Deluxe",
        "2",
        "13/05/2021",
        "15/05/2021",
        "1 - One",
        "0 - None",
        "Jack",
        "Daniels",
        "HongKong",
        "1234567898765432",
        "VISA",
        "January",
        "2022",
        "234"
      ]
    },
    {
      "cells": [
        "gobinathm",
        "@Gobi61995",
        "Paris",
        "Hotel Sunshine",
        "Super Deluxe",
        "3",
        "13/05/2021",
        "15/05/2021",
        "1 - One",
        "0 - None",
        "Jack",
        "Daniels",
        "HongKong",
        "1234567898765432",
        "VISA",
        "January",
        "2022",
        "234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@adactin1"
    },
    {
      "name": "@data\u003dTC_1"
    }
  ]
});
formatter.step({
  "name": "User is on adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_adactin_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entering the Username \"gobinathm\" and \"@Gobi61995\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_entering_the_Username_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Location \"Paris\" and Hotel \"Hotel Cornice\" and Room Type \"Super Deluxe\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_Location_and_Hotel_and_Room_Type_and_Number_of_Rooms_and_CheckIn_and_CheckOut_and_Adult_and_Child(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters FirstName\"Jack\" and LaseName\"Daniels\" and Address\"HongKong\" and CreditCardNum\"1234567898765432\" and CreditCardType\"VISA\" and ExpMnth\"January\" and ExpYear\"2022\" and Cvv\"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_FirstName_and_LaseName_and_Address_and_CreditCardNum_and_CreditCardType_and_ExpMnth_and_ExpYear_and_Cvv(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on BookNow button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_BookNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to validate the booking number",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_need_to_validate_the_booking_number()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@adactin1"
    },
    {
      "name": "@data\u003dTC_1"
    }
  ]
});
formatter.step({
  "name": "User is on adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_adactin_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entering the Username \"gobinathm\" and \"@Gobi61995\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_entering_the_Username_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Location \"Paris\" and Hotel \"Hotel Sunshine\" and Room Type \"Super Deluxe\" and Number of Rooms\"3\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_Location_and_Hotel_and_Room_Type_and_Number_of_Rooms_and_CheckIn_and_CheckOut_and_Adult_and_Child(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters FirstName\"Jack\" and LaseName\"Daniels\" and Address\"HongKong\" and CreditCardNum\"1234567898765432\" and CreditCardType\"VISA\" and ExpMnth\"January\" and ExpYear\"2022\" and Cvv\"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_FirstName_and_LaseName_and_Address_and_CreditCardNum_and_CreditCardType_and_ExpMnth_and_ExpYear_and_Cvv(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on BookNow button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_BookNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to validate the booking number",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_need_to_validate_the_booking_number()"
});
formatter.result({
  "status": "passed"
});
});