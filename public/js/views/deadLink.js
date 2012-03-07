define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var DeadLink = Backbone.View.extend({

    el: '#dead-link',

    activate: function () {
      this.$el.show();
    },

    deactivate: function () {
      this.$el.hide();
    }

  });


  return DeadLink;

});