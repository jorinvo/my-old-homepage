define([
  'jquery',
  'backbone',
  'text!temp/about.html',
  'widgets/twitter',
  'widgets/github',
  'widgets/delicious',
  'widgets/flickr'
], function($, Backbone, aboutTemp, Twitter, Github, Delicious, Flickr) {

  var Page = Backbone.View.extend({

    tagName: 'section',
    id: 'about',
    className: 'about',

    initialize: function () {

      this.render();

      this.twitter = new Twitter({parent: this});
      this.github = new Github({parent: this});
      this.github = new Delicious({parent: this});
      this.github = new Flickr({parent: this});

    },

    activate: function () {
      this.$el.show();
    },

    deactivate: function () {
      this.$el.hide();
    },

    render: function() {
      this.$el.html(aboutTemp);
    }

  });


  return Page;

});