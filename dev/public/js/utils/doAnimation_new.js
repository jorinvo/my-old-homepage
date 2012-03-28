define(['jquery'], function($) {

  var animIn = function($el, klass) {
    $el.removeClass('hide').addClass(klass);
    setTimeout(function() {
      $el.removeClass('hide').removeClass(klass);
    }, 1800);
  };

  var animOut = function($el, klass) {
    $el.addClass(klass);
    setTimeout(function() {
      $el.addClass('hide').removeClass(klass);
    }, 1800);
  };

  var animations = {

    inPop: function($el) {
      animIn($el, 'bounceIn');
    },

    inLeft: function($el) {
      animIn($el, 'bounceInLeft');
    },

    outLeft: function($el) {
      animOut($el, 'bounceOutLeft');
    },

    inRight: function($el) {
      animIn($el, 'bounceInRight');
    },

    outRight: function($el) {
      animOut($el, 'bounceOutRight');
    },

    inTop: function($el) {
      animIn($el, 'bounceInDown');
    },

    outTop: function($el) {
      animOut($el, 'bounceOutUp');
    }
  };

  $.fn.doAnimation = function(animation){


    animations[animation]($(this));

    return this;
  };

});