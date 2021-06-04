const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  pollUser:{
    type:String
  },
  pollQuestion:{
    type:String
  },
  pollFriendList:{
    type:String
  },
  images:[{type:String}],
  vote1:[{type:String}],
  vote2:[{type:String}],
  active:{
    type:Boolean
  }
})

module.exports = mongoose.model("poll",pollSchema)
