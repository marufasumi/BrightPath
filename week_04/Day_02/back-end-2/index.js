const express = require("express");
const cors = require("cors");

const app =express();
//middleware
app.use(express.json());
app.use(cors());

app.use(express.json());

const userController=require('./controller');
const {getAllHouses,deleteHouse,createHouse,updateHouse} = userController;


//routes
app.get('/api/houses',getAllHouses);
app.post('/api/houses',createHouse);
app.delete('/api/houses/:house_id',deleteHouse);
app.put('/api/houses/:house_id',updateHouse);


app.listen(4004,(req,res)=>{
    console.log(`Running on 4004`);

})