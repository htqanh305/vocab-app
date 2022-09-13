import {useDispatch} from 'react-redux'
import { deleteVocab, getVocabs, editVocab } from '../features/vocabs/vocabSlice'

function VocabItem({vocab}) {
    const dispatch = useDispatch()

    return (
    <div className="vocab">
        <div>
            {new Date(vocab.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>{vocab.word}</h2>
        <h3>Definition: {vocab.definition}</h3>
        <h3>My sentence: "{vocab.sentence}"</h3>

       {/*<button onClick={async () => {
           await dispatch(editVocab(vocab._id))
            dispatch(getVocabs()) }} className="edit">Edit</button> */}

        <button onClick={async () => {
            await dispatch(deleteVocab(vocab._id))
            /*dispatch(getVocabs())*/ }} className="close">X</button>
    </div>
  )
}

export default VocabItem