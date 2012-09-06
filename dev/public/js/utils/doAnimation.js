define(['jquery', 'modernizr'], function($) {

  var mode = Modernizr.cssanimations ? 'css3' : 'fallback';

  var timeoutIn, timeoutOut, cbIn, cbOut;

  var animIn = function($el, klass) {
    $el.removeClass('hide').addClass(klass);
    timeoutIn = setTimeout(cbIn = function() {
      $el.removeClass('hide').removeClass(klass);
      cbIn = undefined;
    }, 1800);
  };

  var animOut = function($el, klass) {
    $el.addClass(klass);
    clearTimeout(timeoutIn);
    clearTimeout(timeoutOut);
    if (cbIn) cbIn();
    if (cbOut) cbOut();
    timeoutOut = setTimeout(cbOut = function() {
      $el.addClass('hide').removeClass(klass);
      cbOut = undefined;
    }, 1800);
  };

  var animations = {};

  animations.css3 = {
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

  animations.fallback = {
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

    animations[mode][animation]($(this));

    return this;
  };

});