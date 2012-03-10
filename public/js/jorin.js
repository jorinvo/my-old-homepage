define([
  'underscore',
  'router',
  'utils/helpers',
  'utils/manager',
  'collections/posts',
  'views/page'
], function(_, Router, helpers, Manager, PostsCollection, Page) {
  var jorin = _.extend(helpers, {

    init: function(){

      this.posts = new PostsCollection();

      this.page = new Page();

      this.manager = new Manager();

      this.router = new Router();

      Backbone.history.start({pushState: true});
    }

  });

  //I am not happy with this global object,
  //but I had a problem when I tried to require this file
  window.jorin = jorin;

  return jorin;

});