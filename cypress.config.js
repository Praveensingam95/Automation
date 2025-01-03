const { defineConfig } = require("cypress");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@cypress/browserify-preprocessor");

// async function setupNodeEvents(on, config) {
//   // // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   // await preprocessor.addCucumberPreprocessorPlugin(on,config);

//   // on("file:preprocessor", browserify.default(config));

//   // // Make sure to return the config object as it might have been modified by the plugin.
  
//   return config;
// }



module.exports = defineConfig({
  defaultCommandTimeout:6000,

  reporter: 'cypress-mochawesome-reporter',


  env: {
    url: 'visit page'
  },


  
  retries: {
    runMode: 1,

  },
  projectId: '43ob9s',
  projectId: "c7t3sk",
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      const configFile = config.env.configFile || 'dev'; // Default to 'dev' if not specified

    },

    specPattern: 'cypress/integration/example/*.js'
   
  },

  viewportHeight: 800,
  viewportWidth: 1200,
  video:true,
 
});







