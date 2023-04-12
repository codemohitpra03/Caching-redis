import decycle from 'json-stringify-safe';
import axios from "axios"

export const getAllCarts = async (req, res)=>{
    try {
        const result = await axios('https://fakestoreapi.com/carts')
        console.log(result)
        res.status(200).json(JSON.parse(decycle(result.data)))
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - Cannot get carts");      
    }
    // res.send("Heloo product");
}

export const getCart = async (req,res)=>{
    try {
        const result = await axios(`https://fakestoreapi.com/carts/${req.params.id}`)
        console.log(result)
        res.status(200).json(JSON.parse(decycle(result.data)))
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - cannot get cart");      
    }
}

export const getInDateRange = async (req,res)=>{
    try {
        const result = await axios(`https://fakestoreapi.com/carts?startdate=${req.params.startdate}&enddate=${req.params.enddate}`)
        console.log(result)
        res.status(200).json(JSON.parse(decycle(result.data)))
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - cannot get cart");      
    }
}