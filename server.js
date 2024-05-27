const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const hotelRouter = require("./data/routes/hotel.router");
const hotelDataAddedToDBRouter = require("./data/routes/dataimport.router");
const singleHotelRouter = require("./data/routes/singlehotel.router"); 
const wishlistRouter = require("./data/routes/wishlist.router");
const authRouter = require("./data/routes/authrouter");
const connectDB = require("./config/dbconfig");
const cors = require('cors')
const app = express();
connectDB();
app.use(cors())
app.use(express.json());
const PORT = 4000;
 
 app.use("/api",require("./data/routes/dataimport.router"))
 app.use("/api",require("./data/routes/categoryimport.router"))
 app.use("/api/hoteldata", hotelDataAddedToDBRouter)
 app.use("/api/hotels",hotelRouter);
 app.use("/api/hotels",singleHotelRouter);
 app.use("/api/gethoteldata", require('./data/routes/singlehotel.router'))
 app.use("/api/auth",authRouter);
 app.use("/api/wishlist",wishlistRouter);
 

   app.listen(PORT ,()=> {
      console.log(`Server is Running at http:localhost:${PORT}`)
   })
 

