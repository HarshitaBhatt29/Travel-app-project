const express = require('express');
const Hotel = require("../../model/hotel_model");
const hotel = require("../hotel");
const router = express.Router()

router.post('/posthoteldata', async (req, res) => {
  try {
    let data = await Hotel.create(hotel.data);
    console.log(hotel.data)
    res.send(data)
  }
  catch (err) {
    console.log(err);
    res.json({ message: err })
  }
})

router.get('/gethoteldata', async (req, res) => {
  const hotelCategory = req.query.category
  try {
    let hotels
    if (hotelCategory) {
      const data = await Hotel.find({ category: hotelCategory });
      console.log(data)
      res.send(data)
    }
    else {
      hotels = await Hotel.find({});
    }
    hotels ? res.json(hotels) : res.status(404).json({ message: "No data found" })
  }
  catch (err) {
    console.log(err);
    res.json({ message: err })
  }
})

module.exports = router;

