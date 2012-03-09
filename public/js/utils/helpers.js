define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var helpers = {

    title: function(title) {
      document.title = 'Jorin - ' + title;
    },

    temp: {},

    keydown: (function() {
      var keydown = _.extend(Backbone.Events);

      $(window).on('keydown', _.bind(function(e) {
        keydown.trigger('keydown', e);
      }, this) );

      return keydown;
    })(),

    loadCss: function (url) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.getElementsByTagName("head")[0].appendChild(link);
    }


  };


  return helpers;

});