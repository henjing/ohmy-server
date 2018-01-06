'video strict';

module.exports = app => {
	const mongoose = app.mongoose;
	const {
		ObjectId
	} = mongoose.Schema.Types;
	const VideoSchema = new mongoose.Schema({
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
		thumb: {
			type: String,
			default: '',
		},
		content: {
			type: String,
			default: '',
		},
		categoryId: [ObjectId],
		views: {
			type: Number,
			default: 0,
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
	return mongoose.model('Video', VideoSchema);
};