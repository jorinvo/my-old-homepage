define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var Router = Backbone.Router.extend({

    routes: {
      '': 'about',
      'about': 'about',
      'work': 'work',
      'blog': 'blog',
      'labs': 'labs',
      'blog/:post': 'post',
      '404': 'deadLink',
      '*path': 'notFound'
    },

    about: function(){
      jorin.title('About');
      jorin.page.open('about');
    },

    work: function(){
      jorin.title('Work');
      jorin.page.open('work');
    },

    blog: function(){
      jorin.title('Blog');
      jorin.page.open('blog');
    },

    labs: function(){
      jorin.title('Labs');
      jorin.page.open('labs');
    },

    post: function(post){
      jorin.page.openPost(post);
    },

    deadLink: function() {
      jorin.title('404 - not found!');
      jorin.page.open('deadLink');
    },

    notFound: function () {
      this.navigate('404', {trigger: true});
    }

  });


  return Router;
});