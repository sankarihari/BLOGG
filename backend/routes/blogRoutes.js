const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));


const blogData=require('../model/blogData');


// GET
router.get('/getdata',async(req,res)=>{
    try {
        const data = await blogData.find();
        res.send(data);
    }
     catch (error) {
        res.status(404).send('Data not found');
        console.log(error);
        
    }
})

// POST
router.post('/postdata', async(req,res)=>{
    try {
        const item = req.body;
        const newData = new blogData(item);
        const savedData= await newData.save();
        res.status(200).send('Posted Successfuly');
    } 
    catch (error) {
        res.status(404).send('Not Posted Successfuly');
        console.log(error);
        
    }
})
// UPDATE
router.put('/putdata/:id', async(req,res)=>{
    try {
        const id = req.body._id;
        const updateData={$set:req.body};
        const updatedPut = await blogData.findByIdAndUpadate(id,updateData);
        res.send(updatedPut);
        res.status(200).send('Updated Successfuly');
    } catch (error) {
        res.status(404).send('Not Upadated Successfuly');
        console.log(error);
    }
})
// DELETE
router.delete('/deletedata', async(req,res)=>{
    try {
        const index= req.params.id;
        const deleteData = await blogData.findByIdAndUpadate(index);
        res.send(deleteData);
        res.status(200);
    } catch (error) {
        res.status(404).send('Not Dleted Successfuly');
        console.log(error);
    }
})








module.exports=router;