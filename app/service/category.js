'use strict';
const Service = require('egg').Service;

class CategoryService extends Service {
	create(data) {
		return this.ctx.model.Category(data).save();
	}
	
	remove(id) {
		return this.ctx.model.Category.findOneAndUpdate({
			_id: id,
			isDeleted: false,
		}, {
			updatedAt: Date.now(),
			isDeleted: true,
		});
	}
	
	getList(condition) {
		return this.ctx.model.Category.find(condition, { isDeleted: 0, __v: 0 });
	}
}
module.exports = CategoryService;