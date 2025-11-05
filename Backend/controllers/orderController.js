
//-----User Order Controllers -----

//placing orders using COD Methos
const placeOrder = async (req, res) => {

}

//placing orders using stripe method
const placeOrderStripe = async (req, res) => {
}

//placing order using Razorpay metod
const placeOrderRazorpay = async (req, res) => {
}





//-----Admin and User Order Controllers -----

// All Orders data for Admin panel
const allOrders = async (req, res) => {
}

//update order status from Admin panel
const updateSatus = async (req, res) => {
}


//User Order Data for frontend
const userOrders = async (req, res) => {
}


export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateSatus}