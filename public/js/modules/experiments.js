define([
  'jquery',
  'underscore',
  'backbone',
  'text!data/experiments.json'
], function($, _, Backbone, experimentsData) {

  var Experiment = Backbone.Model.extend();

  var Experiments = Backbone.Collection.extend({

    model: Experiment,

    initialize: function() {
      this.add(JSON.parse(experimentsData));

      return this;
    },

    comparator: function(experiment) {
      return -experiment.id;
    }

  });

  return Experiments;
});