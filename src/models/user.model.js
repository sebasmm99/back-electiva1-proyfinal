const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
    active: {
        type: Boolean,
        require: true,
    },
    role: {
        type: String,
        require: false,
    },
})

module.exports = mongoose.model('userCollection', userSchema)
