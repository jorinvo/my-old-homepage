define([
  'jquery',
  'backbone',
  'models/post'
], function($, Backbone, Post) {


  var Posts = Backbone.Collection.extend({

    initialize: function() {

      $.getJSON(
        'http://api.tumblr.com/v2/blog/jorinvogel.tumblr.com/'
        + 'posts?api_key=hEEn5blpQrSOx5XGgJp6L1vbsQUpM7aAIxvHmpdoxkDYQoI2q4&jsonp=?'
        , _.bind(function (data) {
          _.each(data.response.posts, _.bind( function (el) {

            var url = el.tags[0]
              .match(/[a-zA-Z0-9 ]/g)
              .join('')
              .split(' ')
              .join('-')
              .toLowerCase();

            var photo = _.find(el.photos[0].alt_sizes, function(img) {
                return img.width === 250;
            });

            this.add( new Post({
              title: el.tags[0],
              url: url,
              body: el.caption,
              date: el.date,
              photo: photo
            }) );

          }, this) );
        }, this)
      );

    }

  });


  return Posts;

});