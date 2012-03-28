define([
  'jquery',
  'underscore',
  'backbone',
  'hogan',
  'text!temps/404.html'
], function($, _, Backbone, hogan, temp) {

  var NotFound = Backbone.View.extend(_.extend(jorin.protoPage, {

    id: 'not-found',
    className: 'not-found animated bounceOutUp',

    initialize: function() {

      this.temp = hogan.compile(temp);

      this.render();
    },

    render: function(data) {
      this.$el.html( this.temp.render() );
    }

  }));


  return NotFound;

});