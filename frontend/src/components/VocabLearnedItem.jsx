function VocabLearnedItem({vocab}) {
    return (    
        <div className="vocab">            
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card-block">
                        <div>
                            <p>Learned on: {new Date(vocab.updatedAt).toLocaleDateString('en-US')}</p>                            
                        </div>
                            <h1 className="word">{vocab.word}</h1>
                            <h3 className="sentence">Sentence: "{vocab.sentence}"</h3>
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
        </div>  
  )
}

export default VocabLearnedItem