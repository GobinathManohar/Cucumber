package org.locators.adactin;

import org.genmethods.GenericMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinLocators extends GenericMethods {
	
	public AdactinLocators() {
		PageFactory.initElements(driver, this);
		System.out.println("page initialized");
	}
	private String stri;
	
	@FindBy(xpath="//input[@id='username']")
	private WebElement txtName;
	
	@FindBy(xpath="//input[@id='username']")
	private  WebElement txtUsername;
	
	@FindBy(id="password")
	private WebElement txtPassword;
	
	@FindBy(id="login")
	private WebElement btnLogin;
	
	@FindBy(id="location")
	private WebElement drpLocation;
	
	@FindBy(id="hotels")
	private WebElement drpHotel;
	
	@FindBy(id="room_type")
	private WebElement drpRoomType;
	
	@FindBy(id="room_nos")
	private WebElement drpNoOfRooms;
	
	@FindBy(id="datepick_in")
	private WebElement txtChkInDate;
	
	@FindBy(id="datepick_out")
	private WebElement txtChkOutDate;
	
	@FindBy(id="adult_room")
	private WebElement drpAdultPerRoom;
	
	@FindBy (id="child_room")
	private WebElement drpChildPerRoom;
	
	@FindBy (id="Submit")
	private WebElement btnSubmit;
	
	@FindBy(id="Reset")
	private WebElement btnReset;
	
	@FindBy(id="radiobutton_0")
	private WebElement btnRadioBtn;
	
	@FindBy (id="continue")
	private WebElement btnContinue;
	
	@FindBy (id="first_name")
	private WebElement txtFirstName;
	
	@FindBy (id="last_name")
	private WebElement txtLastName;
	
	@FindBy (id="address")
	private WebElement txtAddress;
	
	@FindBy (id="cc_num")
	private WebElement txtCreditCardNum;
	
	@FindBy (id="cc_type")
	private WebElement drpCreditCardType;
	
	@FindBy (id="cc_exp_month")
	private WebElement drpExpMnth;
	
	@FindBy (id="cc_exp_year")
	private WebElement drpExpYear;
	
	@FindBy (id="cc_cvv")
	private WebElement txtCvv;
	
	@FindBy (id="book_now")
	private WebElement btnBookNow;
	
	@FindBy (id="")
	private WebElement  btnCancel;
	
	@FindBy (xpath="//input[@name='order_no']")
	private WebElement  ordernumber;
	
	
	

	public  WebElement getTxtUsername() {
	//	System.out.println(txtUsername);
		return txtUsername;
	}

	public WebElement getTxtPassword() {
		return txtPassword;
	}

	public WebElement getBtnLogin() {
		return btnLogin;
	}

	public WebElement getDrpLocation() {
		return drpLocation;
	}

	public WebElement getDrpHotel() {
		return drpHotel;
	}

	public WebElement getDrpRoomType() {
		return drpRoomType;
	}

	public WebElement getDrpNoOfRooms() {
		return drpNoOfRooms;
	}

	public WebElement getTxtChkInDate() {
		return txtChkInDate;
	}

	public WebElement getTxtChkOutDate() {
		return txtChkOutDate;
	}

	public WebElement getDrpAdultPerRoom() {
		return drpAdultPerRoom;
	}

	public WebElement getDrpChildPerRoom() {
		return drpChildPerRoom;
	}

	public WebElement getBtnSubmit() {
		return btnSubmit;
	}

	public WebElement getBtnReset() {
		return btnReset;
	}

	public WebElement getBtnRadioBtn() {
		return btnRadioBtn;
	}

	public WebElement getBtnContinue() {
		return btnContinue;
	}

	public WebElement getTxtFirstName() {
		return txtFirstName;
	}

	public WebElement getTxtLastName() {
		return txtLastName;
	}

	public WebElement getTxtAddress() {
		return txtAddress;
	}

	public WebElement getTxtCreditCardNum() {
		return txtCreditCardNum;
	}

	public WebElement getDrpCreditCardType() {
		return drpCreditCardType;
	}

	public WebElement getDrpExpMnth() {
		return drpExpMnth;
	}

	public WebElement getDrpExpYear() {
		return drpExpYear;
	}

	public WebElement getTxtCvv() {
		return txtCvv;
	}

	public WebElement getBtnBookNow() {
		return btnBookNow;
	}

	public WebElement getBtnCancel() {
		return btnCancel;
	}
	
	public WebElement getordernumber() {
		return ordernumber;
	}

	
	public String getStri() {
		return stri;
	}

	public void setStri(String stri) {
		this.stri = stri;
	}
	

	
}