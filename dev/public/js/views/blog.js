define([
  'jquery',
  'underscore',
  'backbone',
  'hogan',
  'text!temps/blog.html',
  'text!temps/post_thumbnails.html'
], function($, _, Backbone, hogan, blogTemp, post_thumbnailsTemp) {

  var Blog = Backbone.View.extend(_.extend(jorin.protoPage, {

    id: 'blog',
    className: 'blog animated',

    initialize: function() {
      this.temp = hogan.compile(blogTemp);
      this.post_thumbnails = hogan.compile(post_thumbnailsTemp);

      this.posts = jorin.posts;
      this.posts.fetchPosts();


      this.posts.on('ready', function() {
        this.render({ posts: this.posts.toJSON() });
      }, this);

      this.posts.on('postsLoaded', function(i) {
        this.append({ posts: _.rest(this.posts.toJSON(), i ) });
      }, this);

      this.posts.on('noMorePosts', this.hideLoadButton, this);

    },

    render: function(data) {
      this.$el.html( this.temp.render(data, { post_thumbnails: this.post_thumbnails }) );
    },

    append: function(data) {
      this.$('#posts').append( this.post_thumbnails.render(data) );
      $(window).scrollTop(9999);
    },

    hideLoadButton: function() {
      var $loadMore = this.$('#load-more').addClass('animated bounceOutDown');
      setTimeout(_.bind(function() {
        $loadMore.remove();
      }, this), 800);
    },

    managerIndex: 2,

    events: {
      'click .post-link': 'openPostLink',
      'click #load-more': 'loadMore'
    },

    openPostLink: function(e) {
      e.preventDefault();
      jorin.router.navigate( $(e.currentTarget).attr('href'), {trigger: true} );
    },

    loadMore: function() {
      this.posts.loadMorePosts();
    }

  }));


  return Blog;

});