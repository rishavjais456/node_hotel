const mongoose= require('mongoose');

//define mongodb connection url
const mongoURL= 'mongodb://127.0.0.1:27017/hotels'

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}) 
const db=mongoose.connection;

db.on('connected',()=>{
 console.log('conneted to mongodb server');
 
});



db.on('disconnected',()=>{
    console.log('disconneted to mongodb server');
});
db.on('error',()=>{
    console.log('error to mongodb server');
});

module.exports=db;