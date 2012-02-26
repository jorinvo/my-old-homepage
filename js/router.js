define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'home',
      'work': 'work',
      'blog': 'blog',
      'labs': 'labs',
      'photos': 'photos',
      '*path': 'notFound'
    },

    home: function(){
      jorin.page.home.active();
    },

    work: function(){
      jorin.page.work.active();
    },

    notFound: function () {
      this.navigate('', {trigger: true});
    }

  });


  return Router;
});