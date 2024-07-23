// Import the express framework to use its Router functionality
import express from "express";

// Import controller functions from '../controllers/productController.js'
import {
  createProduct, // Import function to handle creating a new product
  getAllProducts, // Import function to retrieve all products
  deleteProduct, // Import function to handle deleting a product
  updateProductQuantity, // Import function to handle updating a product's quantity
  showCreateProductForm, // Import function to show the form to create a new product
  showUpdateProductForm, // Import function to show the form to update a product
} from "../controllers/productController.js";

// Create a new instance of an Express router
const router = express.Router();

// Route to show the form to create a new product
router.get("/create", showCreateProductForm);
// HTTP GET request to '/create' will invoke 'showCreateProductForm' to render the form for creating a new product

// Route to handle creating a new product
router.post("/create", createProduct);
// HTTP POST request to '/create' will invoke 'createProduct' to process the form data and create a new product

// Route to show the form to update a product identified by ':id'
router.get("/:id/update", showUpdateProductForm);
// HTTP GET request to '/:id/update' (where ':id' is a placeholder for the product ID) will invoke 'showUpdateProductForm'
// to render the form for updating the product with the specified ID

// Route to handle updating a product's quantity identified by ':id'
router.post("/:id/update_quantity", updateProductQuantity);
// HTTP POST request to '/:id/update_quantity' will invoke 'updateProductQuantity' to update the quantity of the product
// identified by the specified ':id'

// Route to handle deleting a product identified by ':id'
router.post("/:id/delete", deleteProduct);
// HTTP POST request to '/:id/delete' will invoke 'deleteProduct' to delete the product identified by the specified ':id'

// Route to retrieve all products
router.get("/", getAllProducts);
// HTTP GET request to '/' will invoke 'getAllProducts' to retrieve all products and render them

// Export the router instance to make it available for use in other parts of the application
export default router;
