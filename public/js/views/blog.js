define([
  'jquery',
  'backbone',
  'hogan',
  'text!temp/blog.html'
], function($, Backbone, hogan, blogTemp) {

  var Blog = Backbone.View.extend({

    tagName: 'section',
    id: 'blog',
    className: 'blog',

    initialize: function() {

      this.temp = hogan.compile(blogTemp);

      this.posts = jorin.posts;
      this.posts.fetchPosts();


      this.posts.on('ready', function () {
        this.render({ posts: this.posts.toJSON() });
      }, this);

    },

    render: function(data) {
      this.$el.html( this.temp.render(data) );
      log(this.el);
    },

    activate: function () {
      this.$el.show();
    },

    deactivate: function () {
      this.$el.hide();
    }

  });


  return Blog;

});