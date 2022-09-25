import {useSelector, useDispatch} from 'react-redux' 
import VocabLearnedItem from './VocabLearnedItem'



function VocabLearnedBoard() {

  const learnedVocabs = useSelector((state) => state.vocabs.learnedVocabs)

    return (
      <>
        <div className="title"> Learned vocabulary</div>
                
        <section className="content">
          {learnedVocabs.length > 0 ? (
            <div className="vocabs">
              {learnedVocabs.map((vocab) => (
                <VocabLearnedItem key={vocab._id} vocab={vocab} />
              ))}

            </div>
          ) : 
          ( <div>
              <h3>You have not learned any words.</h3>
              
          </div>
          
          )} 

        </section>
      </>
    )

}

export default VocabLearnedBoard