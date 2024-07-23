// Import the express framework to create and configure the server
import express from "express";

// Import mongoose from './config/mongoose.js' for MongoDB connection and setup
import mongoose from "./config/mongoose.js";

// Import productRoutes from './routes/productRoutes.js' to define routes related to products
import productRoutes from "./routes/productRoutes.js";

// Import dotenv for loading environment variables from a .env file
import dotenv from "dotenv";

// Load environment variables from a .env file into process.env
dotenv.config();

// Create an instance of Express application
const app = express();

// Define the port number for the server to listen on, defaulting to 3000 if not specified in environment
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine for rendering dynamic content
app.set("view engine", "ejs");

// Set the directory where views (EJS templates) are located
app.set("views", "./views");

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: true }));

// Mount productRoutes under the '/products' prefix
app.use("/products", productRoutes);
// This means that all routes defined in productRoutes will be prefixed with '/products'

// Start the server, listening on the specified PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
