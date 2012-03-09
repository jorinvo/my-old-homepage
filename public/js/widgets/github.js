define([
  'jquery',
  'backbone',
  'hogan',
  'text!temp/widgets/github.html'
], function($, Backbone, hogan, githubTemp) {


  var Github = Backbone.View.extend({

    initialize: function (opt) {

      this.setElement(opt.parent.$('#repos'));

      this.temp = hogan.compile(githubTemp);

      this.repos = new Repos();

      this.repos.on('ready', function () {
        this.render({ repos: this.repos.toJSON().splice(0, 3) });
      }, this);
    },

    render: function(data) {
      this.$el.html( this.temp.render(data) );
      this.positionTooltip();
    },

    positionTooltip: function() {
      $('.repo').each(function(i, el) {
        var $el = $(el);
        var left = $el.find('.repo-name').width();
        $el.find('.tipsy').css({ 'margin-left': (left + 5) + 'px' });
      });
    }

  });


  var Repos = Backbone.Collection.extend({

    initialize: function() {
      $.getJSON(
        'https://api.github.com/users/jorin-vogel/repos?callback=?'
        , _.bind(function (res) {
          _.each(res.data, _.bind( function (el) {
            this.add( new Repo({
              name: el.name,
              url: el.html_url,
              description: el.description,
              date: el.updated_at
            }) );
          }, this) );

          this.trigger('ready');

        }, this)
      );
    },

    comparator: function(repo) {
      return String.fromCharCode.apply(String,
        _.map(repo.get('date').split(''), function (c) {
          return 0xffff - c.charCodeAt();
        })
      );
    }

  });


  var Repo = Backbone.Model.extend({

  });



  return Github;

});