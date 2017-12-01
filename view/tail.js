var config = require('../config');
var microcule = require('microcule');

module.exports = function (opts, cb) {
  var res = opts.res, req = opts.req;
  var $ = this.$;
  if (typeof opts.tailPath === 'undefined') {
    return res.end('invalid tail path');
  }
  if (process.platform === "darwin") {
    //
    // On MacOS / Unix systems, tail command comes with `-r` switch for reversing order of results
    //
    var tailHandler = microcule.plugins.spawn({
      bin: 'tail',
      argv: ['-r', '-n', '500', opts.tailPath],
      redirectStderrToStdout: true
    });
  } else {
    //
    // For non-unix systems, assume linux and pipe to `tac` command to reverse results
    //
    var tailHandler = microcule.plugins.spawn({
      bin: 'sh',
      argv: ['-c', 'tail -n 500 ' + opts.tailPath + ' | tac'],
      redirectStderrToStdout: true
    });
  }
  tailHandler(req, res);
};