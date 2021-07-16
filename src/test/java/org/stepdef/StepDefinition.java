package org.stepdef;

import org.genmethods.GenericMethods;
import org.locators.adactin.AdactinLocators;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	AdactinLocators adactLoc=new AdactinLocators();
	
	@Given("User is on adactin login page")
	public void user_is_on_adactin_login_page() {
//		getDriver();
		GenericMethods.getUrl(GenericMethods.getProperty("url"));    
	}

	@When("User entering the Username {string} and {string}")
	public void user_entering_the_Username_and(String username, String password) {
		GenericMethods.enterText(adactLoc.getTxtUsername(), username);
		GenericMethods.enterText(adactLoc.getTxtPassword(), password);
	    
	}
	
	@When("User clicks on Login button")
	public void user_clicks_on_Login_button() {
		GenericMethods.click(adactLoc.getBtnLogin());
	}

	@When("User enters Location {string} and Hotel {string} and Room Type {string} and Number of Rooms{string} and CheckIn {string} and CheckOut{string} and Adult{string} and Child {string}")
	public void user_enters_Location_and_Hotel_and_Room_Type_and_Number_of_Rooms_and_CheckIn_and_CheckOut_and_Adult_and_Child(String location, String hotel, String roomtype, String noofrooms, String checkin, String checkout, String adult, String child) {
		
		GenericMethods.dropDownByVal(adactLoc.getDrpLocation(), location);
		GenericMethods.dropDownByVal(adactLoc.getDrpHotel(), hotel);
		GenericMethods.dropDownByVal(adactLoc.getDrpRoomType(), roomtype);
		GenericMethods.dropDownByIndex(adactLoc.getDrpNoOfRooms(), Integer.parseInt(noofrooms));
		GenericMethods.enterText(adactLoc.getTxtChkInDate(), checkin);
		GenericMethods.enterText(adactLoc.getTxtChkOutDate(),checkout);
		GenericMethods.dropDownByVisibleTxt(adactLoc.getDrpAdultPerRoom(),adult);
		GenericMethods.dropDownByVisibleTxt(adactLoc.getDrpChildPerRoom(),child);
		
	    
	}

	@When("User clicks on Submit button")
	public void user_clicks_on_Submit_button() {
		GenericMethods.click(adactLoc.getBtnSubmit());
	}

	@When("User clicks on Radio button")
	public void user_clicks_on_Radio_button() {
		GenericMethods.click(adactLoc.getBtnRadioBtn());
		GenericMethods.click(adactLoc.getBtnContinue());
	}

	@When("User enters FirstName{string} and LaseName{string} and Address{string} and CreditCardNum{string} and CreditCardType{string} and ExpMnth{string} and ExpYear{string} and Cvv{string}")
	public void user_enters_FirstName_and_LaseName_and_Address_and_CreditCardNum_and_CreditCardType_and_ExpMnth_and_ExpYear_and_Cvv(String firstname, String lastname, String address, String creditcardnum, String creditcardtype, String expmnth, String expyear, String cvv) {
		GenericMethods.enterText(adactLoc.getTxtFirstName(), firstname);
		GenericMethods.enterText(adactLoc.getTxtLastName(), lastname);
		GenericMethods.enterText(adactLoc.getTxtAddress(), address);
		GenericMethods.enterText(adactLoc.getTxtCreditCardNum(), creditcardnum);
		GenericMethods.dropDownByVal(adactLoc.getDrpCreditCardType(), creditcardtype);
		GenericMethods.dropDownByVisibleTxt(adactLoc.getDrpExpMnth(),expmnth);
		GenericMethods.dropDownByVal(adactLoc.getDrpExpYear(), expyear);
		GenericMethods.enterText(adactLoc.getTxtCvv(), cvv);   
	}

	@When("User clicks on BookNow button")
	public void user_clicks_on_BookNow_button() {
		GenericMethods.click(adactLoc.getBtnBookNow());
		//click(adactLoc.getBtnSubmit());   
	}

	@Then("User need to validate the booking number")
	public void user_need_to_validate_the_booking_number() {
		System.out.println("ORDER NUMBER : "+ GenericMethods.getAttribute(adactLoc.getordernumber(), "value"));   
		Assert.assertEquals(GenericMethods.getAttribute(adactLoc.getordernumber(), "value"), "012345");
	}



	
	
	
	
	
	
	
	

	

}
