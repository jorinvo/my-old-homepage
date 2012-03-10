define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var Work = Backbone.View.extend({

    el: '#work',

    initialize: function() {
      log(this.$el.addClass('animate bounceOutUp'));
    },

    managerIndex: 1,


  });


  return Work;

});