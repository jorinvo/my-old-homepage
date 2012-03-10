define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var Labs = Backbone.View.extend({

    el: '#labs',

    initialize: function() {
      this.$el.addClass('animate bounceOutUp');
    },

    managerIndex: 3

  });


  return Labs;

});