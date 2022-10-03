import { useState, useEffect} from 'react'
import {useSelector} from 'react-redux' 
import VocabNewItem from "./VocabNewItem"
import Pagination from './Pagination'



function VocabNewBoard() {
    const newVocabs = useSelector((state) => state.vocabs.vocabs)
    const [cardsPerPage] = useState(6)
    const [vocabs, setVocabs ] = useState(newVocabs)

    useEffect(() => { setVocabs(newVocabs)},[newVocabs])
  
    // this allow the mutation of the array 
    const sortVocabs = [...newVocabs]
    sortVocabs.sort((a,b) => {
        if (a.word < b.word) return -1
        if (a.word > b.word) return 1
        return 0
    })
   
    // sort cards alphabetically
    const alphaOrder = () => {
        setVocabs(sortVocabs)        
    }

    // sort cards alphabetically
    const dateOrder = () => {
        setVocabs(newVocabs)        
    }
  
    return (
        <>
            {vocabs.length > 0 ? (
            <div>
                <div className="sortButtons">
                    <ul >
                        <li>
                            <button className="sort btn-block" onClick={alphaOrder} >
                                Sort A-Z
                            </button>
                        </li>
                        <li>
                            <button className="sort btn-block" onClick={dateOrder} >
                                Sort by Most Recent
                            </button>
                        </li>                   
                        
                    </ul>
                </div>     

                 <Pagination vocabs={vocabs} Card={VocabNewItem} cardLimit={cardsPerPage}/>
              
            </div>
            ) : 
            (<h3> You have not created any vocabulary cards </h3>)} 
        </>
    )

}

export default VocabNewBoard