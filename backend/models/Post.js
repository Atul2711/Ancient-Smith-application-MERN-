const mongoose=require('mongoose');

//Schema
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    }
,
    content:{
        type:String,
        required:true,
    },

    photo:{
        type:String,
        default:""
    },
    username:{
        type:String,
        required:true
    },
    categories:{
        type:Array
    }
},{
    timestamps:true
});

// Collection
module.exports=mongoose.model("Post",postSchema);