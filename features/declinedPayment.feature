#features/declinedPayment.feature

Feature: Declined Payment

  Scenario:
    Given I am logged in user
    And I select flight
    And I select fare
    When I proceed to Potential trip page
    And I cancel seat pop up
    And I add bags to my booking
    And I pay with declined card
    Then I see payment declined message
    And after second declined payment I am redirected to home page
