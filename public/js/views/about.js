define([
  'jquery',
  'underscore',
  'backbone',
  'text!temps/about.html',
  'widgets/twitter',
  'widgets/github',
  'widgets/delicious',
  'widgets/flickr'
], function($, _, Backbone, aboutTemp, Twitter, Github, Delicious, Flickr) {

  var Page = Backbone.View.extend(_.extend(jorin.protoPage, {

    id: 'about',
    className: 'about animated bounceOutUp',

    initialize: function () {

      this.render();

      this.twitter = new Twitter({parent: this});
      this.github = new Github({parent: this});
      this.github = new Delicious({parent: this});
      this.github = new Flickr({parent: this});

      this.on('activate', function(){
        jorin.page.trigger('show-nameIs');
      });
      this.on('deactivate', function(){
        jorin.page.trigger('hide-nameIs');
      });
    },

    managerIndex: 0,

    render: function() {
      this.$el.html(aboutTemp);
    }

  }));


  return Page;

});