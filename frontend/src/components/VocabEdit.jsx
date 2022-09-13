import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { editVocab } from '../features/vocabs/vocabSlice'


function VocabEdit() {
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

        dispatch(editVocab(wordCard))
    }

    return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="word">Edit word:</label>
                <input type="text"  name='word' id='word' value={word} 
                onChange={onChange} />

                <label htmlFor="definition">Edit definition:</label>
                <input type="text"  name='definition' id='definition' value={definition} 
                onChange={onChange} />

                <label htmlFor="sentence">Edit sentence:</label>
                <input type="text"  name='sentence' id='sentence' value={sentence} 
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