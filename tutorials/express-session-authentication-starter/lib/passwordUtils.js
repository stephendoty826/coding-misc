const crypto = require('crypto');

// TODO
function genPassword(password) {
  var salt = crypto.randomBytes(32).toString("hex");
  var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

  return {
    salt,
    hash
  }
}

function validPassword(password, hash, salt) {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex")
  return hash = hashVerify
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;