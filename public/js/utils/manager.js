define(['jquery', 'underscore'], function($, _){
	

  var Manager = function() {
    this.current;
    _.each(arguments, _.bind(this.add, this) );
  };

  _.extend(Manager.prototype, {
    add: function(arg) {
      arg.activate  || ( arg.activate = function() { 
        $(arg.el).addClass('active');
      });
      arg.deactivate ||( arg.deactivate = function() { 
        $(arg.el).removeClass('active');
      });
      arg.active = _.bind(function() { 
        if (arg === this.current) return;
        if (this.current) this.current.deactivate();
        arg.activate();
        this.current = arg;
      }, this);
    }
  });


	return Manager;

});