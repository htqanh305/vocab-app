import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { editVocab, getVocabs } from '../features/vocabs/vocabSlice'


function VocabNewEdit({vocab}) {
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

                <fieldset className="word-type-edit">
                    <legend>Type of the word: </legend>

                    <div> Noun <input type="radio"  name='wordType' id='n' value='n' required
                    onChange={onChange} />  </div> 
                    <div> Pronoun <input type="radio"  name='wordType' id='pronoun' value='pronoun' required
                    onChange={onChange} />  </div>
                    <div> Verb <input type="radio"  name='wordType' id='v' value='v' required
                    onChange={onChange} />  </div>
                    <div> Adjective <input type="radio"  name='wordType' id='a' value='a' required
                    onChange={onChange} />  </div>
                    <div> Adverb <input type="radio"  name='wordType' id='adv' value='adv'required
                    onChange={onChange} /> </div>
                    <div>Prepositon<input type="radio"  name='wordType' id='prep' value='prep' required
                    onChange={onChange} /> </div>
                    <div>Conjunction <input type="radio"  name='wordType' id='conj' value='conj' required
                    onChange={onChange} /> </div>
                    <div>Interjection<input type="radio"  name='wordType' id='int' value='int' required
                    onChange={onChange} /> </div> 
                </fieldset>
            </div>
            <div className="form-group">
                <button className="edit-btn" type='submit' >
                    Edit Card
                </button>
            </div>
        </form>
    </section>
  )

}

export default VocabNewEdit