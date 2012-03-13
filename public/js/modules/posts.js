define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var Post = Backbone.Model.extend({
    defaults: {
      hasView: false
    }
  });


  var Posts = Backbone.Collection.extend({

    initialize: function() {
    },

    fetch: function(req, cb) {

      $.getJSON(
        'http://api.tumblr.com/v2/blog/jorinvogel.tumblr.com/'
        + 'posts?api_key=hEEn5blpQrSOx5XGgJp6L1vbsQUpM7aAIxvHmpdoxkDYQoI2q4'
        + ( req.id? '&id=' + req.id : '' )
        + ( req.limit? '&limit=' + req.limit : '' )
        + ( req.offset? '&offset=' + req.offset : '' )
        + '&jsonp=?'
        , _.bind(function (data) {
          if ( data.meta.status === 404 ) {
            alert('404');
          } else {

            this.totalPosts = data.response.total_posts;

            _.each(data.response.posts, _.bind( function (el) {

              var id = el.id.toString();

              if ( this.get(id) ) return;

              var photos = el.photos[0];

              var thumbnail = _.find(photos.alt_sizes, function(img) {
                return img.width === 250;
              });

              var photo = photos.original_size;

              this.add( new Post({
                title: el.tags[0],
                encodedTitle: encodeURIComponent(el.tags[0]),
                id: id,
                body: el.caption,
                date: el.date,
                displayDate: this.prettyDate(el.date),
                photo: photo,
                thumbnail: thumbnail
              }) );
            }, this) ); //END each

            cb();

          } //END else
        }, this) //END callback
      );

      return this;
    },

    fetchPost: function(id, cb) {
      this.fetch({ id: id }, _.bind(function() {
        var post = this.get(id);
        this.trigger('renderPost', post);
        post.trigger('showMe');
      }, this) );

      return this;
    },

    fetchPosts: function() {
      this.fetch({limit: 6 }, _.bind(function() {
        this.trigger('ready');
      }, this) );

      return this;
    },

    loadMorePosts: function() {
      var oldLength = this.length;
      this.fetch({limit: 3, offset: oldLength }, _.bind(function() {
        var newPosts = oldLength - this.length;
        if ( (newPosts > -3) || (this.length === this.totalPosts) ) {
          this.trigger('noMorePosts');
        }
        this.trigger('postsLoaded', newPosts);
      }, this) );

      return this;
    },

    comparator: function(post) {
      return String.fromCharCode.apply(String,
        _.map(post.get('date').split(''), function (c) {
          return 0xffff - c.charCodeAt();
        })
      );
    },

    prettyDate: function(oldDate) {
      var splitDate = oldDate.substring(0,10).split('-');
      return [ splitDate[1] , splitDate[2] , splitDate[0] ].join('/');
    }

  });


  return Posts;

});