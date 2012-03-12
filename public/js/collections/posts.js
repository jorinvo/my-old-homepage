define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var Post = Backbone.Model.extend();


  var Posts = Backbone.Collection.extend({

    initialize: function() {
    },

    fetch: function(id, cb) {

      $.getJSON(
        'http://api.tumblr.com/v2/blog/jorinvogel.tumblr.com/'
        + 'posts?api_key=hEEn5blpQrSOx5XGgJp6L1vbsQUpM7aAIxvHmpdoxkDYQoI2q4'
        + ( id? '&id=' + id : '' )
        + '&jsonp=?'
        , _.bind(function (data) {
          if ( data.meta.status === 404 ) {
            alert('404');
          } else {
            _.each(data.response.posts, _.bind( function (el) {

              var id = el.id.toString();

              if ( this.get(id) ) return;

              var photos = el.photos[0].alt_sizes;

              var photo = _.find(photos, function(img) {
                return img.width === 250;
              });

              var thumbnail = _.find(photos, function(img) {
                return img.width === 100;
              });
              this.add( new Post({
                title: el.tags[0],
                url: encodeURIComponent(el.tags[0]),
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
      this.fetch(id, _.bind(function() {
        this.get(id).trigger('showMe');
      }, this) );

      return this;
    },

    fetchPosts: function() {
      this.fetch(null, _.bind(function() {
        this.trigger('ready');
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