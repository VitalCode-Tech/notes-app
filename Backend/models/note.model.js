const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  isArchived: { type: Boolean, default: false },
  userId: { type: String, required: true },
  createdOn: { type: Date, default: new Date().now },
});

module.exports = mongoose.model("Note", noteSchema);
