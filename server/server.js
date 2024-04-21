const express = require('express');
const cors = require('cors');
const app = express();
const appRoutes = require('./routes/index')
const corsOptions = {
    credentials: true,
    origin: "*",
  };
app.use(cors({ optionsSuccessStatus: 200, maxAge: 2 }));
app.use(function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  next();
})
app.listen(4000,()=>{
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    app.use('/api',appRoutes);
    console.log(`Server started at Port 4000`);
})