const mongoose=require('mongoose');

//Schema
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

// Collection
module.exports=mongoose.model("Category",categorySchema);