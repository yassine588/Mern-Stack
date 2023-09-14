const jokescontroller=require("../controllers/jokes.controller")
module.exports=(app)=>{
app.get("/api/jokes",jokescontroller.getallJokes)
app.get("/api/jokes/:id",jokescontroller.getjokebyid)
app.post("/api/jokes",jokescontroller.createjoke)
app.put("/api/jokes/:id",jokescontroller.updateJoke)
app.delete("/api/jokes/:id",jokescontroller.deleteJoke) 
}