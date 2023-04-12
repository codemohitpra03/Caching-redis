import express from "express"
import { getAllCarts, getCart, getInDateRange } from "../controllers/cart.js";
const router = express.Router();


//get all carts
router.get('/',getAllCarts);
//get single cart
router.get('/:id',getCart);
//get carts in date range
router.get('/:startdate/:enddate',getInDateRange);

// module.exports = router;
export default router;