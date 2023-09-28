const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  env: {
    env: { grepFilterSpecs: true, grepOmitFiltered: true },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@bahmutov/cy-grep/src/plugin")(config);
      return config;
    },
  },
  video: false,
});
