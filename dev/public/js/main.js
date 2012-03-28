require.config( {
  paths: {
    text: 'libs/require/text',
    order: "libs/require/order",
    jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
    modernizr: 'libs/modernizr-2.5.3',
    underscore: 'libs/underscore.min',
    backbone: 'libs/backbone.min',
    hogan: 'libs/hogan.min'
  },
  baseUrl: '/js'
} );

require(
  ['jquery', 'jorin', 'modernizr', 'libs/log', 'utils/doAnimation_new'],
  function( $, jorin ) {
    $(function(){
      jorin.init();
    });
  }
);