import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { editVocab, getVocabs } from '../features/vocabs/vocabSlice'


function VocabEdit({vocab}) {
    const [wordCard, setCard] = useState({
        word: '',
        definition: '',
        sentence: '',
    })
    const { word, definition, sentence } = wordCard
    
    const dispatch = useDispatch()
    
    const onChange = (e) => {
        setCard((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,   
        }))
    }
    

    const onSubmit = async (e) => {
        e.preventDefault()

        await dispatch(editVocab({id: vocab._id, vocabData: wordCard}))
        dispatch(getVocabs())
    }

    return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="word">Edit word:</label>
                <input type="text"  name='word' id='word' placeholder={vocab.word} value={word} required
                onChange={onChange} />

                <label htmlFor="definition">Edit definition:</label>
                <input type="text"  name='definition' id='definition' placeholder={vocab.definition} value={definition} required
                onChange={onChange} />

                <label htmlFor="sentence">Edit sentence:</label>
                <textarea type="text"  name='sentence' id='sentence' placeholder={vocab.sentence} value={sentence} required
                onChange={onChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit' >
                    Edit Card
                </button>
            </div>
        </form>
    </section>
  )

}

export default VocabEdit