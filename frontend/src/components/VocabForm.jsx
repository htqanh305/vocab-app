import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { createVocab } from '../features/vocabs/vocabSlice'


function VocabForm() {
    const [wordCard, setCard] = useState({
        word: '',
        wordType: '',
        definition: '',
        sentence: '',
    })
    const { word, definition, sentence, wordType } = wordCard
    
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
                <input type="text"  name='word' id='word' value={word} required
                onChange={onChange} />
                

                <fieldset class="word-type">
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
                
              


                <label htmlFor="definition">Add a definition:</label>
                <input type="text"  name='definition' id='definition' value={definition} required
                onChange={onChange} />

                <label htmlFor="sentence">Add a sentence:</label>
                <textarea type="text"  name='sentence' id='sentence' value={sentence} required
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