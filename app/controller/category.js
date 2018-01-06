'use strict';
const Controller = require('egg').Controller;

class CategoryController extends Controller {
	async getList() {
		const condition = {
			isDeleted: false,
		};
		const categorys = await this.service.video.getList(condition);
		
		this.ctx.body = {
			data: categorys,
			status: 1,
			errmsg: 'ok',
		}
	}
}
module.exports = CategoryController;
