define([
  'jquery',
  'underscore',
  'backbone',
  'hogan',
  'text!temps/lab.html',
  'modules/experiments'
], function($, _, Backbone, hogan, labTemp, Experiments) {

  var Lab = Backbone.View.extend(_.extend(jorin.protoPage, {

    id: 'lab',
    className: 'lab  animated bounceOutUp',

    initialize: function() {

      this.temp = hogan.compile(labTemp);

      this.experiments = new Experiments();

      this.render();

      return this;
    },

    managerIndex: 3,

    render: function() {
      this.$el.html( this.temp.render({ experiments: this.experiments.toJSON() }) );

      return this;
    }

  }));

  return Lab;

});