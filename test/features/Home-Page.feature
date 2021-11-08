@smoke
Feature: Home Page

    Verification of title and social media links

    Scenario: Page Title
        Given I open stupid McDonalds web page
        Then Page title should be "McDonald's: Burgers, Fries & More. Quality Ingredients."

    @socialMedia
    Scenario Outline: User is able to open social media sites via footer icons <num>
        Given I open stupid McDonalds web page
        When I scroll to bottom
        And I wait until "socialMediaLinks" in footer is displayed
        And I click "#<num> of socialMediaLinks"
        And I wait until "confirmRedirectionPopup" is displayed
        And I click "confirmButton"
        And I switch to the next tab
        And I disable protractor sync
        Then Page url should be "<pageUrl>"
        When I switch to the original tab

        Examples:
            | num | pageUrl                                                  |
            | 0   | https://www.facebook.com/McDonalds/                      |
            | 1   | https://twitter.com/mcdonalds                            |
            | 2   | https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w |
            | 3   | https://www.instagram.com/mcdonalds/                     |
            | 4   | https://mcdonalds.tumblr.com/                            |
            | 5   | https://open.spotify.com/user/mcdonalds                  |
