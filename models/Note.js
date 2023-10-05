const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    page: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Page'
    },
    note: {
        type: String,
        required: [true, 'Please add a note.']
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    },
},
    { timestamps: true, }
)

module.exports = mongoose.model('Note', NoteSchema)