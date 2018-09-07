
exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['./jasmine_test/search.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};