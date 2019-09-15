//Complete siguiendo las instrucciones del taller
var { defineSupportCode } = require('cucumber');
var { expect } = require('chai');

defineSupportCode(({ Given, When, Then }) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('https://losestudiantes.co/');
    if (browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }

  });


  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);

    setTimeout(function () {
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



  When(/^I fill with (.*) and (.*)$/, (email, password) => {
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




  When('I open the register screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);

    setTimeout(function () {
      browser.click('button=Ingresar');
    }, 3000);
  });

  When(/^I fill basic information (.*), (.*) and (.*)$/, (name, lastName, email) => {
    browser.waitForVisible('.cajaSignUp', 5000);
    var cajaSignUp = browser.element('.cajaSignUp');

    var nameInput = cajaSignUp.element('input[name="nombre"]');
    nameInput.click();
    nameInput.keys(name);

    var lastNameInput = cajaSignUp.element('input[name="apellido"]');
    lastNameInput.click();
    lastNameInput.keys(lastName)

    
    var mailInput = cajaSignUp.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);
  });


  When(/^I select studies, is MBA (.*) and (.*)$/, (mba, program) => {
    browser.pause(1000);
    var cajaSignUp = browser.element('.cajaSignUp');

    if (mba === 'true') {
      var isMBAElement = cajaSignUp.element('input[class="jsx-527058112"]');
      isMBAElement.click();
      browser.pause(2000);
    }
    var selectBox = $('select[name="idPrograma"]');
    selectBox.selectByAttribute('value', program);

    browser.pause(1000);

    var termElement = cajaSignUp.element('input[class="jsx-520551651 "]');
    termElement.click();


  });


  When(/^I set the password (.*)$/, (password) => {
    var cajaSignUp = browser.element('.cajaSignUp');
    var passwordInput = cajaSignUp.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);

  });


  When('I try to registrer', () => {
    var cajaLogIn = browser.element('.cajaSignUp');
    cajaLogIn.element('button=Registrarse').click()
  });

  Then('I expect to log in', () => {
    browser.waitForVisible('#cuenta', 5000);
    var account = browser.isVisible('#cuenta')
    expect(account).to.be.true;
  });

  Then('I expect message error', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include('Debes aceptar los términos y condiciones');
  });


});