'category strict';

module.exports = app => {
	const mongoose = app.mongoose;
	const { ObjectId } = mongoose.Schema.Types;
	const CategorySchema = new mongoose.Schema({
		name: {
			type: String,
			default: '',
		},
		pid: ObjectId,
		description: {
			type: String,
			default: '',
		},
		status: {
			type: Number,
			default: 1,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	});
	return mongoose.model('Category', CategorySchema);
};