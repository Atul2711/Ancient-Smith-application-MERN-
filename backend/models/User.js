const mongoose=require('mongoose');

//Schema
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }
,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    }
    ,
    profilepicture:{
        type:String,
        default:""
    }
},{
    timestamps:true
});

// Collection
module.exports=mongoose.model("User",userSchema);