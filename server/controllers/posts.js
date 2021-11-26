
export const getPosts = async (req,res)  => {
    try {
        //Getting post is Asyncrones action 
        const postMessages = await PostMessage.find(); 
        req.status(200).json(postMessages);
    } catch (error) {
       // res.status(404).json({message: error.message});
    }
    
}

export const createPosts = async (req,res) => {
    const post = rq.body;
    const newPost  = new PostMessage(post); 
    try {
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
   
}