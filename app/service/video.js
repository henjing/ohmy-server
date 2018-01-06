'use strict';
const Service = require('egg').Service;

class VideoService extends Service {
	create(data) {
		return this.ctx.model.Video(data).save();
	}
	
	getById(id) {
		return this.ctx.model.Video.findOne({
			_id: id,
			isDeleted: false,
		}, {
			isDeleted: 0,
			__v: 0
		});
	}
	
	getList(condition, page, limit) {
		return this.ctx.model.Video
			.find(condition, { isDeleted: 0, __v: 0 })
			.skip((page - 1) * limit)
			.limit(limit)
	}
	
	remove(id) {
		return this.ctx.model.findOneAndUpdate({
			_id: id,
			isDeleted: false
		}, {
			updatedAt: Date.now(),
			isDeleted: true,
		});
	}
}
module.exports = VideoService;
