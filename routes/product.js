import express from "express"
import { getAllProducts, getProduct } from "../controllers/product.js";

const router = express.Router();

//get all products
router.get('/',getAllProducts);
//get single product
router.get('/:id',getProduct);


export default router;