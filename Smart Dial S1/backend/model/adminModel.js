const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique:true,
    },
    password: {
        type: String,
        required: [true, "Please add password"]
    },
},
)
module.exports = mongoose.model('Admin', adminSchema)