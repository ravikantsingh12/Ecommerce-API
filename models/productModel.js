// Importing mongoose from '../config/mongoose.js' for MongoDB schema modeling and management
import mongoose from "../config/mongoose.js";

// Defining a new mongoose schema for the 'products' collection in MongoDB
const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Field for product name, must be a non-empty string
  quantity: { type: Number, required: true }, // Field for product quantity, must be a number
});

// Creating a mongoose model named 'Product' based on the productSchema
const Product = mongoose.model("Product", productSchema);

// Exporting the Product model to be used in other parts of the application
export default Product;
