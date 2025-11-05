const express = require("express");
const cors = require("cors");
require('dotenv').config();
const connectDB = require("./config/mongodb.js");
const connectCloudinary = require("./config/cloudinary.js");
const userRouter = require("./routes/userRoute.js");
const productRouter = require("./routes/productRoute.js");
const cartRouter = require("./routes/cartRoute.js");
const orderRouter = require("./routes/orderRoute.js");

const app = express();

// Connect to MongoDB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/", (req, res) => {
    res.status(200).json({ message: "API is running successfully" });
});

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

module.exports = app;
