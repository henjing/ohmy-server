'use strict';

const Controller = require('egg').Controller;
const md5 = require('blueimp-md5');

class UserController extends Controller {
  /*
   * 用户注册
   */
  async create() {
    const data = this.ctx.request.body;
    data.password = md5(data.password, this.config.md5Key);
    // 查询改账号是否已经存在
    const user = await this.service.user.findOne({ phone: data.phone });
    console.log(user);
    if (user) {
      console.log('用户已存在');
      this.ctx.body = {
        status: 0,
        message: '该手机号已注册',
      };
      return;
    }
    console.log('开始新建用户');
    const result = await this.service.user.create(data);
    console.log('注册结果');
    console.log(result);

    this.ctx.body = {
      data: result,
      status: 1,
      message: '注册成功',
    };
  }
  /*
   * 更新用户
   */
  async update() {
    this.ctx.body = '更新用户';
  }

  /*
   * 删除用户
   */
  async remove() {
    this.ctx.body = '删除用户';
  }

  /*
   * 根据id获取用户
   */
  async readOne() {
    const { userId } = this.ctx.params;
    const user = await this.service.user.findOne({ _id: userId });
    console.log(user);
    if (!user) {
      this.ctx.body = {
        status: 0,
        message: '用户不存在',
      };
      return;
    }
    this.ctx.body = {
      status: 1,
      data: user,
    };
  }

  /*
   * 获取用户
   */
  async read() {
    const users = await this.service.user.find();
    console.log(users);
    this.ctx.body = {
      status: 1,
      data: users,
    };
  }

  /*
   * 用户登录
   */
  async login() {
    const { ctx, config, service } = this;
    console.log('获取请求体内容');
    console.log(ctx.request.body);
    const { loginName, password } = ctx.request.body;
    if (!loginName) {
      ctx.body = {
        status: 0,
        message: '请输入账号',
      };
      return;
    }
    if (!password) {
      ctx.body = {
        status: 0,
        message: '请输入密码',
      };
      return;
    }
    // 参数校验通过
    const result = await service.user.findOne({ phone: loginName });
    if (!result) {
      ctx.body = {
        status: 0,
        message: '该账号未注册',
      };
      return;
    }
    if (result.password !== md5(password, config.md5Key)) {
      ctx.body = {
        status: 0,
        message: '密码错误',
      };
      return;
    }

    // 账号和密码存在，做登陆
    delete result.password;
    delete result.__v;
    console.log(result);
    service.session.setUser(result);
    ctx.body = {
      data: result,
      status: 1,
      message: '登陆成功',
    };
  }

  /*
   * 退出登陆
   */
  async logout() {
    this.service.session.clearUser();
    this.ctx.body = {
      status: 1,
      message: '您已退出登陆',
    };
  }

  /*
   * 查看用户登录状态
   */
  async isLogin() {
    const su = this.service.session.getUser();
    if (!su) {
      this.ctx.body = { status: 0, message: '登陆已过期' };
    } else {
      this.ctx.body = {
        status: 1,
        data: su,
      };
    }
  }
}
module.exports = UserController;
