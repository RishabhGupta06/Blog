const express = require('express');
const path = require('path');


const app = express();
const port = 8000;


app.set('view engine',ejs);
app.set('views',path.resolve("./views"));

app.listen(port,()=>('server is running at the port'));