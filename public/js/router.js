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

    post: function(post){
      jorin.page.openPost(post);
    },

    notFound: function () {
      this.navigate('', {trigger: true});
    }

  });


  return Router;
});