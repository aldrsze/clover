const Product = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getProducts };