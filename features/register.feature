Feature: Register into los estudiantes
	As an user I want to register myself within los estudiantes website


Scenario Outline: Register fail
    Given I go to losestudiantes home screen
	When I open the register screen
	And I fill basic information <name>, <lastName> and <email>	
	And I set the password <password>
	And I try to registrer
	Then I expect message error
	
	Examples:
	|      name       |  lastName           | email            |  mba	 |program       |password | 
	|      demo     |    demo1            | demo1@example.com |  false	 |66            |12345678|
	|      demo     |    demo2            | demo2@example.com |  true	 |23            |12345678|



Scenario Outline: Register ok
    Given I go to losestudiantes home screen
	When I open the register screen
	And I fill basic information <name>, <lastName> and <email>
	And I select studies, is MBA <mba> and <program>
	And I set the password <password>
	And I try to registrer
	Then I expect to log in
	
	Examples:
	|      name       |  lastName           | email            |  mba	 |program       |password | 
	|      demo     |    demo1            | demo1@example.com |  false	 |66            |12345678|
	|      demo     |    demo2            | demo2@example.com |  true	 |23            |12345678|
	