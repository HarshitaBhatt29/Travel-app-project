const Hotel = require("../model/hotel_model");

const singleHotelHandler = async(req, res)=>{
    try{
        const { id} = await req.params;
        console.log(req.params)
        const hotel = await Hotel.findById(id)
        res.json(hotel)
    }catch(err){
        res.status(404).json({message:"no hotel found"})
    }

}
module.exports = singleHotelHandler;