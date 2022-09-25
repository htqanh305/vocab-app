function VocabLearnedItem({vocab}) {
    return (    
        <div className="vocab">            
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div className="card-block">
                            
                            <h1 className="word">{vocab.word}</h1>
                            <h3>Sentence: "{vocab.sentence}"</h3>
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
        </div>  
  )
}

export default VocabLearnedItem