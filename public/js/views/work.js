define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var Page = Backbone.View.extend({

    el: '#work',

    activate: function () {
      this.$el.show();
    },

    deactivate: function () {
      this.$el.hide();
    }

  });


  return Page;

});