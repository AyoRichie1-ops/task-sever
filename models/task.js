const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
      unique: true,
    },
    description: {
      type: "string",
      required: true,
    },
    tag: {
      type: "string",
      required: true,
      enum: ["urgent", "important"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
