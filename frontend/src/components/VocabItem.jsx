import {useDispatch} from 'react-redux'
import { deleteVocab, getVocabs, editVocab } from '../features/vocabs/vocabSlice'
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
                            {new Date(vocab.createdAt).toLocaleDateString('en-US')}
                        </div>
                        <h2>{vocab.word}</h2>
                            
                        <h3>My sentence: "{vocab.sentence}"</h3>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div className="card-block">
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
            dispatch(getVocabs())}} className="close">X</button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <VocabEdit key={vocab._id} vocab={vocab}/>
        </Popup>

    </div>
    
  )
}

export default VocabItem