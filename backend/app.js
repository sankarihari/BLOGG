const express = require ('express');
const app= new express();
const morgan = require ('morgan');
var cors = require('cors');
app.use(morgan("dev"));
require('dotenv').config();
require("./db/mongodb");
app.use(cors());


const blogRoutes =require('./routes/blogRoutes');
app.use('/api',blogRoutes);

const loginRoute= require('./routes/logIn');
app.use('/api',loginRoute);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});

