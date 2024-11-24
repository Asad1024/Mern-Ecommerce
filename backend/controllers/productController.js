import Products from "../modals/productSchema.js";

// @desc     Fetch All Products
// @route    GET /api/products
// @access   Public
const getAllProducts = (async (req, res) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server Error: Unable to fetch products" });
    }
});

// @desc     Fetch Single Product
// @route    GET /api/products/:id
// @access   Public
const getSingleProduct = (async (req, res) => {
    try {
        const productItem = await Products.findById(req.params.id);

        if (!productItem) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(productItem);
    } catch (error) {
        console.error("Error fetching single product:", error);
        res.status(500).json({ message: "Server Error: Unable to fetch product" });
    }
});

export { getAllProducts, getSingleProduct };