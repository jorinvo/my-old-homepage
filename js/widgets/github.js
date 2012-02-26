define([
  'jquery',
  'backbone'
], function($, Backbone) {


  var Github = Backbone.View.extend({

    el: '#repos',

    initialize: function (opt) {
      this.collection = new Repos();


      this.collection.on('all', function () {
        jorin.templates.render( 'repos', this.toJSON() );
      });
    }

  });


  var Repos = Backbone.Collection.extend({

    initialize: function() {
      $.getJSON(
        'https://api.github.com/users/jorin-vogel/repos?callback=?'
        , $.proxy(function (res) {
          _.each(res.data, _.bind( function (el) {
            this.add( new Repo({
              name: el.name,
              url: el.html_url,
              description: el.description,
              date: el.updated_at
            }) );
          }, this) );
        }, this)
      );
    },

    comparator: function(el) {
      return el.get('date');
    }

  });


  var Repo = Backbone.Model.extend({

  });



  return Github;

});