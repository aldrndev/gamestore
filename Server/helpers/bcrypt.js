const bcrypt = require('bcryptjs');

const hasPwd = (password) => {
  return bcrypt.hashSync(password);
};

const checkPwd = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = {
  hasPwd,
  checkPwd,
};
