const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name.']
    },
    email: {
        type: String,
        required: [true, 'Please add your email.']
    },
    password: {
        type: String,
        required: [true, 'Please add a password.']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
    { timestamps: true, }
)

module.exports = mongoose.model('User', UserSchema)