const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts: true,
    embeddedScreenshots:true,
    inlineAsserts: true,
    saveAllAttempts: false
  },
  video:true,
  e2e: {
    testIsolation:false,
    baseUrl:'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on('after:run',() => {

      })
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.feature"
  },
});
