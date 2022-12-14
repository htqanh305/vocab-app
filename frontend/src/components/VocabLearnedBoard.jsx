import { useState} from 'react'

import {useSelector} from 'react-redux' 
import VocabLearnedItem from './VocabLearnedItem'
import Pagination from './Pagination'
import { useEffect } from 'react'



function VocabLearnedBoard() {

  const learnedVocabs = useSelector((state) => state.vocabs.learnedVocabs)
  const [vocabs, setVocabs ] = useState(learnedVocabs)
  const [cardsPerPage] = useState(6)
  useEffect(() => { setVocabs(learnedVocabs)},[learnedVocabs])

    // this allow the mutation of the array 
    const sortVocabs = [...learnedVocabs]
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
        setVocabs(learnedVocabs)        
    }

    return (
      <>
        <div className="title"> Learned vocabulary</div>
                
        <section className="content">
          {learnedVocabs.length > 0 ? (
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


                <Pagination vocabs={vocabs} Card={VocabLearnedItem} cardLimit={cardsPerPage}/>

            </div>) :
          ( <div>
              <h3>You have not learned any words.</h3>
              
          </div>          
          )}

        </section>
      </>
    )

}

export default VocabLearnedBoard