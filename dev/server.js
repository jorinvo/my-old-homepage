var fs = require('fs'),
  express = require('express'),
  app = express(),
  views = __dirname + '/views';

app.configure(function() {

  app.set('views', views);
  app.set('view options', {
    layout: false
  });
  app.engine('html', require('ejs').renderFile);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

});

var port = process.env.PORT || 3000;
app.listen(port);
app.get('/', function(req, res) {
  var hash;
  if (req.query.page) hash = true;
  else hash = false;
  var page = req.query.page;
  res.render('index.html', {
    page: page,
    hash: hash
  });
});

app.get('/:page', function(req, res) {
  var page = req.params.page;
  res.redirect('/?page=' + page);
});

app.get('/blog/:post', function(req, res) {
  var page = 'blog/' + req.params.post;
  res.redirect('/?page=' + page);
});

app.get('/comments/:comment', function(req, res) {
  var title = decodeURIComponent(req.query.title);
  res.render('comments.html', {
    title: title
  });
});

app.get('/work/:project', function(req, res) {
  var page = 'work/' + req.params.project;
  res.redirect('/?page=' + page);
});

console.log("Express server listening on port %d in %s mode", port, app.settings.env);