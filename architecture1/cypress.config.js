// eslint-disable-next-line no-undef
const { defineConfig } = require("cypress")

// eslint-disable-next-line no-undef
module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  requestTimeout: 15000,
  screenshotOnRunFailure: true,
  video: false,
  videoUploadOnPasses: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 10,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.*',
  },
})
