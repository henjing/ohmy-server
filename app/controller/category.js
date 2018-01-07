'use strict';
const Controller = require('egg').Controller;

class CategoryController extends Controller {
	async create() {
		this.ctx.body = '创建';
	}
	
	async remove() {
		this.ctx.body = '删除';
	}
	
	async update() {
		this.ctx.body = '更新';
	}
	
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
