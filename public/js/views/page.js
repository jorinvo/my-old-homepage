define([
  'jquery',
  'backbone',
  'views/about',
  'views/work',
  'views/blog'
], function($, Backbone, About, Work, Blog) {

  var Page = Backbone.View.extend({

    el: '#container',

    initialize: function(opt) {
      this.about = new About();
      this.work = new Work();
      this.blog = new Blog();

      this.$links = $('nav').children();

      $('header').addClass('header-load');
      $('.connect').addClass('connect-load');
    },

    //router-method
    open: function(page) {
      this.$links
        .removeClass('active-page')
        .filter('[href=' + page + ']').addClass('active-page');
      this[page].active();
    },

    openPost: function(post) {

      // this.blog. ;


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