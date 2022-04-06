const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const ProductSchema = new mangoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true },
    price: { type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},


},
{ timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);