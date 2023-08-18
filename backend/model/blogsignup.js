const mongoose = require ('mongoose');
const signupSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },   
    Emailid:{
        type:String,
        required:true,
    },   
    Address:{
        type:String,
        required:true,
    },
    Phonenumber:{
        type:Number,
        required:true,
    },
    Username:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    }
});

const signupModel=mongoose.model('bloguser', signupSchema);
module.exports=signupModel;