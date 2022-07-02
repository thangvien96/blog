const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Courses = new Schema({
  name: { type: String, default: '' },
  desciption: { type: String, default: '' },
  image: { type: String, default: '' },
  createdAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now}
});