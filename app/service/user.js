'use strict';
/*
 * 用户模块的数据操作
 */
const Service = require('egg').Service;

class UserService extends Service {
  async create(user) {
    return (await this.ctx.model.User(user).save()).toObject();
  }

  findOne(data) {
    return this.ctx.model.User.findOne(data);
  }

  find() {
    return this.ctx.model.User.find();
  }
}
module.exports = UserService;
