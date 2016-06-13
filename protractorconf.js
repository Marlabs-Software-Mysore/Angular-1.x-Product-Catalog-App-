exports.config = {
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['protractor_test/add-component.spec.js']
}