const express = require('express'); //1/ require express
const bodyParser = require('body-parser'); //11/ make sure the data is parsed into json 
const { randomBytes } = require('crypto'); //8/ re: 7 




const app = express(); //2/ create a new app
app.use(bodyParser.json()); //12/make sure app uses body parser

const posts = {};       //5/ create object to store posts



//3/ create get and post routes for app
app.get('/posts', (req, res) => {
    res.send(posts);       //6/ send all the posts when one requests
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).tostring('hex');  //7/ whenever someone generates a post // generate a unique id and store // the post in the posts object
    const {title} = req.body;

    posts[id] = {    //9/ on theh post object add id and assign id and title
        id, title
    };

    res.status(201).send(posts[id]); //10/ send response back to user 

});                             
                                

app.listen(4000, () => {                //4/ have app listen on 4000
    console.log('listening on 4000');
});

//13/see package.json scripts addingn nodemon index.js