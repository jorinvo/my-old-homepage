define([
  'jquery',
  'backbone'
], function($, Backbone) {

  PostView = Backbone.View.extend({

    className: 'post',

    initialize: function(opt) {

      this.post = opt.post;

      this.render();

      this.post.on('showMe', function(){
        this.active();
      }, this);

    },

    render: function() {
      this.$el.html(
        jorin.temp.post.render(
          this.post.toJSON()
        )
      );
    },

    events: {
      'click .tweet-post': 'tweetPost'
    },

    tweetPost: function() {

      var url = encodeURIComponent('http://jorin-vogel.com/#blog/' + this.post.id);
      window.open( 'http://twitter.com/intent/tweet?'
        + '&url=' + url
        + '&via=' + 'jorin_vogel'
        + '&text=' + encodeURIComponent(this.post.get('title'))
        + '&count=none', "tweet it!", "height=450,width=550" )

    },

    activate: function() {
      jorin.title('Blog: ' + this.post.get('title'));
      this.$el.addClass('active');
    }
  });


  return PostView
});