const productcontrollers=require("../controllers/product.controller")
module.exports =(app) =>{
    app.get("/api/product", productcontrollers.findAllproduct)
    app.get("/api/product/:id", productcontrollers.findproduct)
    app.post("/api/product", productcontrollers.createproduct)
    app.delete("/api/product/:id",productcontrollers.deleteproduct)
    app.put("/api/product/:id",productcontrollers.updateproduct)
} 