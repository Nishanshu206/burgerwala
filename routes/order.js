import express from 'express';
import { getAdminOrders, getMyOrders, getOrderDetails, paymentVerification, placeOrder,placeOrderOnline,processOrder } from '../controllers/orders.js';
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router=express();


// router.post("/createorder",isAuthenticated,placeOrder);

router.post("/createorder",isAuthenticated,placeOrder);

router.post('/createorderonline',isAuthenticated,placeOrderOnline);

router.post("/paymentverification", isAuthenticated, paymentVerification);

router.get("/myorders",isAuthenticated,getMyOrders)

router.get('/order/:id',isAuthenticated,getOrderDetails)


//Add admin middleware



router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

export default router;


