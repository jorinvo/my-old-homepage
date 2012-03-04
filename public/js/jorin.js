define([
  'jquery',
  'router',
  'utils/manager',
  'utils/templates',
  'views/page'
], function($, Router, Manager, Templates, Page) {
  var jorin = {

    init: function(){

      this.templates = new Templates();

      this.page = new Page();

      this.manager = new Manager();
      this.manager.add(this.page.about);
      this.manager.add(this.page.work);
      this.manager.add(this.page.blog);

      this.title = function(title) {
        document.title = 'Jorin - ' + title;
      };

      this.router = new Router(this);
      Backbone.history.start();

    }

  };

  //I am not happy with this global object,
  //but I had a problem when I tried to require this file
  window.jorin = jorin;

  return jorin;

});