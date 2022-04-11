const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  typecharity: {
    type: mongoose.Types.ObjectId,
    ref: "typecharity",
  },
  timeRemain: {
    type: Number,
    min: 0,
    max: 500,
    required: true,
  },
  organization: {
    type: mongoose.Types.ObjectId,
    ref: "organization",
  },
  donated: {
    type: Number,
    default: 0,
  },
  target: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("post", PostSchema);
