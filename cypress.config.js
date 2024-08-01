const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //supportFile: 'cypress./support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/example/*.js'
  },
});
