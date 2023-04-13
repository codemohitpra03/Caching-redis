import decycle from 'json-stringify-safe';
import axios from "axios"
import { getOrSetCache } from './cache.js';

export const getAllCarts = async (req, res)=>{
    try {
        const carts = await getOrSetCache(`carts`,async ()=>{
            const result = await axios('https://fakestoreapi.com/carts')
            // console.log(result)
            return result;
        })
        res.status(200).json(carts)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - Cannot get carts");      
    }
    // res.send("Heloo product");
}

export const getCart = async (req,res)=>{
    try {
        
        const cart = await getOrSetCache(`carts?id=${req.params.id}`,async ()=>{
            const result = await axios(`https://fakestoreapi.com/carts/${req.params.id}`)
            console.log(result)
            return result
        })
        res.status(200).json(cart)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - cannot get cart");      
    }
}

