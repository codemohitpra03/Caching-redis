import decycle from 'json-stringify-safe';
import axios from "axios"

export const getAllUsers = async (req, res)=>{
    try {
        const result = await axios('https://fakestoreapi.com/users')
        console.log(result)
        res.status(200).json(JSON.parse(decycle(result.data)))
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - Cannot get users");      
    }
    // res.send("Heloo product");
}

export const getUser = async (req,res)=>{
    try {
        const result = await axios(`https://fakestoreapi.com/users/${req.params.id}`)
        console.log(result)
        res.status(200).json(JSON.parse(decycle(result.data)))
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured - cannot get users");      
    }
}





//Query logic------for getting a particular user's cars
//Complex join query will be
//Joining the User Table and Cart Table
// This will take large computation time for large data
export const getUsersCart = async (req,res)=>{
    try {
        
        
        //-----Processing all carts of user having user id as req.params.id-----
        
        //This is not actual processing that is joining the tables and getting the result
        //Since we are using external dummy data and accessing from external API, we will 
        //just get the data normally by extracting it from response. 
        
        //We will request the whole cart data using the getAllCarts API and then extract the users cart from the recieved response.
        
        //Getting all carts
        const carts = await axios('https://fakestoreapi.com/carts')
        console.log(carts)
        const allCarts = JSON.parse(decycle(carts.data))
        
        //Filtering the cart of user with user id - req.params.id
        const userCart = allCarts.filter(cart => cart.userId.toString()===req.params.id)
        
        //Sorting the carts creaed by user on basis of date ----
        //recent cart will show up first
        userCart.sort((a,b)=>{
            return Date.parse(b.date) - Date.parse(a.date)
        })

        //Firts element of array is our response---that is the recent cart of particular user

        console.log(userCart)
        res.status(200).json(userCart[0])
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error bada wala - cannot get users");      
    }
}

