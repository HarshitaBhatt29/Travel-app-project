const express = require('express');
const Category = require("../../model/category.model");
const categories = require("../../data/categories");
const router = express.Router()

router.post('/postcategory', async (req, res) => {
  try {
    let categoriesdata = await Category.create(categories.data);
    console.log(categoriesdata)
    res.send(categoriesdata)
  }
  catch (err) {
    console.log(err);
    res.json({ message: err })
  }
})

// this  is for get the category data from mongodb

router.get('/getcategory', async (req, res) => {
  try {
    // await Category.remove()
    let categoriesdata = await Category.find({});
    console.log(categoriesdata)
    res.send(categoriesdata)
  }
  catch (err) {
    console.log(err);
    res.json({ message: err })
  }
})
module.exports = router;

//to post hotel data write        "http://localhost:4000/api/posthoteldata"

//to get hotel data write         "http://localhost:4000/api/gethoteldata"

//to post category data write     "http://localhost:4000/api/postcategory"

//to post category data write     "http://localhost:4000/api/getcategory"
