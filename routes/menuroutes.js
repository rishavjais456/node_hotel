const express =require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/', async (req, res) => {
    try {
       const data = req.body;
       const MenuItem = new MenuItem(data);
 
       const savedPerson = await MenuItem.save();
       console.log('Data saved successfully');
       res.status(200).json(savedPerson);
    } catch (err) {
       console.error("Error saving person:", err);  // Log the specific error
       res.status(500).json({ error: 'Internal server error' });
    }
 });
 
 router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('Data fetch successfully');
        res.status(200).json(data);
    }catch(err){
        console.error("Error saving person:", err);  // Log the specific error
        res.status(500).json({ error: 'Internal server error' });
    }
 });
//hello
 module.exports=router;