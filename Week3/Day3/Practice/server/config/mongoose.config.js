const mongoose=require("mongoose")
const myDB=process.env.DB
mongoose.connect(`mongodb://127.0.0.1:27017/${myDB}`)
.then(()=>console.log('established a connection to the facture'))
.catch(err=>console.log('Sorry wait for a second',err))