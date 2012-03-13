define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var Labs = Backbone.View.extend({

    el: '#labs',

    initialize: function() {
      this.$el.addClass('animate bounceOutUp');
    },

    managerIndex: 3

  });


  return Labs;

});