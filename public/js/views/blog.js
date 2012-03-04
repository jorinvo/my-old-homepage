define([
  'jquery',
  'backbone',
  'collections/posts'
], function($, Backbone, Posts) {

  var Blog = Backbone.View.extend({

    el: '#blog',

    initialize: function() {

      this.collection = new Posts();

      this.collection.on('all', function () {
        jorin.templates.render( 'posts', this.toJSON() );
      });

    },

    activate: function () {
      this.$el.show();
    },

    deactivate: function () {
      this.$el.hide();
    }

  });


  return Blog;

});