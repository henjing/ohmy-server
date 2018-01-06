'use strict';

// had enabled by egg
// exports.static = true;
exports.security = false;

exports.validate = {
  package: 'egg-validate',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
