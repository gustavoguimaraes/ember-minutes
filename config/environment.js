/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-hoodie',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'none' 'self' localhost localhost:6007 ember.appback.com",
      'script-src': "'self' 'unsafe-eval' localhost:6007 ember.appback.com",
      'connect-src': "'self' localhost:6007 ember.appback.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'font-src': "'self' fonts.gstatic.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV.manifest = {
    enabled: true,
    appcacheFile: "/manifest.appcache",
    excludePaths: [],
    includePaths: ['/', 'https://ember.appback.com/_api/_files/hoodie.js'],
    //network: ['api/']
  }
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    //ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.hoodieURL = 'https://ember.appback.com';


  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
