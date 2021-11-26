import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';

//intialize the app 
const  app = express();

//set routing pathes in routes follder eg all stats with post
app.use('/posts',postRoutes);


// intial the size to store the  photos to in this app , 
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//Linking the mongo atles database 
const CONNECTION_URL = 'mongodb+srv://User1:1234@cluster0.fjmlo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);