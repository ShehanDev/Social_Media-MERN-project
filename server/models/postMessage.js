import mongoose from "mongoose";

//creating schema for posts
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFiles: String,
  likeCount: {
    type: String,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
//covert schema into the model

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
