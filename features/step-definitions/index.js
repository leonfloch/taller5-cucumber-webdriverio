//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('https://losestudiantes.co/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }

  });


  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);

    setTimeout(function(){
        browser.click('button=Ingresar');
    }, 3000);
  });


  When('I fill a email and password', () => {
    browser.waitForVisible('.cajaLogIn', 5000);
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('demo@gmail.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('12345678')
  });

  Then('I expect to be able to login', () => {
    browser.waitForVisible('.dropDown.dropdown.btn-group', 5000);
  });
  


  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    browser.waitForVisible('.cajaLogIn', 5000);
    var cajaLogIn = browser.element('.cajaLogIn');

   var mailInput = cajaLogIn.element('input[name="correo"]');
   mailInput.click();
   mailInput.keys(email);

   var passwordInput = cajaLogIn.element('input[name="password"]');
   passwordInput.click();
   passwordInput.keys(password)
});

When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

Then('I expect to see {string}', error => {
   browser.waitForVisible('.aviso.alert.alert-danger', 5000);
   var alertText = browser.element('.aviso.alert.alert-danger').getText();
   expect(alertText).to.include(error);
});


});