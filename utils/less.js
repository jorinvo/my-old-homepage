var fs = require('fs')
  , exec = require('child_process').exec
  , util = require('util')

  , sh = function(cmd) {
  exec(cmd, util.puts);
  }
  , dir = __dirname + '/../dev/public/less/'
;

fs.readdirSync(dir).forEach(function(file) {
  if (!file.match(/.+less/)) return;
  var path = dir + file;
  sh(__dirname + '/../dev/node_modules/less/bin/lessc --yui-compress ' + path + ' > ' + path.replace(/less/g, 'css'));
});