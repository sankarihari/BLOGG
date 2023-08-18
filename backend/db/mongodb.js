const mongoose = require('mongoose');
mongoose.connect(process.env.Mongodb_url)
.then(()=>{
    console.log(`Connected to MONGODB Atlas`);
})
.catch(()=>{
    console.log(`ERROR!!!!Cannot connect to DB`); 
})