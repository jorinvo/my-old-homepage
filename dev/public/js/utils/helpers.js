define([
  'jquery',
  'underscore',
  'backbone',
  'utils/protoPage'
], function($, _, Backbone, protoPage) {

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

    loadCss: function (page) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = '/css/' + page + '.css';
      document.getElementsByTagName("head")[0].appendChild(link);
    },

    protoPage: protoPage

  };


  return helpers;

});