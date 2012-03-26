define([], function(){

  var protoPage = {

    tagName: 'section',

    activate: function(i) {
      var animation = 'inTop';
      this.trigger('activate');
      if (i >= 0) {
        if (i > this.managerIndex) {
          animation = 'inLeft';
        } else {
          animation = 'inRight';
        }
      } else {
        animation = 'inTop';
      }
      this.$el.doAnimation(animation);
      setTimeout(function() {
        $(document).scrollTop(0);
      }, 750);
    },

    deactivate: function(i) {
      var animation = 'outTop';
      this.trigger('deactivate');
      if (i >= 0) {
        if (i > this.managerIndex) {
          animation = 'outLeft';
        } else {
          animation = 'outRight';
        }
      }
      this.$el.doAnimation(animation);
    }

  };

  return protoPage;

});