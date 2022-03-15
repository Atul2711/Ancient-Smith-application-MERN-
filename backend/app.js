const express =require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoute=require('./routes/posts');
const catRoute=require('./routes/categories');
const multer = require("multer");



dotenv.config();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/BlogDB",{useNewUrlParser:true});

const storage=multer.diskStorage({
   destination:function(req,file,cb){
       cb(null,"images")
   },
   filename:function(req,file,cb){
       cb(null,"test.jpg");
   }
});

const upload=multer({storage:storage});

app.post("/api/uploads",upload.single("file"),function(req,res){
    res.status(200).json("File has been uploaded successfully");
})

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use('/api/categories',catRoute);

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});