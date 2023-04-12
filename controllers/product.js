import decycle from 'json-stringify-safe';
import axios from "axios"

export const getAllProducts = async (req, res)=>{
    try {
        const result = await axios('https://fakestoreapi.com/products')
        console.log(result)
        res.status(200).json(JSON.parse(decycle(result.data)))
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - Cannot get products");      
    }
    // res.send("Heloo product");
}

export const getProduct = async (req,res)=>{
    try {
        const result = await axios(`https://fakestoreapi.com/products/${req.params.id}`)
        console.log(result)
        res.status(200).json(JSON.parse(decycle(result.data)))
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - cannot get product");      
    }
}

