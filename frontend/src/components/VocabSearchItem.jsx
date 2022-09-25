

function VocabSearchItem({vocab}) {
    return (    
        <div className="vocab">            
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card-block">
                            <div>
                                <h6>Author: {vocab.author}</h6>
                            </div>
                            <h1 className="word">{vocab.word}</h1>
                            <h3>Sentence: "{vocab.sentence}"</h3>
                        </div>
                    </div>
                    <div className="flip-card-back">
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

export default VocabSearchItem