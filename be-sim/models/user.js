const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
   
    number: {
      type: String,
      required: false,
    },
   
    role: {
      type: String,
      required: true,
    },
   

   
    isClubAdmin: {
      type: Boolean,
      default: false,
    },
    points: {
      type: Number,
      required: false,
      default: 0,
    },
    eventsAttended: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
