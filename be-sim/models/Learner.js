const mongoose = require('mongoose');
const Level=require('../models/level')
const Schema = mongoose.Schema;

const learnerSchema = new Schema(
  {
   
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['M', 'F','C'],
    },
    level:{
      type: Schema.Types.ObjectId,
      ref: 'Level', // Reference to the Level model
      
    },
    user_id:{
      type: Number,
      required:true
    }
    
   
    
   
  },

 
);

const Learner = mongoose.model('Learner', learnerSchema);

module.exports = Learner;
