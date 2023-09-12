const jokes=require("../models/jokes.model")
module.exports.getallJokes=(req,res)=>{
jokes.find()
.then(allJokes=>{
    console.log(allJokes)
    res.json({allJokes})
})
.catch(err=>{res.json({message:"wait a minute"})})
}
module.exports.getjokebyid=(req,res)=>{
    jokes.find({_id:req.params.id})
    .then(
       onejoke=>{
        console.log(onejoke)
        res.json({onejoke})
       } 
    )
    .catch(err=>{res.json({erreur:"erreur 404"})})
}
module.exports.createjoke=(req,res)=>{
jokes.create(req.body)
.then(
    newjoke=>{
        res.json({newjoke})
    }
)
.catch(err=>{console.log("noo new joke")})
}
module.exports.updateJoke=(req,res)=>{
    jokes.updateOne({_id:req.params.id},req.body)
    .then(newupdate=>{
        res.json(newupdate)
    })
    .catch(console.log("dont update me"))
}
module.exports.deleteJoke=(req,res)=>{
jokes.deleteOne({_id:req.params.id})
.then(deleteone=>{
    res.json(deleteone)
})
.catch(err=>{console.log(err)})
}
