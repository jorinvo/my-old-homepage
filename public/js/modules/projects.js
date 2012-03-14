define([
  'jquery',
  'underscore',
  'backbone',
  'text!data/projects.json'
], function($, _, Backbone, projectsData) {

  var Project = Backbone.Model.extend();

  var Projects = Backbone.Collection.extend({

    model: Project,

    initialize: function() {
      this.data = new Backbone.Model;
      this.add(JSON.parse(projectsData));

      return this;
    },

    comparator: function(project) {
      return project.id;
    },

    left: function() {
      var current = this.data.get('current');
      if (current === this.first().id) {
        current = this.last().id;
      } else {
        current--;
      }
      this.data.set('current', current);
      this.trigger('move', current);

      return this;
    },

    right: function() {
      var current = this.data.get('current');
      if (current === this.last().id) {
        current = this.first().id;
      } else {
        current++;
      }
      this.data.set('current', current);
      this.trigger('move', current);

      return this;
    },

    show: function(id) {
      var current = (this.get(id) || this.first()).id;
      this.data.set('current', current);
      this.trigger('move', current);

      return this;
    },

    startTimer: function() {
      this.timer = setInterval(_.bind(this.right, this), 3000);
    },

    stopTimer: function() {
      clearInterval(this.timer);
    },

    resetTimer: function() {
      this.stopTimer();
      this.startTimer();
    }


  });

  return Projects;
});