const mongoose = require("mongoose");
const { Schema } = mongoose;
// const trainerSchema = require("./Trainer");
//const { stringify } = require("nodemon/lib/utils");

const classRosterSchema = new Schema({
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },

  member: {
    type: Schema.Types.ObjectId,
    ref: "Member",
  },
});

const ClassRoster = mongoose.model("ClassRoster", classRosterSchema);

module.exports = ClassRoster;
