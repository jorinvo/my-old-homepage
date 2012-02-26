define([
  'jquery',
  'backbone',
  'widgets/twitter',
  'widgets/github',
  'widgets/delicious'
], function($, Backbone, Twitter, Github, Delicious) {

  var Page = Backbone.View.extend({

    el: '#home',

    initialize: function () {

      this.twitter = new Twitter();
      this.github = new Github();
      this.github = new Delicious();

    },

    activate: function () {
      this.$el.fadeIn();
    },

    deactivate: function () {
      this.$el.fadeOut();
    }

  });


  return Page;

});