define([
  'jquery',
  'backbone'
], function($, Backbone) {


  var Twitter = Backbone.View.extend({

    el: '#tweets',

    initialize: function (opt) {
      this.collection = new Tweets();

      this.collection.on('all', function () {
        jorin.templates.render( 'tweets', this.toJSON() );
      });
    }

  });


  var Tweets = Backbone.Collection.extend({

    initialize: function () {

      $.getJSON(
        'http://api.twitter.com/1/statuses/user_timeline.json?'+
        'screen_name=jorin_vogel'+
        '&count=2'+
        '&trim_user=true'+
        '&callback=?'
        , $.proxy(function (data) {
          _.each(data, _.bind( function (el) {
            this.add( new Tweet({ tweet: el.text }) );
          }, this) );
        }, this)
      );
    }

  });   


  var Tweet = Backbone.Model.extend({

    initialize: function (opt) {
      var tweet = opt.tweet.replace(
        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
        , function(url) {
          return '<a href="'+url+'">'+url+'</a>';
        }).replace(/\B@[_a-z0-9]+/ig, function(reply) {
            return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
        });
      this.set('tweet', tweet );
    }

  });



  return Twitter;

});
