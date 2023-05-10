


const { defineConfig } = require('cypress')




module.exports = defineConfig({
  e2e: {
    video: false,
    numTestsKeptInMemory: 0,
    defaultCommandTimeout: 10000,
    responseTimeout: 3000,
    requestTimeout: 1000,
    pageLoadTimeout: 6000,
    viewportWidth: 1080,
    viewportHeight: 720,
    testIsolation: false
  }
})