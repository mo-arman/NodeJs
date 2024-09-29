require('dotenv').config()
const express = require('express');

const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('Hello Arman')
})

app.get('/twitter',(req,res)=>{
    res.send('Welcome my Twitter Profile')
})

app.get('/chicken',(req,res)=>{
    let customized_chicken = {
        name:"Biryani Handi",
        kg:"20kg",
        price:"350 for two",
        cuisines:"Handi chicken,Biryani,Rice Pudding",
        is_Veg:false,
        is_chutney:true
    }
    res.send(customized_chicken);
})

app.get('/login',(req,res)=>{
    res.send('<h1>Code and Coffe')
})

app.listen(process.env.PORT,()=>{
    console.log('listening on port 3000'); // check server is live and Alive
}) // port 