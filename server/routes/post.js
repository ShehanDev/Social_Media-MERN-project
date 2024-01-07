  import  express from 'express';
//initializing routes
const router = express.Router();

//all routing pathes in controllers folder then import those follder
//routing path has one function name 

import { getPosts,createPosts }  from '../controllers/posts.js';
//http://localhost:50000/post
//adding routes
router.get('/', getPosts );
router.post('/',createPosts);




export default router;
