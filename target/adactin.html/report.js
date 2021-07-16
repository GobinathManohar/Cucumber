$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature1.feature");
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
      "name": "@gobi"
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
    },
    {
      "cells": [
        "gobinathm",
        "@Gobi61995",
        "London",
        "Hotel Cornice",
        "Standard",
        "4",
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
        "Hotel Cornice",
        "Double",
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
        "New York",
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
        "Hotel Cornice",
        "Double",
        "2",
        "13/05/2021",
        "15/05/2021",
        "1 - One",
        "0 - None",
        "Hans",
        "Zimmer",
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
        "New York",
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
        "London",
        "Hotel Hervey",
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
        "Hotel Cornice",
        "Double",
        "2",
        "13/05/2021",
        "15/05/2021",
        "1 - One",
        "0 - None",
        "Christopher",
        "Nolan",
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
        "New York",
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
        "London",
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
        "Hotel Creek",
        "Double",
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
        "London",
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
    }
  ]
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [SWZG6Y2L8K]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [THKN0J0PEK]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"London\" and Hotel \"Hotel Cornice\" and Room Type \"Standard\" and Number of Rooms\"4\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [V36DJCU7BD]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"Paris\" and Hotel \"Hotel Cornice\" and Room Type \"Double\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [U1GJTKU6ZB]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"New York\" and Hotel \"Hotel Cornice\" and Room Type \"Super Deluxe\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [2U4783FRX0]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"Paris\" and Hotel \"Hotel Cornice\" and Room Type \"Double\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "name": "User enters FirstName\"Hans\" and LaseName\"Zimmer\" and Address\"HongKong\" and CreditCardNum\"1234567898765432\" and CreditCardType\"VISA\" and ExpMnth\"January\" and ExpYear\"2022\" and Cvv\"234\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [19888E6YUX]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"New York\" and Hotel \"Hotel Cornice\" and Room Type \"Super Deluxe\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [J95VNST2R6]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"London\" and Hotel \"Hotel Hervey\" and Room Type \"Super Deluxe\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [Z37D0PCVT8]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"Paris\" and Hotel \"Hotel Cornice\" and Room Type \"Double\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "name": "User enters FirstName\"Christopher\" and LaseName\"Nolan\" and Address\"HongKong\" and CreditCardNum\"1234567898765432\" and CreditCardType\"VISA\" and ExpMnth\"January\" and ExpYear\"2022\" and Cvv\"234\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [RAI1NQT54T]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"New York\" and Hotel \"Hotel Cornice\" and Room Type \"Super Deluxe\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [7G8703GH23]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"London\" and Hotel \"Hotel Cornice\" and Room Type \"Super Deluxe\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [19168K9N28]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"Paris\" and Hotel \"Hotel Creek\" and Room Type \"Double\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [BDKTWRZQU9]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gobi"
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
  "name": "User enters Location \"London\" and Hotel \"Hotel Cornice\" and Room Type \"Super Deluxe\" and Number of Rooms\"2\" and CheckIn \"13/05/2021\" and CheckOut\"15/05/2021\" and Adult\"1 - One\" and Child \"0 - None\"",
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [L0B0G77OIY]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature1.feature:14)\r\n",
  "status": "failed"
});
formatter.uri("src/main/resources/feature2.feature");
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [VO76HSCNE9]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature2.feature:14)\r\n",
  "status": "failed"
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [02IJUBSE1V]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature2.feature:14)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@adactin"
    },
    {
      "name": "@data\u003dTC_2"
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
    }
  ]
});
formatter.scenario({
  "name": "Validating the booking module in adactin Hotels page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@adactin"
    },
    {
      "name": "@data\u003dTC_2"
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
  "error_message": "java.lang.AssertionError: expected [012345] but found [8689YJV55C]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat org.stepdef.StepDefinition.user_need_to_validate_the_booking_number(StepDefinition.java:79)\r\n\tat ✽.User need to validate the booking number(src/main/resources/feature2.feature:32)\r\n",
  "status": "failed"
});
});