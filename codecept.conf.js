exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpratice.com.br',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  name: 'Qazando-BDD'
}