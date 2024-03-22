Feature: Login


Scenario: Searching the products in amazon
    Given User launch the browser
    When User opens URL "https://www.amazon.in/" 
    Then User should be no amazon website
    And close the site