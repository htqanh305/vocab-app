const express = require('express')
const router = express.Router()
const {getVocabs, searchVocabs, setVocab, putVocab, deleteVocab} = require('../controllers/vocabController')

const {protect} = require('../middleware/authMiddleware')

router.route('/')
    .get(protect, getVocabs)
    .post(protect, setVocab)
    

router.route('/:id')
    .put(protect, putVocab)
    .delete(protect, deleteVocab)

router.route('/:word')
    .get(searchVocabs)

module.exports = router