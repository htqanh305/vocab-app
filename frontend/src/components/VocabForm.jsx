import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { createVocab } from '../features/vocabs/vocabSlice'


function VocabForm() {
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
    

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createVocab(wordCard))
    }

    return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="word">Add a word:</label>
                <input type="text"  name='word' id='word' value={word} 
                onChange={onChange} />

                <label htmlFor="definition">Add a definition:</label>
                <input type="text"  name='definition' id='definition' value={definition} 
                onChange={onChange} />

                <label htmlFor="sentence">Add a sentence:</label>
                <input type="text"  name='sentence' id='sentence' value={sentence} 
                onChange={onChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit' >
                    Add Card
                </button>
            </div>
        </form>
    </section>
  )

}

export default VocabForm