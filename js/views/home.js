define([
  'jquery',
  'backbone',
  'widgets/twitter',
  'widgets/github',
  'widgets/delicious',
  'widgets/flickr'
], function($, Backbone, Twitter, Github, Delicious, Flickr) {

  var Page = Backbone.View.extend({

    el: '#home',

    initialize: function () {

      this.twitter = new Twitter();
      this.github = new Github();
      this.github = new Delicious();
      this.github = new Flickr();

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