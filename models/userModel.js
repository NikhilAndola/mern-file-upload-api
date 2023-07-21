const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        requierd: true,
    },
    image: {
        type: String,
        requierd: true,
    },
    mobile: {
        type: String,
        requierd: true,
    },
    type: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("User", userSchema);