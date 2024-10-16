const mongoose  = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
    name: { 
        type : String,
    },
    avg : {
        type : Number
    },
    price : {
        type : Number
    },
    net : {
        type : String
    },
    
    day : {
        type : String
    }
})


module.exports = {HoldingsSchema}