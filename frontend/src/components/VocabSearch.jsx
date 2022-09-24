import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { searchVocabs } from '../features/vocabs/vocabSlice'


function VocabSearch() {
    const [search, setSearch] = useState({
        word: '',
    })
    const { word } = search
    
    const dispatch = useDispatch()
    
    const onChange = (e) => {
        setSearch((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,   
        }))
    }
    

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(searchVocabs(word))            
    }

    
    return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="word">Enter the word you want to search:</label>
                <input type="text"  name='word' id='word' value={word} required
                onChange={onChange} />                
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit' >
                    Search
                </button>
            </div>
        </form>
    </section>
  )

}

export default VocabSearch