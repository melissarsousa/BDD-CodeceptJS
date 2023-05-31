const { I } = inject();

 // From "features/basic.feature"

Given('that I am on the login page', () => {

  I.amOnPage('/')
  I.click({xpath: '//*[@id="top_header"]/div/div/div[2]/div/ul/li[1]/a'})
  I.waitForElement('#btnLogin', 10)

});

When('I fill the email and password field', () => {

  I.fillField('#user', 'mel@gmail.com')
  I.fillField('#password', secret('12345678'))

});

When('I click on the login button', () => {

  I.click('#btnLogin')

});

Then('I see {string}', (message) => {

    I.see(message)

});

When('I fill the email field', () => {

  I.fillField('#user', 'mel@gmail.com')

});

