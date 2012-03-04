define([
  'jquery',
  'backbone'
], function($, Backbone) {


  var Flickr = Backbone.View.extend({

    el: '#photos',

    initialize: function (opt) {
      this.collection = new Photos();


      this.collection.on('all', function () {
        // log(this);
        jorin.templates.render( 'photos', this.toJSON().splice(0, 6) );
      });
    },

    events: {
      'click img': 'showImage',
    },

    showImage: function(e) {
      e.preventDefault();
      // log(this);
      // $(e.target).attr('data-photo')
      // jorin.router.navigate('')
    }

  });


  var Photos = Backbone.Collection.extend({

    initialize: function() {
      $.ajax({
        url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&id=61961241@N07',
        dataType: 'jsonp',
        jsonpCallback: 'jsonFlickrFeed',
        success: _.bind(function (res) {
          _.each(res.items, _.bind( function (item) {
            this.add( new Photo({
              name: item.title,
              url: item.title.split(' ').join('-').toLowerCase(),
              link: item.link,
              //date needed?
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