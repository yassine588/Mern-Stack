const express = require("express")
const app = express()
const cors=require("cors")
app.use(cors({origin:"http://localhost:3000"}),express.json(),express.urlencoded({extended: true}))
require("dotenv").config()
require("./config/mongoose.config")
require("./routes/product.routes")(app)
const port =process.env.PORT
app.listen(port,()=>{
    console.log(`>>>>> server is running on Port ${port}😊😊`)
})