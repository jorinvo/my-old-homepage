define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var Page = Backbone.View.extend({

    el: '#container',

    initialize: function(opt) {

      this.$links = $('nav').children();

      this.$el.show(function() {
        $('header').addClass('header-load');
        $('.connect').addClass('connect-load');
      });

      var $nameIs = $('#name-is');
      this.on('hide-nameIs', function(){
        $nameIs.addClass('no-width');
      });
      this.on('show-nameIs', function(){
        $nameIs.removeClass('no-width');
      });
    },

    activeLink: function(href) {
      this.$links
        .removeClass('active-page')
        .filter('[href=' + href + ']').addClass('active-page');

      return this;
    },

//router-methods
    open: function(page) {

      _gaq.push([ '_trackPageview', '/' + page ]);

      this
        .activeLink(page)
        .loadView(page);

      return this;
    },

    openPost: function(post) {
      _gaq.push([ '_trackPageview', '/blog/' + post ]);

      this
        .activeLink('blog')
        .loadView('posts', _.bind(function() {
          this.posts.showPost(post);
        }, this) );

      return this;
    },

    openProject: function(project) {
      _gaq.push([ '_trackPageview', '/work/' + project ]);

      this
        .activeLink('work')
        .loadView('work', _.bind(function() {
          this.work.showProject(project);
        }, this));

      return this;
    },
//END router-methods

    loadView: function(page, cb) {

      if (this[page]) {
        this[page].active();
        if (cb) cb();
      } else {
        jorin.loadCss(page);
        require(['views/' + page], _.bind(function(PageView) {
          this[page] = new PageView();
          jorin.manager.add(this[page]);
          this.$el.append(this[page].el);
          this[page].active();
          if (cb) cb();
        },this) );
      }

      return this;
    },

    events: {
      'click .link': 'openPage'
    },

    //This way is only necessary in IE7.
    //Otherwise I could use hashchange-event
    //because I can't support js-disabled anyway.
    //it's also needed for push-state!
    openPage: function (e) {
      e.preventDefault();
      jorin.router.navigate( $(e.target).attr('href'), {trigger: true} );
    }

  });

  return Page;

});