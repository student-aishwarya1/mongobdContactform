const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    pnumber:{
        type:Number
    },
    Cname:{
        type:String
    },
    msg:{
        type:String
    }
})

const User = mongoose.model('user',userSchema)

module.exports= User