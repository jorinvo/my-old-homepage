define([ 
  'jquery', 
  'backbone'
], function($, Backbone) {

  var Page = Backbone.View.extend({

    el: '#work',

    activate: function () {
      this.$el.fadeIn();
    },

    deactivate: function () {
      this.$el.fadeOut();
    }
    
  });


  return Page;

});