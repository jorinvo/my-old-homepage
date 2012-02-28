define([
  'jquery',
  'backbone'
], function($, Backbone) {


  var Delicious = Backbone.View.extend({

    el: '#bookmarks',

    initialize: function (opt) {
      this.collection = new Bookmarks();


      this.collection.on('all', function () {
        jorin.templates.render( 'bookmarks', this.toJSON() );
      });
    }

  });


  var Bookmarks = Backbone.Collection.extend({

    initialize: function() {
      $.getJSON(
        'http://feeds.delicious.com/v2/json/jorin?count=3&callback=?'
        , $.proxy(function (data) {
          _.each(data, _.bind( function (el) {
            this.add( new Bookmark({
              name: el.d,
              url: el.u,
              date: el.dt,
              img: el.u.match( /http:\/\/([^\/\?]+)[\/\?$]/ )[1]
            }) );
          }, this) );
        }, this)
      );
    }



  });


  var Bookmark = Backbone.Model.extend({

  });



  return Delicious;

});