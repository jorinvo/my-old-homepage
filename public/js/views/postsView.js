define([
  'jquery',
  'underscore',
  'backbone',
  'hogan',
  'text!temps/post.html',
  'utils/manager',
  'views/postView'
], function($, _, Backbone, hogan, postTemp, Manager, PostView) {

  var PostsView = Backbone.View.extend({

    el: '#posts-container',

    initialize: function() {

      this.posts = jorin.posts;

      jorin.temp.post = hogan.compile(postTemp);

      this.manager = new Manager();

      this.posts.on('renderPost', this.addView, this);

    },

    activate: function () {
      this.$el
        .removeClass('bounceOutUp hide')
        .addClass('bounceInDown');
      //prevents back-button position: fixed from being broken
      setTimeout(_.bind(function() {
        this.$el.removeClass('bounceInDown');
      }, this), 1500);
      jorin.keydown.on('keydown', function(e) {
        if (e.which === 27) jorin.router.navigate('blog', { trigger: true });
      });
    },

    deactivate: function () {
      this.$el
        .removeClass('bounceInDown')
        .addClass('bounceOutUp');
      setTimeout(_.bind(function() {
        this.$el.addClass('hide');
      }, this), 1500);

      jorin.keydown.off();
    },

    addView: function(post) {
      var postView = new PostView({ post: post });
      this.manager.add(postView);
      this.$el.append(postView.el);
      post.set('hasView', true).trigger('showMe');

      return this;
    },

    showPost: function(id) {

      var post = this.posts.get(id);

      if (!post) {
        this.posts.fetchPost(id);
      } else if ( !post.get('hasView') ) {
        this.addView(post);
      } else {
        post.trigger('showMe');
      }

      return this;
    }

  });


  return PostsView;

});