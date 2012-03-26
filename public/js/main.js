require.config( {
  paths: {
    text: 'libs/require/text',
    order: "libs/require/order",
    // jquery: 'libs/zepto',
    jquery: 'libs/jquery-1.7.1',
    // jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
    modernizr: 'libs/modernizr-2.5.3',
    underscore: 'libs/backbone/underscore',
    backbone: 'libs/backbone/backbone',
    hogan: 'libs/hogan/hogan'
  },
  baseUrl: '/js'
} );

require(
  ['jquery', 'jorin', 'modernizr', 'libs/log'],
  function( $, jorin ) {
    $(function(){
      jorin.init();

      if (Modernizr.cssanimations) {
        require(['utils/doAnimation_new']);
      } else {
        require(['utils/doAnimation_old']);
      }
    });
  }
);