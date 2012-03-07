define([
  'jquery',
  'backbone',
  'hogan',
  'text!temp/widgets/twitter.html'
], function($, Backbone, hogan, twitterTemp) {


  var Twitter = Backbone.View.extend({

    initialize: function (opt) {

      this.setElement(opt.parent.$('#tweets'));

      this.temp = hogan.compile(twitterTemp);

      this.tweets = new Tweets();

      this.tweets.on('ready', function () {
        this.render({ tweets: this.tweets.toJSON() });
      }, this);
    },

    render: function(data) {
      this.$el.html( this.temp.render(data) );
    }

  });


  var Tweets = Backbone.Collection.extend({

    initialize: function () {

      $.getJSON(
        'http://api.twitter.com/1/statuses/user_timeline.json?'+
        'screen_name=jorin_vogel'+
        '&count=3'+
        '&trim_user=true'+
        '&callback=?'
        , _.bind(function (data) {
          _.each(data, _.bind( function (el) {
            this.add( new Tweet({ tweet: el.text }) );
          }, this) );

          this.trigger('ready');

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
            return  '<a href="http://twitter.com/'+reply+'">'+reply+'</a>';
        });
      this.set('tweet', tweet );
    }

  });



  return Twitter;

});
