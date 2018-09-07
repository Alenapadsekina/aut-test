/*exports.config = {
  specs: 'features/*.feature',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      'step_definitions/*.js'
    ]
  },
 
  specs: ['../test/test_spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  cucumberOpts: {
    require: [
      'step_definitions/*.js'
    ]
  },

  allScriptsTimeout: 120000
};*/
exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['../support/test_spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};