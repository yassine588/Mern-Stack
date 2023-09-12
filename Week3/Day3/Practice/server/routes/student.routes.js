const StudentController=require("../controller/student.controller")
console.log(StudentController)
module.exports=(app)=>{
app.post("/api/NewStudent",StudentController.CreateStudent)
app.get("/api/student",StudentController.findAllstudents)
app.delete("/api/Deletestudent/:id",StudentController.DeleteStudent)
}