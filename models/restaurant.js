const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }
});

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String, required: true },
    rating: { type: Number },
    menu: [menuSchema]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;