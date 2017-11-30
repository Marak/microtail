var config = require('../config');
var microcule = require('microcule');

module.exports = function (opts, cb) {
  var res = opts.res, req = opts.req;
  var $ = this.$;
  if (typeof opts.tailPath === 'undefined') {
    return res.end('invalid tail path');
  }
  var tailHandler = microcule.plugins.spawn({
    bin: 'tail',
    argv: ['-n', '500', opts.tailPath]
  });
  tailHandler(req, res, function(){
    return res.end('');
  })
};