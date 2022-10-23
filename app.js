const express=require('express');
const app=express();
const multer=require('multer');
const bodyParser=require('body-parser');
let port= process.env.PORT || 9090;
const supplierRoutes = require('./routes/supplier');

app.use(express.json()); 
app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/',(req,res)=>{
        res.send(`Welcome to heartbeat`);
})

app.get('/form',(req,res)=>{
        res.sendFile(__dirname+'/public/index.html');
})
app.use("/supplier",supplierRoutes);
app.listen(port,(err)=>{
    if(err){
        console.log('connection failed')
    }
    else{
        console.log(`server is running on the port number${port}`)
    }
})

