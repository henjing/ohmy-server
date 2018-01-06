'use strict';
const Controller = require('egg').Controller;

class VideoController extends Controller {
	async getList() {
		const { page = 1, limit = 10 } = this.ctx.query;
		const condition = {
			isDeleted: false,
		};
		const videoVideoControllers = await this.service.video.getList(condition, page, limit);
		
		this.ctx.body = {
			data: videos,
			status: 1,
			errmsg: 'ok',
		}
	}
}
module.exports = VideoController;
