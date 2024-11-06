const express = require('express')
const app = express();
const db= require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


//const MenuItem=require('./models/MenuItem');

app.get('/', function (req, res) {
  res.send('Hello welcome to my hotel,how can i assit you')
})

const personRoutes = require('./routes/personRoutes'); 
const MenuItem=require('./routes/menuroutes');

 app.use('/person',personRoutes);
 app.use('./menu',MenuItem);

app.listen(3000,()=>{
    console.log('listening on port 3000')
})