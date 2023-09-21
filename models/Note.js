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
    reactPageID: {
        type: String,
        required: true
    },
    reactId: {
        type: String,
        required: true
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