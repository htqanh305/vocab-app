import { useState} from 'react'
import {useSelector} from 'react-redux' // grab user to check state
import VocabSearchItem from './VocabSearchItem'
import Pagination from './Pagination'



function VocabSearchResult() {

  const searchedVocabs = useSelector((state) => state.vocabs.searchedVocabs)
  const [cardsPerPage] = useState(6)

  const [vocabs, setVocabs ] = useState(searchedVocabs)

  console.log('assigned', vocabs)

  // this allow the mutation of the array 
  const sortVocabs = [...searchedVocabs]
  sortVocabs.sort((a,b) => {
      if (a.word < b.word) return -1
      if (a.wod > b.word) return 1
      return 0
  })
 
  // sort cards alphabetically
  const alphaOrder = () => {
      setVocabs(sortVocabs)        
  }

  // sort cards alphabetically
  const dateOrder = () => {
      setVocabs(searchedVocabs)        
  }

    return (
      <>
        
          
          {searchedVocabs.length > 0 ? (            
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
              <Pagination vocabs={vocabs} Card={VocabSearchItem} cardLimit={cardsPerPage}/>
            </div>
          ) : 
          ( <div >            
              
          </div>
          
          )} 

        
      </>
    )

}

export default VocabSearchResult