// Karma configuration
// Generated on Mon May 23 2016 10:54:12 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
    ],
    // list of files / patterns to load in the browser
    files: [
      { pattern: 'js/jquery-2.2.2.min.js', included: true, watched: false },
      { pattern: 'node_modules/angular/angular.js', included: true, watched: false },
      { pattern: 'node_modules/angular-route/angular-route.js', included: true, watched: false },
      { pattern: 'node_modules/angular-local-storage/src/angular-local-storage.js', included: true, watched: false },
      { pattern: 'node_modules/angular-mocks/angular-mocks.js', included: true, watched: false },
      { pattern: 'app/**/*.js', included: true, watched: false },
      { pattern: 'app/**/*.html', included: true, watched: false },
      { pattern: 'app/*.js', included: true, watched: false },
      { pattern: 'test/ControllerTest/*.spec.js', included: true, watched: false },
      { pattern: 'test/ServiceTest/*.spec.js', included: true, watched: false },
      { pattern: 'test/FilterTest/*.spec.js', included: true, watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': 'coverage'
    },
    
    coverageReporter: {  
      type: 'html',
      dir: 'coverage'
    },
    

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
