'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const { ObjectId } = mongoose.Schema.Types;
  const UserSchema = new mongoose.Schema({
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      default: '',
    },
    avatar: {
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
  return mongoose.model('User', UserSchema);
};
