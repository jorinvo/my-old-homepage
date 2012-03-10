define([
  'jquery',
  'backbone',
  'hogan',
  'text!temp/post.html',
  'utils/manager',
  'views/postView'
], function($, Backbone, hogan, postTemp, Manager, PostView) {

  var PostsView = Backbone.View.extend({

    el: '#posts-container',

    initialize: function() {

      this.posts = jorin.posts;

      jorin.temp.post = hogan.compile(postTemp);

      this.manager = new Manager();

      this.posts.each(_.bind(this.addView, this) );
      this.posts.on('add', this.addView, this);

    },

    activate: function () {
      this.$el
        .removeClass('bounceOutUp')
        .addClass('bounceInDown');
      jorin.keydown.on('keydown', function(e) {
        if (e.which === 27) jorin.router.navigate('blog', { trigger: true });
      });
    },

    deactivate: function () {
      this.$el
        .removeClass('bounceInDown')
        .addClass('bounceOutUp');
      jorin.keydown.off();
    },

    addView: function(post) {
      var postView = new PostView({ post: post });
      this.manager.add(postView);
      this.$el.append(postView.el);
    },

    showPost: function(id) {

      var post = this.posts.get(id);
      if (!post) {
        this.posts.fetchPost(id);
      } else {
        post.trigger('showMe');
      }

      return this;
    }

  });


  return PostsView;

});