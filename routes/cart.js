import express from "express"
import { getAllCarts, getCart } from "../controllers/cart.js";
const router = express.Router();


//get all carts
router.get('/',getAllCarts);
//get single cart
router.get('/:id',getCart);


// module.exports = router;
export default router;