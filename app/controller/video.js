'use strict';
const Controller = require('egg').Controller;

class VideoController extends Controller {
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
		const { page = 1, limit = 10 } = this.ctx.query;
		const condition = {
			isDeleted: false,
		};
		const videos = await this.service.video.getList(condition, page, limit);
		
		this.ctx.body = {
			data: videos,
			status: 1,
			errmsg: 'ok',
		}
	}
}
module.exports = VideoController;
