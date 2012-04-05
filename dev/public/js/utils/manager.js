define(['jquery', 'underscore'], function($, _){


  var Manager = function() {
    this.current = null;
    _.each(arguments, _.bind(this.add, this) );
  };

  _.extend(Manager.prototype, {
    add: function(arg) {
      arg.activate  || ( arg.activate = function() {
        arg.$el.addClass('active');
      });
      arg.deactivate ||( arg.deactivate = function() {
        arg.$el.removeClass('active');
      });
      arg.active = _.bind(function() {
        if (arg === this.current) return;
        if (this.current) {
          var cur = this.current;
          var argI = arg.managerIndex;
          (argI >= 0) ? cur.deactivate(argI) : cur.deactivate();
          var curI = cur.managerIndex;
          (curI >= 0) ? arg.activate(curI) : arg.activate();
        } else {
          arg.activate();
        }
        this.current = arg;
        return arg;
      }, this);
    }
  });


	return Manager;

});