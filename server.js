var fs      = require('fs')
,   express = require('express')
// ,   less    = require('less')
,   app     = express.createServer()
,   views   = __dirname + '/views'
;

app.configure(function() {

  app.set('views', views);
  app.set('view options', {layout: false});
  app.register('.html', require('ejs'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  // app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));

});

var port = process.env.PORT || 3000;
app.listen(port);
app.get('/', function(req, res) {
  var page = req.query.page || 'about';
  res.render('index.html', { page: page });
});

app.get('/:page', function(req, res) {
  var page = req.params.page;
  res.redirect('/?page='+ page);
});

app.get('/blog/:post', function(req, res) {
  var page = 'blog/' + req.params.post;
  res.redirect('/?page='+ page);
});

app.get('/comments/:comment', function(req, res) {
  res.render('comments.html');
});

console.log(
  "Express server listening on port %d in %s mode",
  app.address().port,
  app.settings.env
);
