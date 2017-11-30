var config = require('../config');

module.exports = function (opts, cb) {
  var res = opts.res;
  var $ = this.$;
  config.tails.forEach(function(tail){
    $('.tails').append('<li><a href="/tail' + tail.path +'">' + tail.name + '</a></li>')
  });
  cb(null, $.html());
};