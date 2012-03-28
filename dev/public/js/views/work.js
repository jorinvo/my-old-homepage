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
    className: 'work  animated',

    initialize: function() {

      this.temp = hogan.compile(workTemp);

      this.projects = new Projects();

      this.render();

      this.$works = this.$('#works').css({ width: (this.projects.length * 652) + 'px' });

      this
        .on('activate', function() {
          this.logHistory();
          this.projects.resetTimer();
        }, this)
        .on('deactivate', this.stopTimer, this);

      this.projects
        .on('move', function(current) {
          var left = (current * -652) + 'px';
          var $cur = this.$works
            .css({ left: left })
            .find('.work-text')
            .addClass('hide')
            .eq(current);
          setTimeout(function() {
            $cur.doAnimation('inPop');
          }, 1000);
        }, this)
        .trigger('move', 0)
        .data
          .on('change:current', this.logHistory, this)
          .set('current', 0);


      return this;
    },

    managerIndex: 1,

    render: function() {
      this.$el.html( this.temp.render({ projects: this.projects.toJSON() }) );

      return this;
    },

    showProject: function(project) {
      this.projects.show(project);

      return this;
    },

    logHistory: function() {
      jorin.router.navigate('work/' + this.projects.data.get('current'));
    },

    events: {
      'click #work-left': 'moveLeft',
      'click #work-right': 'moveRight',
      'mouseenter #works': 'stopTimer',
      'mouseleave #works': 'startTimer',
      'click .more-link': 'showDesc'
    },

    moveLeft: function(e) {
      e.preventDefault();
      this.projects.resetTimer();
      this.projects.left();

      return this;
    },

    moveRight: function(e) {
      e.preventDefault();
      this.projects.resetTimer();
      this.projects.right();

      return this;
    },

    startTimer: function() {
      this.projects.startTimer();

      return this;
    },

    stopTimer: function() {
      this.projects.stopTimer();

      return this;
    },

    showDesc: function(e) {
      var $tar = $(e.currentTarget);

      $tar.children().toggleClass('hide');
      $tar.parent().find('.work-desc').toggleClass('no-height');

      return this;
    }

  }));


  return Work;

});