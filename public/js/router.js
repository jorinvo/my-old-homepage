define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var Router = Backbone.Router.extend({

    routes: {
      '': 'about',
      'about': 'about',
      'work': 'work',
      'work/:project': 'project',
      'blog': 'blog',
      'blog/:post': 'post',
      'labs': 'labs',
      '404': 'deadLink',
      '*path': 'notFound'
    },

    about: function() {
      jorin.title('About');
      jorin.page.open('about');
    },

    work: function() {
      jorin.title('Work');
      jorin.page.open('work');
    },

    project: function(project) {
      jorin.page.openProject(project);
    },

    blog: function() {
      jorin.title('Blog');
      jorin.page.open('blog');
    },

    post: function(post) {
      jorin.page.openPost(post);
    },

    labs: function() {
      jorin.title('Labs');
      jorin.page.open('labs');
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