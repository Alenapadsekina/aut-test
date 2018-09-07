Feature: User can access account by inserting correct credentials

  Scenario: Successful login with valid credentials
    Given User is on login page
    When types a '<Valid_username>' in the login field
    And types a 'valid_password' in the password field
    And clicks Login button
    Then the homepage is opened

  Scenario: Login fails with invalid credentials
    Given User is on login page
    When types a '<invalid_username>' in the login field
    And types a 'valid_password' in the password field
    And clicks Login button
    Then user stays on the login page