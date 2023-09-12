const student=require("../modeles/student.model")

module.exports.CreateStudent=(req,res)=>{
    student.create(req.body)
    .then(NewStudent =>{
        console.log("new student:",NewStudent)
        res.json(NewStudent)
    })
    .catch(err =>{
        console.log(err)
        res.json({Error:err})
    })
}
module.exports.findAllstudents=(req,res)=>{
 student.find()
 .then(showstudent=>{
    console.log(showstudent)
    res.json({showstudent})
 })
 .catch(err =>{res.json({ message:"wait a minute" })})
}
module.exports.DeleteStudent=(req,res)=>{
student.deleteOne({_id:req.params.id})
.then(Deletestudent=>{
    console.log(Deletestudent)
    res.json({Deletestudent})
})
.catch(err =>{res.json({message:"erreur 404"})})
}