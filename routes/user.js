import express from "express"
import { getAllUsers, getUser, getUsersCart } from "../controllers/user.js";

const router = express.Router();

//get all users
router.get('/',getAllUsers);
//get single product
router.get('/:id',getUser);

//get user's particular cart
router.get('/cart/:id',getUsersCart)


export default router;