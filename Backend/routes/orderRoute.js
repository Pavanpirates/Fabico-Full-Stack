import express from 'express';
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateSatus} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import userAuth from '../middleware/auth.js';


const router = express.Router();

// Admin features
orderRouter.post('/list',adminAuth, allOrders);
orderRouter.post('/satus',adminAuth, updateSatus);


// User features
orderRouter.post('/place',userAuth, placeOrder);
orderRouter.post('/stripe',userAuth, placeOrderStripe);
orderRouter.post('/razorpay',userAuth, placeOrderRazorpay);

// User features
orderRouter.post('/userorders',userAuth, userOrders);

export default orderRouter;