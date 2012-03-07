define([
  'jquery',
  'backbone'
], function($, Backbone) {

  var Page = Backbone.View.extend({

    el: '#container',

    initialize: function(opt) {

      this.$links = $('nav').children();

      $('header').addClass('header-load');
      $('.connect').addClass('connect-load');

    },

    activeLink: function(href) {
      this.$links
        .removeClass('active-page')
        .filter('[href=' + href + ']').addClass('active-page');

      return this;
    },

//router-methods
    open: function(page) {
      this
        .activeLink(page)
        .loadView(page);

      return this;
    },

    openPost: function(post) {
      this
        .activeLink('blog')
        .loadView('postsView', _.bind(function() {
          this.postsView.showPost(post);
        }, this) );

      return this;
    },
//END router-methods

    loadView: function(page, cb) {

      if (this[page]) {
        this[page].active();
        if (cb) cb();
      } else {
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
    openPage: function (e) {
      e.preventDefault();
      jorin.router.navigate( $(e.target).attr('href'), {trigger: true} );
    }

  });

  return Page;

});