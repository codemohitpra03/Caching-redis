import decycle from 'json-stringify-safe';
import axios from "axios"
import Redis from "redis"
import { getOrSetCache } from './cache.js';




export const getAllProducts = async (req, res)=>{
    try {
        const products = await getOrSetCache("products",async ()=>{
            const result = await axios('https://fakestoreapi.com/products')
            return result;
        })

        res.status(200).json(products)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - Cannot get products");      
    }
    // res.send("Heloo product");
}

export const getProduct = async (req,res)=>{
    try {

        const product = await getOrSetCache(`products?id=${req.params.id}`,async ()=>{
            const result = await axios('https://fakestoreapi.com/products')
            return result;
        })
        res.status(200).json(product)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - cannot get product");      
    }
}



