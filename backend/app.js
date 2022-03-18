const express =require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoute=require('./routes/posts');
const catRoute=require('./routes/categories');
const multer = require("multer");
const path=require('path');



dotenv.config();
app.use(express.json());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose.connect(process.env.MONGO,{
    useNewUrlParser: true,
    
}).then(console.log("Connected")).catch((err)=>console.log(err));

const storage=multer.diskStorage({
   destination:function(req,file,cb){
       cb(null,"images")
   },
   filename:function(req,file,cb){
       cb(null,req.body.name);
   }
});

const upload=multer({storage:storage});

app.post("/api/upload",upload.single("file"),function(req,res){
    res.status(200).json("File has been uploaded successfully");
})

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use('/api/categories',catRoute);

app.listen(5000,function(){
    console.log("Server is running on port 5000");
});