const productcontrollers=require("../controllers/product.controller")
module.exports =(app) =>{
    app.get("/api/product", productcontrollers.findAllproduct)
    app.get("/api/product/:id", productcontrollers.findproduct)
    app.post("/api/product", productcontrollers.createproduct)
} 