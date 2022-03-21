const mongoose = require("mongoose");
const { Schema } = mongoose;
//const bcrypt = require('bcrypt');
const { stringify } = require("nodemon/lib/utils");

const trainerSchema = new Schema(
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
  },
  {
    timestamps: {
      createdAt: "joinDate",
    },
  }
);

trainerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

trainerSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
