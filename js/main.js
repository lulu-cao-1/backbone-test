// Configure dependencies that have special paths using require.js;
// These dependencies must support AMD (Asynchronous Module Definition);
// underscore and backbone by themselves are not AMD compliant, but here we used the versions from amdjs which support AMD;
// https://github.com/amdjs
require.config({
  paths: {
    'jquery': 'lib/jquery-min',
    'underscore': 'lib/underscore-min',
    'backbone': 'lib/backbone-min',
  }
});

define(['app'], function(App) {
  App.initialize();
});
