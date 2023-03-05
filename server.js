const express=require('express');
const collection= require("./schema")
const cors=require('cors')
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
app.use(cors())
const mongoUrl='mongodb+srv://divya:95509divya@cluster0.wpi6jeu.mongodb.net/?retryWrites=true&w=majority'

mongoose
  .connect(mongoUrl,{useNewUrlParser: true,})
  .then(()=>{
    console.log("connected to database");
  })
  .catch((e)=>console.log(e));


app.get("/login",cors(),(req,res)=>{})
{console.log("login console")}

app.post("/login",async(req,res)=>{
  const{email,password}=req.body

  try{
    const check=await collection.findOne({email:email})

    if(check){
      res.json("exists")
    }
    else{
      res.json("does not exist")
    }
  }
  catch(e){
    res.json("does not exist")
  }
})

app.get("/register",cors(),(req,res)=>{})

app.post("/register",async(req,res)=>{
  const{firstname,lastname,email,password}=req.body

  const data={
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password
  }

  try{
      const check=await collection.findOne({email:email})

      if(check){
        res.json("exists")
      }
      else{
        res.json("does not exist")
        await collection.insertMany([data])
      }
  }
  catch(e){
      res.json("not exist")
  }
})

app.get("/wel",async (req,res)=>{
  try {
    const user=await collection.find({});
    res.send({status:"ok",data:user})
  } 
  catch (error) {
    console.log(error);
  }
})


app.listen(5000,()=>{
  console.log("Server started at port 5000");
});