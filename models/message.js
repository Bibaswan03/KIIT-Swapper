const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    roll: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    section: {
        type: String,
    },
    message: {
        type:String,
    },
    reciever: {
        type: String,
    },
    status:{
        type:Boolean,
        default:false,
    }
}, { timestamps: true })

export default mongoose.models.Message || mongoose.model("Message", messageSchema)