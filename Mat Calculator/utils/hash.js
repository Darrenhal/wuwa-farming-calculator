let crypto = require('crypto');

function genRandomString(length) {
  return crypto.randomBytes(Math.ceil(length/2))
  .toString('hex')
  .slice(0,length);
};

function sha512(password, salt) {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  let value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value
  };
};

export function saltHashPassword(userpassword, salt) {
  if (salt === null) {
    let salt = genRandomString(128);
  }
  return sha512(userpassword, salt);
}