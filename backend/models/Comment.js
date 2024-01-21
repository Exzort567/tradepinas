const mongoose=require("mongoose")

const commentSchema=new mongoose.Schema({
    comment:{
        type: String,
        required: true,
        

    },
    author:{
        type: String,
        required: true,

    },
    postId:{
        type: String,
        required: false,
    },
    userId:{
        type: String,
        required: true,
    }
}, {timestamps:true})

module.exports = mongoose.model("Comment", commentSchema)

