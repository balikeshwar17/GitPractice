const express=require('express');
const app=express();
const PORT = 5000;

app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('/signup',(req,res)=>{
    res.send("do signup");
})



app.listen(PORT,(req,res)=>{
    console.log(`server listening on port http://localhost:${PORT}`);
})