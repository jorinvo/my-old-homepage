define([
  'jquery',
  'backbone',
  'views/home',
  'views/work'
], function($, Backbone, Home, Work) {

  var Page = Backbone.View.extend({

    el: '#container',

    initialize: function(opt) {
      this.home = new Home();
      this.work = new Work();

      $('header').addClass('header-load');
      $('.connect').addClass('connect-load');
    },

    events: {
      'click .link': 'openPage'
    },

    openPage: function (e) {
      e.preventDefault();
      jorin.router.navigate( $(e.target).attr('href'), {trigger: true} );
    }

  });

  return Page;

});