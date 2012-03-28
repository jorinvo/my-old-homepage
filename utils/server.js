var fs = require('fs')
  , exec = require('child_process').exec
  , util = require('util')

  , sh = function(cmd) {
  exec(cmd, util.puts);
};

sh('cp public')
sh(__dirname + '/node_modules/requirejs/bin/r.js -o build.js');

require('./less');