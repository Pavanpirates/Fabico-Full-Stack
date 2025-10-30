import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

// App config
const app = express();

connectDB();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API working ✅ on Vercel");
});

// ❌ Remove app.listen()
// ✅ Instead export the app
export default app;
