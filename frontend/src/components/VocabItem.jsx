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
        <div>
            {new Date(vocab.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>{vocab.word}</h2>
        <h3>Definition: {vocab.definition}</h3>
        <h3>My sentence: "{vocab.sentence}"</h3>


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