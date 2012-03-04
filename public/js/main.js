require.config( {
  paths: {
    text: 'libs/require/text',
    order: "libs/require/order",
    // jquery: 'libs/zepto',
    jquery: 'libs/jquery-1.7.1',
    // jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
    underscore: 'libs/backbone/underscore',
    backbone: 'libs/backbone/backbone',
    hogan: 'libs/hogan/hogan'
  },
  baseUrl: 'js'
} );

require(
  ['jquery', 'jorin', 'libs/log'],
  function( $, jorin ) {
    $(function(){
      jorin.init();
    });
  }
);