import mongoose from "mongoose";

//carating schema for posts 
const  postShema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFiles: String,
    likecount: {
        type: String ,
        default: 0
    },
    createdAt :{
        type : Date,
        default: new Date()
    },
});
//covert scheama into the model 

const PostMessage = mongoose.model('PostMessage',postShema);

export default PostMessage;
