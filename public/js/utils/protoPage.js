define([], function(){

  var protoPage = {

    tagName: 'section',

    managerLast: 'bounceOutUp',

    activate: function(i) {
      this.$el.removeClass(this.managerLast);
      if (i >= 0) {
        if (i > this.managerIndex) { this.managerLast = 'bounceInRight'
        } else {
          this.managerLast = 'bounceInLeft';
        }
      } else {
        this.managerLast = 'bounceInDown';
      }
      this.$el.addClass(this.managerLast);
    },

    deactivate: function(i) {
      this.$el.removeClass(this.managerLast);
      if (i >= 0) {
        if (i > this.managerIndex) {
          this.managerLast = 'bounceOutLeft';
        } else {
          this.managerLast = 'bounceOutRight';
        }
      } else {
        this.managerLast = 'bounceOutUp';
      }
      this.$el.addClass(this.managerLast);
    }

  };

  return protoPage;

});