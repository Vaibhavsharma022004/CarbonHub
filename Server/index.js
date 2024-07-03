const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoute = require('./routes/auth.routes.js');
const calculateRoute = require('./routes/calc.route.js');
// const profileRoute = require('./routes/profile.route.js');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Connected to Database'))
.catch((err) => console.log(err));

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));


app.use('/api/auth',authRoute);
app.use('/api/calculate',calculateRoute);
// app.use('/api/profile',profileRoute);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
  
    res.json({
      success : false,
      message : message,
      statusCode : statusCode
    })
  })



app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
