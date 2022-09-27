import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom' // for redirecting
import { searchVocabs } from '../features/vocabs/vocabSlice'
import {BiSearchAlt} from 'react-icons/bi'

function VocabSearch() {
    const [search, setSearch] = useState({
        word: '',
    })
    const { word } = search
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const onChange = (e) => {
        setSearch((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,   
        }))
    }
    

    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/collection')
        dispatch(searchVocabs(word)) 
    }

    
    return (        
        <section className="form">

            <form onSubmit={onSubmit}>
                <ul>
                    <li>
                        <input className="search-input" type=" text" placeholder="Search friends' cards" 
                        name='word' id='word' value={word} required onChange={onChange} />
                    </li>
                    <li>
                        <button className="search-btn" type='submit'><BiSearchAlt/></button>
                    </li>
                </ul>
                
                
            </form>   
            
        </section>
  )

}

export default VocabSearch