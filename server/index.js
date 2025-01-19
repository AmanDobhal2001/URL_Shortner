const express=require('express');
const port=5000;
const app=express();
const {handleConnection}=require('./connection.js');
const router=require('./routes/url.js');

//Connection
handleConnection('mongodb://localhost:27017/URL_Shortner');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',router);

app.listen(port,()=>{
    console.log(`The app is listening at port ${port}`);
})