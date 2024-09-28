
const express = require('express') // import express
const app = express(); // they give any name but this is alrady maked so that using this name 


app.get('/', function (req, res) { // get a method request => req and response => res
  res.send('Welcome to my hotel....How i can help you')
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

app.post('/person',(req,res)=>{
    res.send('data is saved');
})

app.listen(3000,()=>{
    console.log('listening on port 3000'); // check server is live and Alive
}) // port 