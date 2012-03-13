define([
  'jquery',
  'underscore',
  'backbone',
  'hogan',
  'text!temps/work.html',
  'modules/projects'
], function($, _, Backbone, hogan, workTemp, Projects) {

  var Work = Backbone.View.extend(_.extend(jorin.protoPage, {

    id: 'work',
    className: 'work  animated bounceOutUp',

    initialize: function() {

      this.temp = hogan.compile(workTemp);

      this.projects = new Projects();

      this.render();

      this.$works = this.$('#works').css({ width: (this.projects.length * 600) + 'px' });

      this.projects.data.on('change:current', function(data) {
        jorin.router.navigate('work/' + data.get('current'));
      });

    },

    managerIndex: 1,

    render: function() {
      this.$el.html( this.temp.render({ projects: this.projects.toJSON() }) );
    },

    showProject: function(project) {
      var left = this.projects.show(project);
      this.$works.css({ left: left });
    },

    events: {
      'click #work-left': 'left',
      'click #work-right': 'right'
    },

    left: function(e) {
      e.preventDefault();
      var left = this.projects.left();
      this.$works.css({ left: left });
    },

    right: function(e) {
      e.preventDefault();
      var left = this.projects.right();
      this.$works.css({ left: left });
    }

  }));


  return Work;

});