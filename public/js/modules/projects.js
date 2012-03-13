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
      this.data = new Backbone.Model();
      this.add(JSON.parse(projectsData));
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
      return (current * -600) + 'px';
    },

    right: function() {
      var current = this.data.get('current');
      if (current === this.last().id) {
        current = this.first().id;
      } else {
        current++;
      }
      this.data.set('current', current);
      return (current * -600) + 'px';
    },

    show: function(id) {
      var current = (this.get(id) || this.first()).id;
      this.data.set('current', current);
      return (current * -600) + 'px';
    }


  });

  return Projects;
});