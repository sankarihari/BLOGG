const mongoose = require ('mongoose');
const bloggSchema = mongoose.Schema({
    title:String,
    content:String,
    urlToImage:String,
    publishedAt:{
        type:Date,
        default:new Date()
    }

});

const bloggModel=mongoose.model('vloggs',bloggSchema);
module.exports=bloggModel;