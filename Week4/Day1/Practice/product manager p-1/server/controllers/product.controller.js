const product=require("../models/product.model")
module.exports.createproduct=(req,res)=>{
product.create(req.body)
.then(
    newproduct=>{
        res.json(newproduct)
    }
)
.catch(err=>{console.log("erreur 404")})
}
module.exports.updateproduct=(req,res)=>{
    product.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(newupdate=>{
        res.json(newupdate)
    })
    .catch(err=>{console.log("wait a minute")})
}
module.exports.deleteproduct=(req,res)=>{
product.findByIdAndDelete({_id:req.params.id})
.then(delproduct=>{
    res.json(delproduct)
})
.catch(err=>{console.log(err)})
}
module.exports.findAllproduct=(req,res)=>{
product.find()
.then(allproduct=>{
    res.json(allproduct)
})
.catch(err=>{console.log(err)})
}
module.exports.findproduct=(req,res)=>{
    product.findOne({_id:req.params.id})
    .then(myproduct=>{
        res.json(myproduct)
    })
    .catch(err=>{console.log(err)})
    }