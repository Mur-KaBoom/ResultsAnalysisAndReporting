@smoke
Feature: Home Page

    Verification of title and social media links

    Scenario: Page Title
        Given I open stupid McDonalds web page
        Then Page title should be "McDonald's: Burgers, Fries & More. Quality Ingredients."

    @socialMedia
    Scenario Outline: User is able to open social media sites via footer icons <num>
        Given I switch to the original tab
        When I open stupid McDonalds web page
        When I scroll to bottom
        And I wait until "socialMediaLinks" in footer is displayed
        And I click "#<num> of socialMediaLinks"
        And I wait until "confirmRedirectionPopup" is displayed
        And I click "confirmButton"
        And I switch to the next tab
        And I disable protractor sync
        Then Page url should contain "<socialNetwork>"

        Examples:
            | num | socialNetwork                                  |
            | 0   | Fail on purpose to check screenshot attachment |
            | 1   | twitter.com                                    |
            | 2   | youtube.com                                    |
            | 3   | instagram.com                                  |
            | 4   | tumblr.com                                     |
            | 5   | spotify.com                                    |
