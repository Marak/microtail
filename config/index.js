var config = {};
var fs = require('fs');
var path = require('path');

config.http = {
  key: fs.readFileSync(__dirname + '/../ssl/key.txt').toString(),
  cert: fs.readFileSync(__dirname + '/../ssl/crt.txt').toString(),
  https: true,
  host: '0.0.0.0',
  port: 8888,
  auth: {
    basicAuth: {
      username: 'admin',
      password: 'admin'
    }
  }
}

config.tails = [{
  name: 'log tail one',
  path: path.resolve(__dirname + "/../test/fixtures/log.txt"),
  lines: 10
},{
  name: 'log tail two',
  path: path.resolve(__dirname + "/../test/fixtures/log2.txt"),
  lines: 10
}];

module.exports = config;