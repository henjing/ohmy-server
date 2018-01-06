'use strict';

module.exports = appInfo => {
  const config = exports = {
    bodyParser: {
      jsonLimit: '500kb', // 不能再大了，再大接口实在太不合理了
    },
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1513161925163_9773',
    // 密码加密的key
    md5Key: '{{password_secret_key}}',

    // add your config here
    middleware: [],

    mongoose: {
      url: 'mongodb://127.0.0.1/ohmy',
    },
  };

  return config;
};
