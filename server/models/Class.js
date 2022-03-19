const mongoose = require("mongoose");
const { Schema } = mongoose;
// const trainerSchema = require("./Trainer");
//const { stringify } = require("nodemon/lib/utils");

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  days: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },

  trainer: {
    type: Schema.Types.ObjectId,
    ref: "Trainer",
  },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
