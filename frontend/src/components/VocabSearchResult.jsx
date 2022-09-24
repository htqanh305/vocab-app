import {useSelector, useDispatch} from 'react-redux' // grab user to check state
import VocabSearchItem from './VocabSearchItem'
import VocabSearch from './VocabSearch'


function VocabSearchResult() {

  const searchedVocabs = useSelector((state) => state.vocabs.searchedVocabs)

    return (
      <>
        <section className="heading">
          <p>Search your friends' cards</p>
        </section>
        <VocabSearch/>
        
        <section className="content">
          {searchedVocabs.length > 0 ? (
            <div className="vocabs">
              {searchedVocabs.map((vocab) => (
                <VocabSearchItem key={vocab._id} vocab={vocab} />
              ))}

            </div>
          ) : 
          ( <div>
              <h3> You have not searched any cards or  </h3>
              <h3> Your friends have not created any card for the word you searched </h3>
          </div>
          
          )} 

        </section>
      </>
    )

}

export default VocabSearchResult