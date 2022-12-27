const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reporterEnabled: "mochawesome",
    // charts: true,
    reportPageTitle: 'Keela Automation Report',
    embeddedScreenshots: true,
    overwrite: true,
    // inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://dev.keela.co/",
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      })
      on("file:preprocessor", bundler)
      await addCucumberPreprocessorPlugin(on, config)
      return config
    },
    // To Include different types of tests 
    // specPattern: ["cypress/e2e/features/*.feature", "cypress/e2e/*.cy.js"]

    // Just running BDD approach of tests
    specPattern: ["cypress/e2e/features/*.feature"]
  },
})
