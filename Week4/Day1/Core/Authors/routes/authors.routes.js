const authorscontrollers=require("../controllers/authors.controler")
module.exports =(app) =>{
    app.get("/api/authors", authorscontrollers.findAllauthors)
    app.get("/api/authors/:id", authorscontrollers.findOneauthors)
    app.post("/api/authors", authorscontrollers.createauthors)
    app.delete("/api/authors/:id",authorscontrollers.deleteauthors)
    app.put("/api/authors/:id",authorscontrollers.updateauthors)
} 