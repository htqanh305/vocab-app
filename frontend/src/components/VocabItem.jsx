import {useDispatch} from 'react-redux'
import { deleteVocab, getVocabs, getLearnedVocabs } from '../features/vocabs/vocabSlice'
import { useState } from 'react'
import Popup from './Popup'
import VocabEdit from './VocabEdit'

function VocabItem({vocab}) {
    const dispatch = useDispatch()
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
    <div className="vocab">
                
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div className="card-block">
                        <div>
                            <p>{new Date(vocab.createdAt).toLocaleDateString('en-US')}</p>
                            
                        </div>
                        <h1 className="word">{vocab.word}</h1>
                        <h3>My sentence: "{vocab.sentence}"</h3>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div className="card-block">
                        <h4>( {vocab.wordType} )</h4>
                        <h3>Definition: {vocab.definition}</h3>
                    </div>
                </div>
            </div>
        </div>

        
       <button onClick={() => setButtonPopup(true)} className="edit" > Edit </button>
       {/*<button onClick={async () => {
           await dispatch(editVocab(vocab._id))
            dispatch(getVocabs()) }} className="edit">Edit</button> */}

        <button onClick={async () => {
            await dispatch(deleteVocab(vocab._id))
            dispatch(getVocabs())
            dispatch(getLearnedVocabs())
            }} className="close">X</button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <VocabEdit key={vocab._id} vocab={vocab}/>
        </Popup>

    </div>
    
  )
}

export default VocabItem