const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: '43ob9s',
  reporter: 'cypress-mochawesome-reporter',
  projectId: "c7t3sk",

  env:{
    url:''
  },

retries:{
  runMode:0,

},
  e2e: {
    //supportFile: 'cypress./support/e2e.js',
    setupNodeEvents(on, config) {

      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    specPattern: 'cypress/integration/example/*.js'
  },
  
  viewportHeight: 800,
viewportWidth: 1200,
});






