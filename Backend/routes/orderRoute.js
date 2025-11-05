import express from 'express';
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateSatus
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import userAuth from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateSatus);
orderRouter.post('/place', userAuth, placeOrder);
orderRouter.post('/stripe', userAuth, placeOrderStripe);
orderRouter.post('/razorpay', userAuth, placeOrderRazorpay);
orderRouter.post('/userorders', userAuth, userOrders);

export default orderRouter;
