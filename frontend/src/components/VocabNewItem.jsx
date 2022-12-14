import {useDispatch} from 'react-redux'
import { deleteVocab, getVocabs, getLearnedVocabs } from '../features/vocabs/vocabSlice'
import { useState } from 'react'
import Popup from './Popup'
import VocabNewEdit from './VocabNewEdit'

function VocabNewItem({vocab}) {
    const dispatch = useDispatch()
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
    <div className="vocab">
                
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="card-block">
                        <div>
                            <p>Created on: {new Date(vocab.createdAt).toLocaleDateString('en-US')}</p>                            
                        </div>
                        <h1 className="word">{vocab.word}</h1>
                        <h3 className="sentence">My sentence: "{vocab.sentence}"</h3>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="card-block">
                        <h4>( {vocab.wordType} )</h4>
                        <h3 className="definition">Definition: {vocab.definition}</h3>
                    </div>
                </div>
            </div>
        </div>

        
       <button onClick={() => setButtonPopup(true)} className="edit"> Edit </button>
       {/*<button onClick={async () => {
           await dispatch(editVocab(vocab._id))
            dispatch(getVocabs()) }} className="edit">Edit</button> */}

        <button onClick={async () => {
            await dispatch(deleteVocab(vocab._id))
            dispatch(getVocabs())
            dispatch(getLearnedVocabs())
            }} className="close">Mark Learned</button>

        <Popup  trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <VocabNewEdit key={vocab._id} vocab={vocab}/>
        </Popup>

    </div>
    
  )
}

export default VocabNewItem