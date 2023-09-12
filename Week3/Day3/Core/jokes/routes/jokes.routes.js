const jokescontroller=require("../controllers/jokes.controller")
module.exports=(app)=>{
app.get("/api/alljokes",jokescontroller.getallJokes)
app.get("/api/onejokes/:id",jokescontroller.getjokebyid)
app.post("/api/addjokes",jokescontroller.createjoke)
app.put("/api/changejokes/:id",jokescontroller.updateJoke)
app.delete("/api/deljokes/:id",jokescontroller.deleteJoke) 
}