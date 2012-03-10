define([
  'jquery',
  'backbone',
  'hogan',
  'text!temp/blog.html'
], function($, Backbone, hogan, blogTemp) {

  var Blog = Backbone.View.extend(_.extend(jorin.protoPage, {

    id: 'blog',
    className: 'blog animated bounceOutUp',

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
    },

    managerIndex: 2,

    events: {
      'click .post-link': 'openPostLink'
    },

    openPostLink: function(e) {
      e.preventDefault();
      jorin.router.navigate( $(e.currentTarget).attr('href'), {trigger: true} );
    }

  }));


  return Blog;

});