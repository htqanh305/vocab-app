import {useSelector, useDispatch} from 'react-redux' // grab user to check state
import VocabSearchItem from './VocabSearchItem'



function VocabSearchResult() {

  const searchedVocabs = useSelector((state) => state.vocabs.searchedVocabs)

    return (
      <>
        
          
          {searchedVocabs.length > 0 ? (
            <div className="vocabs">
              {searchedVocabs.map((vocab) => (
                <VocabSearchItem key={vocab._id} vocab={vocab} />
              ))}

            </div>
          ) : 
          ( <div >            
              
          </div>
          
          )} 

        
      </>
    )

}

export default VocabSearchResult