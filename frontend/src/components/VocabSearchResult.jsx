import { useState} from 'react'
import {useSelector} from 'react-redux' // grab user to check state
import VocabSearchItem from './VocabSearchItem'
import Pagination from './Pagination'



function VocabSearchResult() {

  const searchedVocabs = useSelector((state) => state.vocabs.searchedVocabs)
  const [cardsPerPage] = useState(6)

  
    return (
      <>                 
          {searchedVocabs.length > 0 ? (            
            <div>
              
              <Pagination vocabs={searchedVocabs} Card={VocabSearchItem} cardLimit={cardsPerPage}/>
            </div>
          ) : 
          ( <div >            
              
          </div>
          
          )} 

        
      </>
    )

}

export default VocabSearchResult