require('dotenv').config()  //importing the env file

const express=require('express');
const app=express();
const process=require('process');
const path=require('path');
const port=process.env.PORT || 3000;

require("./db/connection.js")
const Register=require("./models/register.js");
const { Script } = require('vm');
const { log } = require('console');

app.use(express.urlencoded({extended:false}))

const staticPath=path.join(__dirname,"../html")

app.use(express.static(staticPath))

app.set("views", staticPath)
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get("/register", (req,res)=>{
    res.render("login")
});
app.get("/login", (req,res)=>{
    res.render("project")
});

app.post("/register",async(req,res)=>{
    try{
        const addData=new Register({
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone
        })
        const saveData=await addData.save();
        res.status(201).render("index")
    }catch(error){
        res.status(400).send(error);
    }
});

app.post("/login",async(req,res)=>{
    try {
            const email=req.body.email
            const password=req.body.password
            const user=await Register.findOne({email:email})
            // res.send(user)
            if(user.password===password){
                res.status(201).render("project")
            }
            else{
                res.send("password doesn't match")
            }

    } catch (error) {
        res.status(400).send("invalid credentials")
    }
})

app.listen(port,()=>{
    console.log(`server is running at port: ${port}`)
})