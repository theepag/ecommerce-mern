const { query } = require("express");
const Cart = require("../models/Cart");
const { verifyToken, verfityTokenAndAuthorization, verfityTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//Create 

router.post("/", verifyToken, async (req, res) => {
    console.log(req.body, "Request body");

    try{
        const newCart = new Cart(req.body);
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    }catch(err){
        res.status(500).json(err);
    }
    
});

//Update

router.put("/:id", verifyToken, async(req, res) => {

    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});

        res.status(200).json(updatedCart);

    }catch(err){
        res.status(500).json(err);
    }
});

//Delete 

router.delete("/:id", verfityTokenAndAuthorization, async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
});


//Get User Cart 

router.get("/:id",verfityTokenAndAuthorization ,async (req, res) => {
    try{
        const cart = await Cart.find({userId: req.params.id});
        res.status(200).json(cart);

    }catch(err){
        res.status(500).json(err);
    }
});

//Get all carts

router.get("/", verfityTokenAndAdmin ,async (req, res) => {

    try{
        const carts = await Cart.find();
        res.status(200).json(carts);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router