var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beerSchema = new Schema({
  name: { type: String },
  style: { type: String },
  rating: { type: [Number] },
  image_url: { type: String },
  abv: { type: Number },
  reviews: [reviewSchema]
});

var reviewSchema = new Schema({
  name: String,
  text: String
});

var Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;