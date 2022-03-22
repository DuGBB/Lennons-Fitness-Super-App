const mongoose = require("mongoose");
const { Schema } = mongoose;
// const trainerSchema = require("./Trainer");
//const { stringify } = require("nodemon/lib/utils");

const standingSchema = new Schema(
  {
    total: {
      type: String,
      required: true,
      trim: true,
    },

    member: {
      type: Schema.Types.ObjectId,
      ref: "Member",
    },

    activity: {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  },
  {
    timestamps: {
      createdAt: "statDate",
    },
  }
);

const Standing = mongoose.model("Standing", standingSchema);

module.exports = Standing;
