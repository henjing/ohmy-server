'use strict';

const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {

  /*
   * 注册
   */
  it('should POST /api/users', async () => {
    const res1 = await app.httpRequest()
      .post('/api/users')
      .send({
        phone: '15878193547',
        password: '000000',
        email: '578951992@qq.com',
      })
      .type('form')
      .expect(200);
    assert(res1);

    const res2 = await app.httpRequest().post('/api/users')
      .send({
        phone: '15878193548',
        password: '123456',
        email: '1726739443@qq.com',
      })
      .type('form')
      .expect(200);
    assert(res2);
  });

  /*
    * 登陆
    */
  it('should POST /api/login', async () => {
    await app.httpRequest().post('/api/login')
      .send({
        loginName: '',
        password: '',
      })
      .type('form')
      .expect({
        status: 0,
        message: '请输入账号',
      })
      .expect(200);

    await app.httpRequest().post('/api/login')
      .send({
        loginName: '15878193544',
        password: '',
      })
      .type('form')
      .expect({
        status: 0,
        message: '请输入密码',
      })
      .expect(200);

    await app.httpRequest().post('/api/login')
      .send({
        loginName: '15878193544',
        password: '000000',
      })
      .type('form')
      .expect({
        status: 0,
        message: '该账号未注册',
      })
      .expect(200);

    await app.httpRequest().post('/api/login')
      .send({
        loginName: '15878193546',
        password: '000001',
      })
      .type('form')
      .expect({
        status: 0,
        message: '密码错误',
      })
      .expect(200);

    await app.httpRequest().post('/api/login')
      .send({
        loginName: '15878193546',
        password: '000000',
      })
      .type('form')
      .expect(200);
  });

  /*
   * 获取某个用户
   */
  it('should GET /api/users/:userId', async () => {
    //  await app.httpRequest()
    //    .get('/api/users/123')
    //    .expect({ status: 0, message: '用户不存在' })
    //    .expect(200);

    const user = await app.httpRequest()
      .get('/api/users/5a322c9bb8af9cdfca3c8532')
      .expect(200);
    assert(user.body);
  });

  /*
   * 查看用户登录状态
   */
  it('should GET /api/isLogin', () => {
    return app.httpRequest()
      .get('/api/isLogin')
      .expect(200)
      .then(res => console.log(res.body));
  });

  /*
   * 退出登陆
   */
// it('should GET /api/logout', () => {
//  return app.httpRequest()
//    .get('/api/logout')
//    .expect({
//      status: 1,
//      message: '您已退出登陆',
//    })
//    .expect(200)
//    .then(res => { console.log(res); });
// });

});
