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
  ['jquery', 'jorin', 'libs/log', 'utils/doAnimation'],
  function($, jorin) {
    $(function(){
      jorin.init();
    });
  }
);