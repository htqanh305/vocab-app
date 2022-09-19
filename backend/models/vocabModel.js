const mongoose = require('mongoose')

const vocabSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    author: {
        type: String,
        required: true,
        ref: 'User'
    },
    word: {
        type: String,
        required: [true, 'Please add a word']
    },
    wordType: {
        type: String,
        required: [true, 'Please add a word type']
    },
    definition: {
        type: String,
        required: [true, 'Please add a definition']
    },
    sentence: {
        type: String,
        required: [true, 'Please add a sentence']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Vocab', vocabSchema)