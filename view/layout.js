module.exports = function (opts, cb) {
  var res = opts.res, req = opts.req;
  var $ = this.$;
  if (!req.isAuthenticated()) { 
    return res.redirect('/auth');
  }  
  cb(null, $.html());
};