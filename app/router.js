'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // user
  router.post('/api/login', controller.user.login);
  router.get('/api/logout', controller.user.logout);
  router.get('/api/isLogin', controller.user.isLogin);

  router.post('/api/users', controller.user.create);
  router.put('/api/users', controller.user.update);
  router.delete('/api/users', controller.user.remove);
  router.get('/api/users', controller.user.read);
  router.get('/api/users/:userId', controller.user.readOne);
  
  // category
  router.post('/api/categorys', controller.category.create);
  router.delete('/api/categorys', controller.category.remove);
	router.put('/api/categorys', controller.category.update);
  router.get('/api/categorys', controller.category.getList);
  
  
  // video
  router.post('/api/videos', controller.video.create);
  router.delete('/api/videos', controller.video.remove);
	router.put('/api/videos', controller.video.update);
  router.get('/api/videos', controller.video.getList);
  
};
