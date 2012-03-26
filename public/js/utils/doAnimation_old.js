define(['jquery'], function($) {

  var animations = {

    inPop: function($el) {
      $el.removeClass('hide');
    },

    inLeft: function($el) {
      $el.removeClass('hide');
    },

    outLeft: function($el) {
      $el.addClass('hide');
    },

    inRight: function($el) {
      $el.removeClass('hide');
    },

    outRight: function($el) {
      $el.addClass('hide');
    },

    inTop: function($el) {
      $el.removeClass('hide');
    },

    outTop: function($el) {
      $el.addClass('hide');
    }
  };

  $.fn.doAnimation = function(animation){


    animations[animation]($(this));

    return this;
  };

});