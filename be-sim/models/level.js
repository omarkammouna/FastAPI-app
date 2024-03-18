const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const levelSchema = new Schema(
  {
   
    education_level: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
      
    },
    is_rtl:{
        type:Boolean,
        required:false,

    },
    is_hidden:{
        type:Boolean,
        required:false
    }
   
    
   
  },

  
);

const Level = mongoose.model('Level', levelSchema);

module.exports = Level;
