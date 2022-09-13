const asyncHandler = require('express-async-handler')

const Vocab = require('../models/vocabModel')
const User = require('../models/userModel') // to use for put/delete => only put/delete one's own goals

// @desc Get vocabs
// @route GET /api/vocabs
// @access Private
const getVocabs = asyncHandler(async (req, res) => {
    const vocabs = await Vocab.find({ user: req.user.id }) // req.user.id gotten from the protect function calles by the route
    // so that to get vocabs from the user of right id (or token gotten from logn/create user)
    res.status(200).json(vocabs)
})

// @desc set vocab
// @route POST /api/vocabs
// @access Private
const setVocab = asyncHandler(async(req, res) => {
    if (!req.body.word || !req.body.definition || !req.body.sentence ) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    const vocab = await Vocab.create({
        word: req.body.word,
        definition: req.body.definition,
        sentence: req.body.sentence,
        user: req.user.id,
        author: req.user.name
    })
    res.status(200).json(vocab)
})

// @desc Put vocab
// @route PUT /api/vocabs
// @access Private
const putVocab = asyncHandler(async(req, res) => {
    const vocab = await Vocab.findById(req.params.id)

    if(!vocab) {
        res.status(400)
        throw new Error('Vocab not found')
    }


    //check if the token returns a valid user
    if(!reg.user){
        res.status(401)
        throw new Error('User not found')
    }
    // if valid user found, make sure logged in user matches goal's user
    if(vocab.user.toString() !== reg.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedVocab = await Vocab.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedVocab)
})

// @desc Delete vocabs
// @route DELETE /api/vocabs
// @access Private
const deleteVocab = asyncHandler(async(req, res) => {
    const vocab = await Vocab.findById(req.params.id)

    if(!vocab) {
        res.status(400)
        throw new Error('Vocab not found')
    }

    //check for user
     if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    // make sure logged in user matches goal's user
    if(vocab.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    await vocab.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getVocabs, 
    setVocab, 
    putVocab, 
    deleteVocab
}