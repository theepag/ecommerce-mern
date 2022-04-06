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
    amount: {type:Number, required: true},
    address: {type: Object, required: true },
    status: {type: string, default: "pendding"}

},
{ timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);