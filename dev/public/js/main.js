require.config( {
  paths: {
    text: 'libs/require/text',
    jquery: ['http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min', 'libs/jquery'],
    modernizr: 'libs/modernizr',
    underscore: 'libs/underscore.min',
    backbone: 'libs/backbone.min',
    hogan: 'libs/hogan.min'
  },
  baseUrl: '/js'
} );

require(
  ['jquery', 'jorin', 'modernizr', 'libs/log'],
  function( $, jorin ) {
    $(function(){
      require(['utils/doAnimation_' + ( Modernizr.cssanimations ? 'new' : 'old' )], function() {
        jorin.init();
      });
    });
  }
);