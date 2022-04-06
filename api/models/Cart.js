const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const CartSchema = new mangoose.Schema({
    userId: { type: String, required: true},
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ],

},
{ timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);