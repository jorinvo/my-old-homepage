define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var Labs = Backbone.View.extend({

    el: '#labs',

    activate: function () {
      this.$el.show();
    },

    deactivate: function () {
      this.$el.hide();
    }

  });


  return Labs;

});