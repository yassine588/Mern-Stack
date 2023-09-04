const  axios = require("axios");
const express = require("express");
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
const PORT = 5000;
app.get("/api/:id",(req,res)=>{
    const pokemonIdx=req.params.id
    const apiUrl = `https://pokeapi.co/api/v2/pokemon-form/${pokemonIdx}`
    axios .get(apiUrl)
    .then((response) => {
        res.json(response.data);
      })
      .catch((err) => console.log(err))
})
const server = app.listen(PORT, () => {
    console.log(`hello  ${PORT}`);
});
