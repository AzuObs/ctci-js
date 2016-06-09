// Karma configuration
// Generated on Thu Jun 09 2016 13:01:39 GMT+0100 (BST)
(function() {
  "use strict";

  module.exports = function(config) {
    config.set({
      frameworks: ["jasmine", "browserify"],

      files: [
        "src/*",
        "test/*"
      ],

      preprocessors: {
        "src/*": ["browserify"],
        "test/*": ["browserify"]
      },


      browserify: {
        debug: true
      },

      plugins: [
        "karma-jasmine",
        "karma-browserify"
      ],

      reporters: ["progress"],
      autoWatch: true
    });
  };

})();
