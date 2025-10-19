import express from 'express'
import { addToCart, getuserCart, updateCart } from '../controllers/cartControllers.js'
import authUser from '../middleware/auth.js'


const cartRouter = express.Router()

cartRouter.post('/get', authUser, getuserCart)
cartRouter.post('/add', authUser, addToCart)
cartRouter.post('/update', authUser, updateCart)


export default cartRouter