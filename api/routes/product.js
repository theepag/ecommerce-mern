const { query } = require("express");
const Product = require("../models/Product");
const { verifyToken, verfityTokenAndAuthorization, verfityTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//Create 

router.post("/", verfityTokenAndAdmin, async (req, res) => {

    try{
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    }catch(err){
        res.status(500).json(err);
    }
    
});

//Update

router.put("/:id", verfityTokenAndAdmin, async(req, res) => {

    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});

        res.status(200).json(updatedProduct);

    }catch(err){
        res.status(500).json(err);
    }
});

//Delete 

router.delete("/:id", verfityTokenAndAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
});


//Get Product 

router.get("/:id", verifyToken ,async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    }catch(err){
        res.status(500).json(err);
    }
});

//Get all product

router.get("/", verifyToken,async (req, res) => {
    const qcategory = req.query.category;
    console.log(query, "Val of query");

    try{
        const products = qcategory ? await Product.find({category : qcategory}) : await Product.find();
        res.status(200).json(products);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router