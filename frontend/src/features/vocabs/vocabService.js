import axios from 'axios'

const API_URL = 'http://localhost:5000/api/vocabs/'

// create new vocab
const createVocab = async (vocabData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, vocabData, config)
    return response.data
}


// get user vocab
const getVocabs = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// get learned vocab
const getLearnedVocabs = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + 'get/learned', config)

    return response.data
}

// search for word
const searchVocabs = async (word) => {
    const response = await axios.get(API_URL + word)

    return response.data
}

// edit user vocab
const editVocab = async (vocabId, vocabData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + vocabId, vocabData, config)

    return response.data
}

// delete user vocab
const deleteVocab = async (vocabId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + vocabId, config)

    return response.data
}



const vocabService = {
    createVocab,
    getVocabs,
    getLearnedVocabs,
    searchVocabs,
    editVocab,
    deleteVocab,
}

export default vocabService
