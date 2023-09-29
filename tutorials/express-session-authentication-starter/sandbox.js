// taken from passportjs github...
// req.logout = 
// req.logOut = function(options, done) {
//   if (typeof options == 'function') {
//     done = options;
//     options = {};
//   }
//   options = options || {};
  
//   var property = this._userProperty || 'user';
  
//   this[property] = null;
//   if (this._sessionManager) {
//     if (typeof done != 'function') { throw new Error('req#logout requires a callback function'); }
    
//     this._sessionManager.logOut(this, options, done);
//   } else {
//     done && done();
//   }
// };
