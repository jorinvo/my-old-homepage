define([
  'jquery',
  'backbone'
], function($, Backbone) {


  var Flickr = Backbone.View.extend({

    el: '#photos',

    initialize: function (opt) {
      this.collection = new Photos();


      this.collection.on('all', function () {
        jorin.templates.render( 'photos', this.toJSON().splice(0, 7) );
      });
    }

  });


  var Photos = Backbone.Collection.extend({

    initialize: function() {
      $.ajax({
        url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&id=61961241@N07',
        dataType: 'jsonp',
        jsonpCallback: 'jsonFlickrFeed',
        success: $.proxy(function (res) {
          _.each(res.items, _.bind( function (item) {
            this.add( new Photo({
              name: item.title,
              url: item.link,
              date: item.published,
              photo: item.media.m.match( /.+(?=m.jpg)/ )[0]
            }) );
          }, this) );
        }, this)
      });
    }

  });


  var Photo = Backbone.Model.extend({

  });



  return Flickr;

});