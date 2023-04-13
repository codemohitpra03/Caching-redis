import express from "express"
import productRoute from "./routes/product.js"
import cartRoute from "./routes/cart.js"
import userRoute from "./routes/user.js"
const app = express()
const port = 8800


app.use(express.json())
app.use(express.static('home'))

app.get('/', (req, res) => {
    res.send('Hello World!')
    
})
app.use('/api/product', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/user',userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})