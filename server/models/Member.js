const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const memberSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    squat: {
        type: String,
        required: false,
        trim: true
    },
    bench: {
        type: String,
        required: false,
        trim: true
    },
    deadlift: {
        type: String,
        required: false,
        trim: true
    },
    snatch: {
        type: String,
        required: false,
        trim: true
    },
    cleanAndJerk: {
        type: String,
        required: false,
        trim: true
    },
    fortyMeter:{
        type: String,
        required: false,
        trim: true
    },
    hundredMeter:{
        type: String,
        required: false,
        trim: true
    },
    mile:{
        type: String,
        required: false,
        trim: true
    },
    fiveK:{
        type: String,
        required: false,
        trim: true
    },
    tenK:{
        type: String,
        required: false,
        trim: true
    },
    marathon:{
        type: String,
        required: false,
        trim: true
    },
  });


memberSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  memberSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;