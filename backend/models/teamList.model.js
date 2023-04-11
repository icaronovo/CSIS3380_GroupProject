const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const teamSchema = new Schema({
  id:Number,
  name:String,
  description:String,
  location:String,
  days:String,
  geolat: Schema.Types.Decimal128,
  geolon: Schema.Types.Decimal128,
  logo:String,
  coachName:String,
  coachInfo: String,
  email: String,
  open: String
});

// This Activitry creates the collection called activitimodels
const Team = mongoose.model("Team", teamSchema);
module.exports = Team;

