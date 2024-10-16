const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
    product : {
        type : String
    },
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
    },
    isLoss : {
        type : Boolean
    }
})


module.exports ={ PositionsSchema};


