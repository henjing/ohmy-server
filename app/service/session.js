'use strict';

const Service = require('egg').Service;

class SessionService extends Service {
  setUser(user) {
    this.ctx.session.user = JSON.stringify(user);
  }

  getUser() {
    try {
      return JSON.parse(this.ctx.session.user);
    } catch (e) {
      return null;
    }
  }

  clearUser() {
    this.ctx.session.user = null;
  }
}
module.exports = SessionService;
