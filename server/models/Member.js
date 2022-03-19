const mongoose = require("mongoose");
const { Schema } = mongoose;
//const bcrypt = require("bcrypt");
//const { stringify } = require("nodemon/lib/utils");

// const ISODate = new Date().toISOString();

const memberSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    age: {
      type: String,
      required: true,
      trim: true,
    },

    // joinDate: {
    //   //unsure of this format
    //   createdAt: ISODate(),
    // },
    // squat: {
    //   type: String,
    //   required: false,
    //   trim: true,
    // },
    // bench: {
    //   type: String,
    //   required: false,
    //   trim: true,
    // },
    // deadlift: {
    //   type: String,
    //   required: false,
    //   trim: true,
    // },
    // fiveK: {
    //   type: String,
    //   required: false,
    //   trim: true,
    // },
    // tenK: {
    //   type: String,
    //   required: false,
    //   trim: true,
    // },
  },
  {
    timestamps: {
      createdAt: "joinDate",
    },
  }
);

memberSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

memberSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
