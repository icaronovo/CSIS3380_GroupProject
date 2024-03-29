const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const playerSchema = new Schema({
  id:Number,
  teamId:Number,
  name:String,
  position:String,
  DOB:String,
   contact: String,
  injuries: String,
  active: Boolean,
  medical: String,
});

// This Activitry creates the collection called players
const Player = mongoose.model("Player", playerSchema);
module.exports = Player;

