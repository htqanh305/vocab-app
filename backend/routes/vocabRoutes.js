const express = require('express')
const router = express.Router()
const {getVocabs, getLearnedVocabs, searchVocabs, setVocab, putVocab, deleteVocab} = require('../controllers/vocabController')

const {protect} = require('../middleware/authMiddleware')

router.route('/')
    .get(protect, getVocabs)
    .post(protect, setVocab)

router.route('/get/learned')
    .get(protect, getLearnedVocabs)

router.route('/:id')
    .put(protect, putVocab)
    .delete(protect, deleteVocab)

router.route('/:word')
    .get(searchVocabs)

module.exports = router