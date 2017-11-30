var microtail = {};
var http = require('resource-http');
var microcule = require('microcule');
var config = require('../config');

microtail.start = function (opts) {
  // merge opts onto config
  for (var p in opts) {
    config[p] = opts[p];
  }
  http.listen({
    port: 8888,
    cacheView: true,
    key: config.http.key,
    cert: config.http.cert,
    https: config.http.https,
    view: __dirname + '/../view',
    auth: {
      basicAuth: {
        username: 'admin',
        password: '123'
      }
    }
  }, function (err, app) {
    console.log('started', app.server.address());
    // Create specific routing table per each config path and log file
    // This manual mappings prevents any sort of traversal attacks since tail is operating from config whitelist
    config.tails.forEach(function (tail) {
      console.log('mapping the following route to /tail/' + tail.path);
      app.get('/tail' + tail.path, function(req, res) {
        app.view.views.tail.present({
          req: req,
          res: res,
          tailPath: tail.path
        }, function (err, html) {
          if (err) {
            throw err;
          }
          res.end(html);
        });
      })
    });
  })
};

module.exports = microtail;