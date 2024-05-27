// const mongodb = require('mongodb')
const mongoose = require('mongoose');
const URL = 'mongodb+srv://harshitabhatt231:harshita2001@cluster0.e5j9xq9.mongodb.net/ABESIT?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
    try {
        await mongoose.connect(URL)
            .then(() => {
                console.log('connected succesfully')
            }).catch((error) => {
                console.log(error)
            })
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDB;