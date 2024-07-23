// Importing the Product model from '../models/productModel.js' to interact with the database
import Product from "../models/productModel.js";

// Show the form to create a new product
export const showCreateProductForm = (req, res) => {
  res.render("createProduct"); // Renders a form for creating a new product
};

// Show the form to update a product's quantity
export const showUpdateProductForm = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find a product by ID from the database
    if (!product) {
      return res.status(404).send("Product not found"); // If product not found, return 404 error
    }
    res.render("updateProduct", { product }); // Render a form to update the found product's quantity
  } catch (error) {
    res.status(500).send(error.message); // Server error if database operation fails
  }
};

// Handle creating a new product
export const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body; // Extract name and quantity from request body
    const newProduct = new Product({ name, quantity }); // Create a new Product instance
    await newProduct.save(); // Save the new product to the database
    res.redirect("/products?message=Item added successfully"); // Redirect to products page with success message
  } catch (error) {
    res.status(400).send(error.message); // Client error if request is malformed or database operation fails
  }
};

// Handle updating a product's quantity
export const updateProductQuantity = async (req, res) => {
  try {
    const { quantity } = req.body; // Extract quantity from request body
    const productId = req.params.id; // Extract product ID from request parameters

    if (isNaN(quantity)) {
      return res.status(400).send("Invalid quantity provided"); // Return error if quantity is not a number
    }

    let product = await Product.findById(productId); // Find product by ID
    if (!product) {
      return res.status(404).send("Product not found"); // If product not found, return 404 error
    }

    product.quantity = quantity; // Update product's quantity
    await product.save(); // Save updated product to the database

    res.redirect("/products?message=Item updated successfully"); // Redirect to products page with success message
  } catch (error) {
    res.status(500).send(error.message); // Server error if database operation fails
  }
};

// Handle deleting a product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id); // Find and delete product by ID
    if (!deletedProduct) {
      return res.status(404).send("Product not found"); // If product not found, return 404 error
    }
    res.redirect("/products?message=Item deleted successfully"); // Redirect to products page with success message
  } catch (error) {
    res.status(500).send(error.message); // Server error if database operation fails
  }
};

// Retrieve all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Retrieve all products from the database
    const message = req.query.message || null; // Get optional message query parameter
    res.render("products", { products, message }); // Render products page with products and optional message
  } catch (error) {
    res.status(500).send(error.message); // Server error if database operation fails
  }
};
