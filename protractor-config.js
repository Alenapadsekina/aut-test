
exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['../jasmine_test/search_spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};