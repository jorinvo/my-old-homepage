define([
  'jquery',
  'backbone',
  'hogan',
  'text!temp/widgets/delicious.html'
], function($, Backbone, hogan, deliciousTemp) {


  var Delicious = Backbone.View.extend({

    initialize: function (opt) {

      this.setElement(opt.parent.$('#bookmarks'));

      this.temp = hogan.compile(deliciousTemp);

      this.bookmarks = new Bookmarks();

      this.bookmarks.on('ready', function () {
        this.render({ bookmarks: this.bookmarks.toJSON() });
      }, this);
    },

    render: function(data) {
      this.$el.html( this.temp.render(data) );
    }

  });


  var Bookmarks = Backbone.Collection.extend({

    initialize: function() {
      $.getJSON(
        'http://feeds.delicious.com/v2/json/jorin?count=3&callback=?'
        , _.bind(function (data) {
          _.each(data, _.bind( function (el) {
            this.add( new Bookmark({
              name: el.d,
              url: el.u,
              date: el.dt,
              img: el.u.match( /http:\/\/([^\/\?]+)[\/\?$]/ )[1]
            }) );
          }, this) );
          this.trigger('ready');
        }, this)
      );
    }



  });


  var Bookmark = Backbone.Model.extend({

  });



  return Delicious;

});