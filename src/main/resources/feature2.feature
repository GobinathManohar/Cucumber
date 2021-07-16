Feature: Validating Booking Function of adactin Application


			@adactin1 @data=TC_1
  Scenario Outline: Validating the booking module in adactin Hotels page
    Given User is on adactin login page
    When User entering the Username "<Username>" and "<Password>"
    And User clicks on Login button
    When User enters Location "<Location>" and Hotel "<Hotel>" and Room Type "<RoomType>" and Number of Rooms"<NoOfRooms>" and CheckIn "<CheckInDate>" and CheckOut"<CheckOutDate>" and Adult"<Adult>" and Child "<Child>"
    And User clicks on Submit button
    And User clicks on Radio button
    When User enters FirstName"<FirstName>" and LaseName"<LastName>" and Address"<Address>" and CreditCardNum"<CreditCardNum>" and CreditCardType"<CreditCardType>" and ExpMnth"<ExpMnth>" and ExpYear"<ExpYear>" and Cvv"<Cvv>"
    And User clicks on BookNow button
    Then User need to validate the booking number

    Examples: 
      | Username  | Password | Location | Hotel          | RoomType     | NoOfRooms | CheckInDate | CheckOutDate | Adult   | Child    | FirstName   | LastName | Address  | CreditCardNum    | CreditCardType | ExpMnth | ExpYear | Cvv |
      | gobinathm | @Gobi61995 | Paris    | Hotel Cornice  | Super Deluxe |         2 | 13/05/2021  | 15/05/2021   | 1 - One | 0 - None | Jack        | Daniels  | HongKong | 1234567898765432 | VISA           | January |    2022 | 234 |
      | gobinathm | @Gobi61995 | Paris    | Hotel Sunshine | Super Deluxe |         3 | 13/05/2021  | 15/05/2021   | 1 - One | 0 - None | Jack        | Daniels  | HongKong | 1234567898765432 | VISA           | January |    2022 | 234 |
      
      
      @adactin @data=TC_2
  Scenario Outline: Validating the booking module in adactin Hotels page
    Given User is on adactin login page
    When User entering the Username "<Username>" and "<Password>"
    And User clicks on Login button
    When User enters Location "<Location>" and Hotel "<Hotel>" and Room Type "<RoomType>" and Number of Rooms"<NoOfRooms>" and CheckIn "<CheckInDate>" and CheckOut"<CheckOutDate>" and Adult"<Adult>" and Child "<Child>"
    And User clicks on Submit button
    And User clicks on Radio button
    When User enters FirstName"<FirstName>" and LaseName"<LastName>" and Address"<Address>" and CreditCardNum"<CreditCardNum>" and CreditCardType"<CreditCardType>" and ExpMnth"<ExpMnth>" and ExpYear"<ExpYear>" and Cvv"<Cvv>"
    And User clicks on BookNow button
    Then User need to validate the booking number

    Examples: 
      | Username  | Password | Location | Hotel          | RoomType     | NoOfRooms | CheckInDate | CheckOutDate | Adult   | Child    | FirstName   | LastName | Address  | CreditCardNum    | CreditCardType | ExpMnth | ExpYear | Cvv |
      | gobinathm | @Gobi61995 | Paris    | Hotel Cornice  | Super Deluxe |         2 | 13/05/2021  | 15/05/2021   | 1 - One | 0 - None | Jack        | Daniels  | HongKong | 1234567898765432 | VISA           | January |    2022 | 234 |
      