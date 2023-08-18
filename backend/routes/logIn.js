const express=require('express');
const router= express.Router()
const blogsignup=require('../model/blogsignup');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

// login
router.post("/login", async (req,res)=>{
   let username = req.body.Username;
   let password = req.body.Password;
   const user = await blogsignup.findOne({Username:username});
   if(!user){
    res.json({message: "user not found"})

   }
   try {
    if(user.Password==password){
        res.json({message: "login successfully"})
    }
    else{
        res.json({message: "login failed"})
    }
} catch (error) {
    console.log(error)
   }
});

// Signup
router.post("/signup", async(req,res)=>{
    try {
        console.log(req.body);
        let item = req.body;
        const newUser = blogsignup(item);
         await newUser.save();
        res.json({message:"Registered successfuly..."});
    } catch (error) {
        res.json("Unable to register");
    }
});


module.exports=router;