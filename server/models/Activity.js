const mongoose = require("mongoose");
const { Schema } = mongoose;
// const trainerSchema = require("./Trainer");
//const { stringify } = require("nodemon/lib/utils");

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  units: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
