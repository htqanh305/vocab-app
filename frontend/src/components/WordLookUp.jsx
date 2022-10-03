import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {BiFontSize, BiSearchAlt} from 'react-icons/bi'
import axios from 'axios'



function WordLookUp() {
    const [lookUp, setLookUp] = useState({
        word: '',
    })
    const { word } = lookUp

    const [resultWord, setResultWord] = useState('')
    const [result, setResult] = useState([])    
    const dispatch = useDispatch()
    
    const key = process.env.REACT_APP_RapidAPI_Key
    const host = process.env.REACT_APP_RapidAPI_Host
    
    
    const lookUpDef = async (word) => {
  
        const options = {
        method: 'GET',
        url: 'https://wordsapiv1.p.rapidapi.com/words/' + word ,
        headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': host
        }}
      
       await axios.request(options)
       .then(function(response) {
        console.log(response.data.word)
        console.log(response.data.results)
        
        setResultWord(response.data.word)
        setResult(response.data.results)
        })  
               
        .catch(function (error) {
          console.error(error)
        });
        
    }
      
        
    const onChange = (e) => {
        setLookUp((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,   
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()   
        dispatch(lookUpDef(word))     
    }

        
    return (        
        <>
        <section className="form">

            <form onSubmit={onSubmit}>
                <ul>
                    <li className="search">
                        <input className="search-input" type=" text" placeholder="Look up a word" 
                        name='word' id='word' value={word} required onChange={onChange} />
                    </li>
                    <li>
                        <button className="search-btn" type='submit'><BiSearchAlt/></button>
                    </li>
                </ul>               
                
            </form>   
        </section>

        <section className='def-content'> 
            <h1 className = "word">{resultWord}</h1>
            <ul className='def-list'>
                {result.map((item, index) => {
                    return (
                                <li className='def-item' key={index}>
                                    <p> <h4 style={{color: '#fff7d0'}} >{index + 1}. </h4>{"("}{item.partOfSpeech}{")"} {item.definition}</p> 
                                </li>
                    )
                })}
            </ul>                        
        </section>
        </>
            
        
  )

}

export default WordLookUp