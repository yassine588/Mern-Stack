const express=require("express")
const app=express()
app.use(express.json(),express.urlencoded({extended: true}))
require("./config/mongoose.config")
require("dotenv").config()
const port=process.env.PORT

const studentRoutes = require("./routes/student.routes")
studentRoutes(app)
app.listen(port,()=>{ console.log(`server is runing on port :${port}`) })