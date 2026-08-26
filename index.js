const express = require('express');
const path = require('path');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');
 
const app = express();
const port = 8000;
mongoose.connect('mongodb://localhost:27017/blogify').then(e => console.log('Mongodb is connected'));

app.set('view engine',"ejs");
app.set('views',path.resolve("./views"));
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.render('home');
})

app.use('/user',userRouter);

app.listen(port,()=> console.log('server is running at the port'));